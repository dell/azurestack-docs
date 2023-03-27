---
title: "How to create a service principal name for Azure Stack Hub integrated with Active Directory Federation Services identity using PowerShell"
linkTitle: "Create AD FS SPN"
weight: 1
Description: >

---

### Overview

This article explains how to create a service principal name (SPN) to manage Azure Stack Hub integrated with Active Directory Federation Services (AD FS) identity using PowerShell.

For more information about this process, visit [Give an app access to Azure Stack Hub resources](https://learn.microsoft.com/en-us/azure-stack/operator/give-app-access-to-resources?tabs=az1%2Caz2&pivots=state-disconnected).

It will guide you through the creation of:

- An AD FS application and the associated service principal object which represents the application's identity within the Active Directory

- Role assignment

#### Prerequisites

Prerequisites from a Windows-based external client are:

- PowerShell 7.x and the Azure Stack Hub compatible PowerShell modules

  - [Install PowerShell Az module for Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/powershell-install-az-module)

- [Active Directory Federation Services identity integrated with Azure Stack Hub deployment](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-integrate-identity)

### Overview of the creation process for Azure Stack Hub SPN

{{% alert title="NOTE" color="primary" %}}
The procedure provided is designed for Azure Stack Hub Operators as it requires Privileged Endpoint (PEP) access as well as assumes the *Default Provider Subscription* and the Administrator Azure Resource Manager endpoint as the defaults; however, the same mechanism can be applied to the **User Subscriptions** with minimal changes to the code.

If you want to assign a role the SPN for a **User Subscription**, replace the Administrator Azure Resource Manager endpoint with the Tenant Azure Resource Manager endpoint and the *Default Provider Subscription* with *Subscription Name* you want to modify.
{{% /alert %}}

1. Declare your variables accordingly.

2. Log in to your Azure Stack Hub *Default Provider Subscription* with administrator user credentials (needs to have **Owner** role).
{{% alert title="CAUTION" color="warning" %}}
This requires interactive prompt as by default when using AD FS as your identity provider you cannot use user credentials in the non-interactive way.

This is the main reason why you would want to create an SPN so that you can automate your operations.
{{% /alert %}}

3. Create your AD FS application/service principal.

4. Assign the appropriate **Role** to your service principal.

{{% alert title="NOTE" color="primary" %}}
As a bonus, we include an example of how to assign the **Owner** role to an AD FS group

The current `AzureStack` modules do not support it natively, but this example will show you how to do it via API.

It is the preferred method of assigning roles, you should assign roles to a group rather than individual users.
{{% /alert %}}

5. Log in to your Azure Stack Hub *Default Provider Subscription* using the SPN account.

6. Verify SPN authentication and the role assignment.

### Create Azure Stack Hub SPN
{{< tabpane text=true >}}
  {{% tab header="**Service Principal credential**:" disabled=true /%}}
  {{% tab header="Certificate" %}}

#### Create a PFX Certificate

<pre><code class="language-PowerShell">#region Declare variables

$CertificateName = "ADFSAutomationCert"

$CertStore = "cert:\LocalMachine\My" # This can also be "cert:\CurrentUser\My" but in general service accounts cannot access CurrentUser cert store

$CertSubject = "CN=$CertificateName"

$PfxFilePath = "C:\Temp"

if (-not (Test-Path -Path $PfxFilePath)) {

    New-Item -ItemType Directory -Path $PfxFilePath -Force | Out-Null

}

$PfxFilePathFull = Join-Path -Path $PfxFilePath -ChildPath "$($CertificateName).pfx"

$PfxPassword = '""' | ConvertTo-SecureString -AsPlainText -Force # replace "" with an actual password or leave "" for it to be blank

#endregion

#region Create certificate to pass into new Application

$ExpiryDate = (Get-Date).AddDays(365) # You can change this to whatever fits your security profile better, default is 1 year

$Cert = New-SelfSignedCertificate -CertStoreLocation $CertStore -Subject $CertSubject -KeySpec KeyExchange -NotAfter $ExpiryDate

Write-Verbose -Message "Certificate ""$($Cert.Subject)"" with start date ""$($Cert.NotBefore)"" and end date ""$($Cert.NotAfter)"" created at ""$($PfxFilePathFull)""."

#endregion

#region Get a cert object from a .pfx file - you need it to create the SPN to begin with

$Cert = Get-PfxCertificate -FilePath $PfxFilePathFull -Password $PfxPassword

#endregion

#region Optional steps

#region Export the certificate so that you can import it on other environments

try {

    Export-PfxCertificate -Cert $Cert.PsPath -FilePath $PfxFilePathFull -Password $PfxPassword -ErrorAction Stop | Out-Null

} catch {

    throw "Failed to export certificate to ""$($PfxFilePathFull)"":`n$($_.Exception.Message)"

}

#endregion

#region Import the certificate into the certificate store on another environment

Import-PfxCertificate -CertStoreLocation $CertStore -FilePath $PfxFilePathFull -Password $PfxPassword -Exportable

#endregion

#endregion

</code></pre>

#### Create Azure Stack Hub SPN that uses certificate credential

<pre><code class="language-PowerShell">#region Declare variables

$CertificateName = "ADFSAutomationCert"

$PfxFilePath = "C:\Temp"

$PfxFilePathFull = Join-Path -Path $PfxFilePath -ChildPath "$($CertificateName).pfx"

$PfxPassword = '""' | ConvertTo-SecureString -AsPlainText -Force

$CertificateObject = Get-PfxCertificate -FilePath $PfxFilePathFull -Password $PfxPassword

$CertificateThumbprint = $CertificateObject.Thumbprint

if (!$CertificateThumbprint) {

    throw "Failed to obtain a thumbprint from certificate: $($PfxFilePathFull)"

}

$CloudAdminUsername = "CloudAdmin@azurestack.local"

[SecureString]$CloudAdminPassword = ConvertTo-SecureString "Password123!" -AsPlainText -Force

$ApplicationName = "ADFSAppCert"

$AzureStackRole = "Owner"

$ADGroupName = "AzureStackHubOwners"

$AzureStackAdminArmEndpoint = "https://adminmanagement.local.azurestack.external/"

$EnvironmentName = "AzureStackAdmin"

$PepCreds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $CloudAdminUsername, $CloudAdminPassword

$PepIPAddress = "x.x.x.224" # e.g. 10.5.30.224

#endregion

#region Register and set an Az environment that targets your Azure Stack Hub instance

Write-Output -InputObject "Connecting to Azure Stack Hub Admin Management Endpoint - $(AzureStackAdminArmEndpoint)"

$null = Add-AzEnvironment -Name $EnvironmentName -ARMEndpoint $AzureStackAdminArmEndpoint

$null = Connect-AzAccount -Environment $EnvironmentName -UseDeviceAuthentication # Interactive prompt

if (((Get-AzContext).Subscription).Name -notlike "Default Provider Subscription") {

    throw "Failed to obtain access to the 'Default Provider Subscription'. Please verify the user has been assigned the '$($AzureStackRole)' role for the 'Default Provider Subscription'."

}

#endregion

#region Create a PSSession to the Privileged Endpoint VM

Write-Output -InputObject "Create a PowerShell Session to the Privileged Endpoint VM"

$PepSession = New-PSSession -ComputerName $PepIPAddress -ConfigurationName PrivilegedEndpoint -Credential $PepCreds -SessionOption (New-PSSessionOption -Culture en-US -UICulture en-US)

#endregion

#region Check for existing SPN

Write-Output -InputObject "Check for existing SPN '$($ApplicationName)'"

$SPNObjectCheckJob = Invoke-Command -Session $PepSession -ScriptBlock { Get-GraphApplication } -AsJob | Wait-Job

if ($SPNObjectCheckJob.State -ne "Completed") {

    throw "$($SPNObjectCheckJob.ChildJobs | Receive-Job)"

}

$SPNObjectCheck = $SPNObjectCheckJob.ChildJobs.Output | Where-Object { $_.Name -like "Azurestack-$ApplicationName*" } | Select-Object -Last 1

#endregion

#region Create new SPN if one does not exist

if ($SPNObjectCheck) {

    Write-Output -InputObject "SPN details`n$($ApplicationName): $($SPNObjectCheck | Out-String)"

} else {

    Write-Output -InputObject "No existing SPN found"

    Write-Output -InputObject "Create new SPN '$($ApplicationName)'"

    $SPNObjectJob = Invoke-Command -Session $PepSession -ScriptBlock { New-GraphApplication -Name $using:ApplicationName -ClientCertificates $using:CertificateObject } -AsJob | Wait-Job

    if ($SPNObjectJob.State -ne "Completed") {

        throw "$($SPNObjectJob.ChildJobs | Receive-Job)"

    }

    $SPNObject = $SPNObjectJob.ChildJobs.Output

    Write-Output -InputObject "SPN details`n$($ApplicationName): $($SPNObject | Out-String)"

    $FullApplicationName = $SPNObject.ApplicationName

    #endregion

}

#region Assign SPN the 'Owner' role for the 'Default Provider Subscription'

Write-Output -InputObject "Assign SPN '$($ApplicationName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

if ($FullApplicationName) {

    $SPNADFSApp = Get-AzADServicePrincipal | Where-Object { $_.DisplayName -like "$($FullApplicationName)" }

} else {

    $SPNADFSApp = Get-AzADServicePrincipal | Where-Object { $_.DisplayName -like "*$($ApplicationName)*" } | Select-Object -Last 1

}

$SPNRoleAssignmentCheck = Get-AzRoleAssignment -ObjectId $SPNADFSApp.AdfsId

if (!($SPNRoleAssignmentCheck) -or ($SPNRoleAssignmentCheck.RoleDefinitionName -ne $AzureStackRole)) {

    $null = New-AzRoleAssignment -RoleDefinitionName $AzureStackRole -ServicePrincipalName $SPNADFSApp.ApplicationId.Guid

    #region Verify SPN has been assigned the 'Owner' role for the 'Default Provider Subscription'

    $SPNRoleAssignment = Get-AzRoleAssignment -ObjectId $SPNADFSApp.AdfsId

    if (!($SPNRoleAssignment) -or ($SPNRoleAssignment.RoleDefinitionName -ne $AzureStackRole)) {

        throw "Failed to assign SPN '$($ApplicationName)' the '$($AzureStackRole)' role for the Default Provider Subscription"

    }

    #endregion

}

#endregion

#region Assign AD group 'AzureStackOwners' the 'Owner' role for the 'Default Provider Subscription'

Write-Output -InputObject "Assign AD group '$($ADGroupName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

$ADGroup = Get-AzADGroup -DisplayNameStartsWith $ADGroupName

$SubId = (Get-AzSubscription -SubscriptionName "Default Provider Subscription").Id

$OwnerRoleId = (Get-AzRoleDefinition -Name $AzureStackRole).Id

$APIPayloadHash = @{

    "properties" = @{

        "roleDefinitionId" = "/subscriptions/$($SubId)/providers/Microsoft.Authorization/roleDefinitions/$($OwnerRoleId)"
        "principalId"      = "$($ADGroup.AdfsId)"

    }

} | ConvertTo-Json -Depth 50

$APIPath = "/subscriptions/$($SubId)/providers/Microsoft.Authorization/roleAssignments/$($OwnerRoleId)?api-version=2015-07-01"

$APIResponse = Invoke-AzRestMethod -Path $APIPath -Method "PUT" -Payload $APIPayloadHash

if ($APIResponse.StatusCode -ne "201") {

    throw "Failed to create role assignment for ""$($ADGroup.DisplayName)"" in subscription ""$($SubId)"" with role ""$($AzureStackRole)"" and role ID ""$($OwnerRoleId)"""

}

#endregion

#region Verify AD group 'AzureStackOwners' has been assigned the 'Owner' role for the 'Default Provider Subscription'

$ADGroupRoleAssignment = Get-AzRoleAssignment -ObjectId $ADGroup.AdfsId

if (!($ADGroupRoleAssignment) -or ($ADGroupRoleAssignment.RoleDefinitionName -ne $AzureStackRole)) {

    throw "Failed to assign AD group '$($ADGroupName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

}

#endregion

#region Obtain authentication information

# GUID of the directory tenant
$TenantId = (Get-AzContext).Tenant.Id

Write-Output -InputObject "TenantId: $($TenantId)"
Write-Output -InputObject ""
Write-Output -InputObject "ApplicationName: $($SPNADFSApp.DisplayName)"
Write-Output -InputObject ""
Write-Output -InputObject "ApplicationId: $($SPNADFSApp.ApplicationId.Guid)"
Write-Output -InputObject ""
Write-Output -InputObject "CertificateThumbprint: $($CertificateThumbprint)"
Write-Output -InputObject ""
Write-Output -InputObject "Admin ARM Endpoint: $($AzureStackAdminArmEndpoint)"

#endregion

#region Verify if SPN can authenticate to Azure Stack Hub Admin Management Endpoint

Write-Output -InputObject "Verify if SPN can authenticate to Azure Stack Hub Admin Management Endpoint"

$null = Clear-AzContext -Force

$null = Connect-AzAccount -Environment $EnvironmentName -ServicePrincipal -Tenant $TenantId -ApplicationId $SPNADFSApp.ApplicationId.Guid -CertificateThumbprint $CertificateThumbprint

if (((Get-AzContext).Subscription).Name -notlike "Default Provider Subscription") {

    throw "Failed to obtain access to the 'Default Provider Subscription'. Please verify the SPN has been assigned the '$($AzureStackRole)' role for the 'Default Provider Subscription'."

} else {

    Write-Output -InputObject "Your SPN can successfully authenticate with ARM Endpoint $($AzureStackAdminArmEndpoint) and has got access to the 'Default Provider Subscription'"

}

#endregion

#region Remove sessions

if ($PepSession) {

    Write-Output -InputObject "Removing PSSSession to the Privileged Endpoint"

    Remove-PSSession -Session $PepSession

}

$CheckContext = Get-AzContext | Where-Object { $_.Environment -like $EnvironmentName }

if ($CheckContext) {

    Write-Output -InputObject "Disconnecting from AzS Hub Admin Management Endpoint: $($CheckContext.Environment.ResourceManagerUrl)"

    $null = Disconnect-AzAccount

}

#endregion

</code></pre>
  {{% /tab %}}
  {{< tab header="Client Secret" >}}

{{% alert title="CAUTION" color="warning" %}}
Using a client secret is less secure than using an X509 certificate credential. Not only is the authentication mechanism less secure, but it also typically requires embedding the secret in the client app source code. As such, for production apps, you're strongly encouraged to use a certificate credential.
{{% /alert %}}

<pre><code class="language-PowerShell">#region Declare variables

$CloudAdminUsername = "CloudAdmin@azurestack.local"

[SecureString]$CloudAdminPassword = ConvertTo-SecureString "Password123!" -AsPlainText -Force

$ApplicationName = "ADFSAppCert"

$AzureStackRole = "Owner"

$ADGroupName = "AzureStackHubOwners"

$AzureStackAdminArmEndpoint = "https://adminmanagement.local.azurestack.external/"

$EnvironmentName = "AzureStackAdmin"

$PepCreds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $CloudAdminUsername, $CloudAdminPassword

$PepIPAddress = "x.x.x.224" # e.g. 10.5.30.224

#endregion

#region Register and set an Az environment that targets your Azure Stack Hub instance

Write-Output -InputObject "Connecting to Azure Stack Hub Admin Management Endpoint - $(AzureStackAdminArmEndpoint)"

$null = Add-AzEnvironment -Name $EnvironmentName -ARMEndpoint $AzureStackAdminArmEndpoint

$null = Connect-AzAccount -Environment $EnvironmentName -UseDeviceAuthentication # Interactive prompt

if (((Get-AzContext).Subscription).Name -notlike "Default Provider Subscription") {

    throw "Failed to obtain access to the 'Default Provider Subscription'. Please verify the user has been assigned the '$($AzureStackRole)' role for the 'Default Provider Subscription'."

}

#endregion

#region Create a PSSession to the Privileged Endpoint VM

Write-Output -InputObject "Create a PowerShell Session to the Privileged Endpoint VM"

$PepSession = New-PSSession -ComputerName $PepIPAddress -ConfigurationName PrivilegedEndpoint -Credential $PepCreds -SessionOption (New-PSSessionOption -Culture en-US -UICulture en-US)

#endregion

#region Check for existing SPN

Write-Output -InputObject "Check for existing SPN '$($ApplicationName)'"

$SPNObjectCheckJob = Invoke-Command -Session $PepSession -ScriptBlock { Get-GraphApplication } -AsJob | Wait-Job

if ($SPNObjectCheckJob.State -ne "Completed") {

    throw "$($SPNObjectCheckJob.ChildJobs | Receive-Job)"

}

$SPNObjectCheck = $SPNObjectCheckJob.ChildJobs.Output | Where-Object { $_.Name -like "Azurestack-$ApplicationName*" } | Select-Object -Last 1

#endregion

#region Create new SPN if one does not exist

if ($SPNObjectCheck) {

    Write-Output -InputObject "SPN details`n$($ApplicationName): $($SPNObjectCheck | Out-String)"

} else {

    Write-Output -InputObject "No existing SPN found"

    Write-Output -InputObject "Create new SPN '$($ApplicationName)'"

    $SPNObjectJob = Invoke-Command -Session $PepSession -ScriptBlock { New-GraphApplication -Name $using:ApplicationName -GenerateClientSecret } -AsJob | Wait-Job

    if ($SPNObjectJob.State -ne "Completed") {

        throw "$($SPNObjectJob.ChildJobs | Receive-Job)"

    }

    $SPNObject = $SPNObjectJob.ChildJobs.Output

    Write-Output -InputObject "SPN details`n$($ApplicationName): $($SPNObject | Out-String)"

    $FullApplicationName = $SPNObject.ApplicationName

    $SPNClientId = $SPNObject.ClientId

    $SPNClientSecret = $SPNObject.ClientSecret | ConvertTo-SecureString -AsPlainText -Force

    $SPNCreds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $SPNClientId, $SPNClientSecret

    #endregion

}

#region Assign SPN the 'Owner' role for the 'Default Provider Subscription'

Write-Output -InputObject "Assign SPN '$($ApplicationName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

if ($FullApplicationName) {

    $SPNADFSApp = Get-AzADServicePrincipal | Where-Object { $_.DisplayName -like "$($FullApplicationName)" }

} else {

    $SPNADFSApp = Get-AzADServicePrincipal | Where-Object { $_.DisplayName -like "*$($ApplicationName)*" } | Select-Object -Last 1

}

$SPNRoleAssignmentCheck = Get-AzRoleAssignment -ObjectId $SPNADFSApp.AdfsId

if (!($SPNRoleAssignmentCheck) -or ($SPNRoleAssignmentCheck.RoleDefinitionName -ne $AzureStackRole)) {

    $null = New-AzRoleAssignment -RoleDefinitionName $AzureStackRole -ServicePrincipalName $SPNADFSApp.ApplicationId.Guid

    #region Verify SPN has been assigned the 'Owner' role for the 'Default Provider Subscription'

    $SPNRoleAssignment = Get-AzRoleAssignment -ObjectId $SPNADFSApp.AdfsId

    if (!($SPNRoleAssignment) -or ($SPNRoleAssignment.RoleDefinitionName -ne $AzureStackRole)) {

        throw "Failed to assign SPN '$($ApplicationName)' the '$($AzureStackRole)' role for the Default Provider Subscription"

    }

    #endregion

}

#endregion

#region Assign AD group 'AzureStackOwners' the 'Owner' role for the 'Default Provider Subscription'

Write-Output -InputObject "Assign AD group '$($ADGroupName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

$ADGroup = Get-AzADGroup -DisplayNameStartsWith $ADGroupName

$SubId = (Get-AzSubscription -SubscriptionName "Default Provider Subscription").Id

$OwnerRoleId = (Get-AzRoleDefinition -Name $AzureStackRole).Id

$APIPayloadHash = @{

    "properties" = @{

        "roleDefinitionId" = "/subscriptions/$($SubId)/providers/Microsoft.Authorization/roleDefinitions/$($OwnerRoleId)"
        "principalId"      = "$($ADGroup.AdfsId)"

    }

} | ConvertTo-Json -Depth 50

$APIPath = "/subscriptions/$($SubId)/providers/Microsoft.Authorization/roleAssignments/$($OwnerRoleId)?api-version=2015-07-01"

$APIResponse = Invoke-AzRestMethod -Path $APIPath -Method "PUT" -Payload $APIPayloadHash

if ($APIResponse.StatusCode -ne "201") {

    throw "Failed to create role assignment for ""$($ADGroup.DisplayName)"" in subscription ""$($SubId)"" with role ""$($AzureStackRole)"" and role ID ""$($OwnerRoleId)"""

}

#endregion

#region Verify AD group 'AzureStackOwners' has been assigned the 'Owner' role for the 'Default Provider Subscription'

$ADGroupRoleAssignment = Get-AzRoleAssignment -ObjectId $ADGroup.AdfsId

if (!($ADGroupRoleAssignment) -or ($ADGroupRoleAssignment.RoleDefinitionName -ne $AzureStackRole)) {

    throw "Failed to assign AD group '$($ADGroupName)' the '$($AzureStackRole)' role for the 'Default Provider Subscription'"

}

#endregion

#region Obtain authentication information

# GUID of the directory tenant
$TenantId = (Get-AzContext).Tenant.Id

Write-Output -InputObject "TenantId: $($TenantId)"
Write-Output -InputObject ""
Write-Output -InputObject "ApplicationName: $($SPNADFSApp.DisplayName)"
Write-Output -InputObject ""
Write-Output -InputObject "ApplicationId: $($SPNADFSApp.ApplicationId.Guid)"
Write-Output -InputObject ""
Write-Output -InputObject "ClientSecret: $($SPNObject.ClientSecret)"
Write-Output -InputObject ""
Write-Output -InputObject "Admin ARM Endpoint: $($AzureStackAdminArmEndpoint)"

#endregion

#region Verify if SPN can authenticate to Azure Stack Hub Admin Management Endpoint

Write-Output -InputObject "Verify if SPN can authenticate to Azure Stack Hub Admin Management Endpoint"

$null = Clear-AzContext -Force

$null = Connect-AzAccount -Environment $EnvironmentName -ServicePrincipal -Tenant $TenantId -Credential $SPNCreds

if (((Get-AzContext).Subscription).Name -notlike "Default Provider Subscription") {

    throw "Failed to obtain access to the 'Default Provider Subscription'. Please verify the SPN has been assigned the '$($AzureStackRole)' role for the 'Default Provider Subscription'."

} else {

    Write-Output -InputObject "Your SPN can successfully authenticate with ARM Endpoint $($AzureStackAdminArmEndpoint) and has got access to the 'Default Provider Subscription'"

}

#endregion

#region Remove sessions

if ($PepSession) {

    Write-Output -InputObject "Removing PSSSession to the Privileged Endpoint"

    Remove-PSSession -Session $PepSession

}

$CheckContext = Get-AzContext | Where-Object { $_.Environment -like $EnvironmentName }

if ($CheckContext) {

    Write-Output -InputObject "Disconnecting from AzS Hub Admin Management Endpoint: $($CheckContext.Environment.ResourceManagerUrl)"

    $null = Disconnect-AzAccount

}

#endregion

</code></pre>
  {{< /tab >}}
{{< /tabpane >}}
