---
title: "Azure Local Dell Solution Builder Extensions Release Notes (Dell 2512)"
# title: "Azure Local Release Notes for Dell Solution Builder Extensions (Dell 2512)"
# title: "Azure Local Integrated System AX Server Release Notes Dell Solution Builder Extensions (Dell 2512)"
# title: "Dell Solution Builder Extensions for Azure Local Integrated System AX Server Release Notes"
linkTitle: "SBE Release Notes"
weight: 20000
Description: >
hide_feedback: false
comment: "Copyright © 2026 Dell Inc."

---

{{< rawhtml >}}
{{< customtable >}}
{{< /rawhtml >}}

## Overview

Solution Builder Extensions (SBE) for Azure Local. Firmware, Driver, and WDAC Supplemental policy for lifecycle management for Azure Local instances running on Dell AX servers.

{{< rawhtml >}}
<table>
  <thead>
    <tr>
      <th>SBE Release Version</th>
      <th>Download links</th>
      <th>Supported Servers</th>
      <th>Driver and Firmware versions</th>
      <th>HCI OS Version</th>
      <th>Supported Solution Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.2.2512.1616</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=52Y76">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=52Y76</a></td>
      <td>AX-660<br>AX-760<br>AX-4510C<br>AX-4520C<br>APEX MC-660<br>APEX MC-760<br>APEX MC-4510C<br>APEX MC-4520C</td>
      <td><a href="{{< relref "docs/hci/supportmatrix/2512/16G_HCI">}}">Azure Local Support Matrix for 16G (2512) | Solutions for Microsoft Azure</a><br><a href="{{< relref "docs/hci/supportmatrix/2512/45n0c_hci">}}">Azure Local Support Matrix for AX-4500 (2512) | Solutions for Microsoft Azure</a></td>
      <td>24H2</td>
      <td>12.*.1002.*<br>12.*.1001.*</td>
    </tr>
    <tr>
      <td>4.2.2512.1514</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DTD2M">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DTD2M</a></td>
      <td>AX-650<br>AX-750<br>AX-6515<br>AX-7525</td>
      <td><a href="{{< relref "docs/hci/supportmatrix/2512/14G-15G_HCI">}}">Azure Local Support Matrix for 14G-15G (2512) | Solutions for Microsoft Azure</a></td>
      <td>24H2</td>
      <td>12.*.1002.*<br>12.*.1001.*</td>
    </tr>
    <tr>
      <td>4.2.2512.1403</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VJ48M">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VJ48M</a></td>
      <td>AX-640<br>AX-740xd</td>
      <td><a href="{{< relref "docs/hci/supportmatrix/2512/14G-15G_HCI">}}">Azure Local Support Matrix for 14G-15G (2512) | Solutions for Microsoft Azure</a></td>
      <td>24H2</td>
      <td>12.*.1002.*<br>12.*.1001.*</td>
    </tr>
  </tbody>
</table>
{{< /rawhtml >}}

## Important Caveats

- NVIDIA ConnectX NIC resets have been observed by customers under certain workloads. Affected driver version `25.1.26647.0` and corresponding firmware was introduced in the SBE `4.2.2506.n`. SBE `4.2.2509.n` and `4.2.2512.n` will downgrade the NVIDIA ConnectX driver to version `24.4.26429.0`, but the ConnectX firmware must be manually downgraded prior to installing SBE `4.2.2512.n`.
For details and instructions, see [KB000376360](https://www.dell.com/support/kbdoc/en-us/000376360).

- Dell Micron 7450 and 7500 NVMe SSDs occasionally enter a panic state. For details and instructions, see [KB000368482](https://www.dell.com/support/kbdoc/en-us/000368482/poweredge-dell-micron-7450-and-7500-nvme-ssds-occasionally-enters-a-panic-state). From the SBE table above, find the version relevant to your product and install the SBE with updated firmware that resolves the defect for the Micron 7450 and 7500 drives.

- SBE versions `4.2.2512.1616` and `4.2.2512.1514` include the same BIOS version as previously released SBE versions `4.2.2509.1625` and `4.1.2509.1516` for the 16G, 45n0c, AX-650, and AX-750. New Azure Local instance deployments may have newer BIOS versions as listed in the [Dell 2512 support matrix]({{< ref "../_index.md" >}}). The installation of SBE `4.2.2512.n` will **not downgrade** the BIOS version in this case. The supported BIOS versions are listed in the [Dell 2512 support matrix]({{< ref "../_index.md" >}}).

## New for This Release

### SBE 4.2.2512.1616

- Driver and Firmware 2512 Update
- Added server component health checks
- Added checks for downloading the latest SBE discovery manifest during updates that use automated SBE download
- Added support for APEX MC branded nodes
- To install this SBE version, Azure Local instances that are already deployed must be running solution version `12.*.1001.*` or `12.*.1002.*`

### SBE 4.2.2512.1514

- Driver and Firmware 2512 Update
- Added server component health checks
- Added checks for downloading the latest SBE discovery manifest during updates that use automated SBE download
- To install this SBE version, Azure Local instances that are already deployed must be running solution version `12.*.1001.*` or `12.*.1002.*`

### SBE 4.2.2512.1403

- Driver and Firmware 2512 Update
- Added server component health checks
- Added checks for downloading the latest SBE discovery manifest during updates that use automated SBE download
- To install this SBE version, Azure Local instances that are already deployed must be running solution version `12.*.1001.*` or `12.*.1002.*`

## Prerequisites

### Update Firmware and Drivers Prior to Azure Local Instance Deployment

Drivers and firmware need to be installed on the servers that will be the instance members prior to deployment from the Azure Portal or using an ARM Template. This requirement is independent of the installation of the SBE. The machines imaged with Dell provided golden image will include the required Dell provided Out-of-Box drivers, but the firmware versions must still be validated and possibly updated prior to the instance deployment. The most current driver and firmware versions listed in the support matrix are recommended.

The Azure Local support matrix for Dell AX servers can be found here, [Support Matrix | Solutions for Microsoft Azure]({{< ref "../../_index.md" >}}).

### iDRAC Access from Host OS

The iDRAC pass-through NIC must be enabled and have an IP address assigned to it. iDRAC pass-through NIC is enabled by default and has an APIPA (Automatic Private IP Addressing) IP address assigned. This IP address must be accessible by the iDRAC NIC `Remote NDIS Compatible Device` in the host operating system. This is a dedicated link to the host OS and cannot be accessed outside the host OS.

iDRAC access health checks are introduced starting with the December 2024 SBE releases. These health checks verify that the required iDRAC access has been implemented on each server that will be an instance member. The iDRAC access health checks run automatically as part of the standard built-in SBE health checks. These health checks must complete successfully for the SBE installation to proceed. Failure remediation instructions are provided in case the health check fails.

#### Manual iDRAC Access Verification

The following procedures provide a manual method for verifying the required iDRAC access. The iDRAC access health checks provide automated and more comprehensive verification method.

{{% imgproc iDRACPassThroughSettings Fit "800x650" %}}
Example iDRAC Pass-through settings
{{% /imgproc %}}
<br>

The iDRAC NIC `Remote NDIS Compatible Device` in the host operating system is used by the `SBE CAU plug-in` to update firmware. This NIC must be enabled and have an IP address assigned to it. By default, this NIC is enabled and has an APIPA IP address assigned to it that can access the iDRAC pass-through IP address. DHCP client should not be disabled on this NIC.

This is a dedicated link to iDRAC from the host OS and cannot be accessed outside the host OS.

The IP address can be obtained using the following PowerShell command:

```powershell
Get-NetAdapter -InterfaceDescription "Remote NDIS Compatible Device" | Get-NetIPAddress -AddressFamily IPv4 | Select-Object -Property IPAddress
```

Example:

```powershell
IPAddress
---------
169.254.0.2
```

<br>

### Azure Local instances using Non-Transparent, Unauthenticated Network Proxy

Azure Local instances using non-transparent, unauthenticated network proxy must have the iDRAC pass-through IP address in the network proxy exclusion list. For information on how to configure the non-transparent, unauthenticated network proxy see, [Configure proxy settings for Azure Local](<https://learn.microsoft.com/en-us/azure-stack/hci/manage/configure-proxy-settings-23h2>).

The following example shows how to configure the APIPA IP address range `169.254.0.0/16` to be in the network proxy exclusion list.

```powershell
$NoProxy = "localhost,127.0.0.1,.svc,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.contoso.com,node1,node2,ClusterName,169.254.0.0/16"
[Environment]::SetEnvironmentVariable("NO_PROXY", $NoProxy, "Machine")
```

<br>

## Download Connector – Automated download of future SBE release

### Overview

`Download Connector` is a component in the SBE (Solutions Builder Extensions) that automates the downloading of new SBE bundles as they become available for your cluster. Once an SBE that includes the `Download Connector` is installed on your cluster, manually downloading and importing follow-on SBE version is no longer required. The update service will automate the downloading of the next available SBE for your Azure Local instance in a similar manner to how the download of the solution upgrade is automated. The `Download Connector` is part of the SBE version `4.1.2505.1501` and newer.

SBE versions that include the `Download Connector` also include system and update health checks that proactively verify the ability of the `Download Connector` to access the required remote resource when it comes time to download the next SBE for your cluster. System health checks are run once per day and update health checks are run at the initial phase of the update process.

### Firewall Requirements

The SBE `Download Connector` running in the Azure Local instance needs to periodically connect to the internet resources to download SBE bundles for your cluster. The following outbound connectivity is required.

| Endpoint Description | Endpoint URL | Port |
| --- | --- | --- |
| SBE bundle download | dl.dell.com/* | 443 |
| SBE download catalog | downloads.dell.com/filestore/Prod/SbeDownloadCatalog/AX_SBE_Download_Catalog.xml | 443 |
| SBE download catalog redirection | aka.ms/DellAzureLocalSBEDownloadCatalog | 443 |
| Digicert Certificate Revocation Status | http&#58;//crl3.digicert.com/* | 80 |
| Digicert Certificate Revocation Status | http&#58;//crl4.digicert.com/* | 80 |

## Installation

### Download and Extract

{{% alert title="CAUTION" color="warning" %}}
Steps 3 and 4 must be completed to ensure that the latest SBE Discovery manifest is used.
{{% /alert %}}

SBE bundle zip file has the naming convention Bundle_SBE_Dell_AS-HCI-AX-`GenerationNumber`_`VersionNumber`.zip.

1. Download the SBE bundle zip file for your Dell AX server generation using the download link above. The SBE bundles are specific to the AX 14G platforms, AX 15G platforms, and AX 16G platforms
2. Extract the three SBE files from the SBE bundle zip file. There are two xml files and one zip file. Example:

   - SBE_Dell_AS-HCI-AX-16G-45n0c_4.2.2506.1600.xml
   - SBE_Dell_AS-HCI-AX-16G-45n0c_4.2.2506.1600.zip
   - SBE_Discovery_Dell.xml

3. Navigate to [<https://aka.ms/AzureStackSBEUpdate/DellEMC>](<https://aka.ms/AzureStackSBEUpdate/DellEMC>) and press `Ctrl + S` to download the SBE_Discovery_Dell.xml file
4. Replace the SBE_Discovery_Dell.xml file that was in the SBE bundle zip with the file downloaded in step 3

There are two options for installing the SBE package. The SBE package can be installed as part of instance creation or imported after instance creation is successfully completed. The importing method is also used to update the SBE to a newer version when the currently running SBE does not include `Download Connector` capability.

### Automated Download and Extraction

SBE release starting with `4.1.2505.1501` and newer include the `Download Connector` that automates downloading and extracting the SBE. Manual download and SBE bundle extraction are unnecessary when an SBE with this capability is already installed on the Azure Local instance.

### Installing SBE as Part of Instance Creation

Starting with June 2025 Dell golden image release, the SBE files are included in the golden image and already placed in the `C:\SBE` directory. The following 3 steps do not need to be performed.

1. On each server that will be an instance member, create the following directory: `C:\SBE`
2. Copy the three SBE files to the directory `C:\SBE` on each server that will be an instance member
3. Proceed to deploying the instance from the Azure Portal or an ARM template

### Importing the SBE After Successful Azure Local Instance Creation

1. Create a directory on a cluster shared volume (CSV) for sideloading the SBE, e.g., `C:\ClusterStorage\Infrastructure_1\SBE\SBE-AX-16G-45n0c_4.2.2506.1600`
2. Copy the three extracted SBE files to this directory
3. Load the SBE files by running the following command with the path to the directory that holds the three extracted SBE files

    ```powershell
    Add-SolutionUpdate -SourceFolder "C:\ClusterStorage\Infrastructure_1\SBE\SBE-AX-16G-45n0c_4.2.2506.1600"
    ```

4. Check the state of the SBE that was just added. The state needs to be `Ready`.

    ```powershell
    Get-SolutionUpdate | Where-Object -Property PackageType -EQ "SBE"
    ```

5. Verify that the Azure Local instance is in a healthy state and is ready for the SBE installation by running the following commands on one of the Azure Local instance machines:

    ```powershell
    Get-SolutionUpdate | Where-Object { $_.State -imatch "Ready" -and $_.PackageType -eq "SBE" } | Start-SolutionUpdate -PrepareOnly
    ```

6. Wait for the health check to complete. The solution update state will report `HealthChecking` while the health check is in progress.

7. After the health check completes, run the following command if the solution update state reports `HealthCheckFailed`:

    ```powershell
    $Result = (Get-SolutionUpdate | Where-Object {$_.State -imatch "Ready" -and $_.PackageType -eq "SBE"}).HealthCheckResult

    $Result | Where-Object { ($_.Status -ne "SUCCESS" -and $_.Severity -eq "CRITICAL" ) } | Format-List -Property Title, Status, Severity, Description, Remediation, TargetResourceName, TargetResourceType
    ```

All tests with `Critical` severity must have the `Success` status before continuing to the next step.

1. Start the SBE installation by running the following command:

    ```powershell
    Get-SolutionUpdate | Where-Object { $_.State -imatch "Ready" -and $_.PackageType -eq "SBE" } | Start-SolutionUpdate
    ```

2. The SBE installation progress can be checked by running the following command:

    ```powershell
    Get-SolutionUpdate | Where-Object -Property PackageType -EQ "SBE" | Format-List -Property ResourceID, Description, State, SBEVersion, UpdateStateProperties, HealthState
    ```

For more information see, [Update Azure Local via PowerShell](<https://learn.microsoft.com/en-us/azure/azure-local/update/update-via-powershell-23h2?view=azloc-24113>).

## Known Issues

<br>

### SBE Installation May Fail With Driver CAU Plug-In Error When Attempting to Delete NVIDIA ConnectX Driver That Is Not Installed

<br>

#### **Description**

<br>

The failure occurs in the driver CAU plug-in when driver downgrade option is specified for a given driver and the driver is not found in the driver store. This failure occurs in the following conditions:

- Cluster nodes were not imaged using Dell provided Azure Local golden image
- NVIDIA ConnectX NIC is not installed in the cluster nodes
- A previous version of an AX SBE is not installed

<br>

#### **Workaround**

<br>

Run the following script on each instance machine after completing step 5 "*Verify that the Azure Local instance is in a healthy state and is ready for the SBE installation*" in the [Importing the SBE After Successful Azure Local Instance Creation](#importing-the-sbe-after-successful-azure-local-instance-creation) section or when the failure is encountered during the SBE installation.

```powershell
#Run this script on each node in the cluster.

$ConnectXDriverFileName = "mlx5.inf"

$InstalledConnectXDriver = Get-WindowsDriver -Online | Where-Object -Property OriginalFileName -IMatch $ConnectXDriverFileName

if (-not $InstalledConnectXDriver) {

    Write-Output "Out-of-Box NVIDIA ConnectX driver not found on node: $($env:COMPUTERNAME)"
    Write-Output "Checking SBE installation status on cluster: $((Get-Cluster).Name)"

    $SBEWithPackagePaths = Get-SolutionUpdate | Where-Object { ($_.PackageType -eq "SBE") -and ($_.PackagePath -ne $null) -and ($_.PackagePath -notlike "https*") }

    if ($SBEWithPackagePaths) {

        $SBEPackagePath = ($SBEWithPackagePaths | Select-Object -First 1).PackagePath

        $MlxDriverInfBaseFilePath = Join-Path -Path $SBEPackagePath -ChildPath "DriversGE\Network\Mellanox"

        $MlxDriverInfFilePath = Get-ChildItem -Path $MlxDriverInfBaseFilePath -Filter $ConnectXDriverFileName -Recurse

        Write-Output "SBE payload NVIDIA ConnectX driver file path: $($MlxDriverInfFilePath.FullName)"

        if (Test-Path -Path $MlxDriverInfFilePath.FullName) {

            Write-Output "Importing NVIDIA ConnectX driver..."

            pnputil.exe /add-driver $MlxDriverInfFilePath.FullName /install

            if (Get-WindowsDriver -Online | Where-Object -Property OriginalFileName -IMatch $ConnectXDriverFileName) {

                Write-Output "NVIDIA ConnectX driver has been added to the driver store"

            } else {

                Write-Output "NVIDIA ConnectX driver is still not found in the driver store on node: $($env:COMPUTERNAME)"

            }

        } else {

            Write-Output "Failed to resolve path: $($MlxDriverInfFilePath.FullName)"

        }

    } else {

        Write-Output "SBE package path not found"

    }

} else {

    Write-Output "Found NVIDIA ConnectX driver version: $($InstalledConnectXDriver.Version) in the driver store"
    Write-Output "No further action is required on this node"

}
```

<br>

#### **Background**

<br>

This SBE installation failure is resolved in the Azure Local Solution version `12.2512.1002.*` and newer.

The driver CAU plug-in driver downgrade option is used in special cases. Currently, it is only used in the case of NVIDIA ConnectX NIC driver.

<br>

### Partially Installed SBE Version `4.0.0.0` When SBE Is Installed as Part of Cluster Deployment

<br>

#### **Description**

<br>

`Get-SolutionUpdateEnvironment` reports partially installed SBE when installing the SBE as part of Azure Local instance deployment. SBE version `4.0.0.0` indicates a partially installed Solution Builder Extension (SBE).

```powershell
Get-SolutionUpdateEnvironment

ResourceId        : redmond
SbeFamily         : AX-16G-45n0c
HardwareModel     : AX-760
LastChecked       : 08/01/2026 14:09:31
PackageVersions   : {Solution: 12.2512.1002.16, Services: 10.2512.0.9, Platform: 12.2512.0.3021, SBE: 4.0.0.0}
CurrentVersion    : 12.2512.1002.16
CurrentSbeVersion : 4.0.0.0
LastUpdated       :
State             : UpdateAvailable
HealthState       : Success
HealthCheckResult : {Storage Services Physical Disks Summary, Storage Services Physical Disks Summary, Storage Services Physical Disks Summary, Storage Services Physical Disks Summary...}
HealthCheckDate   : 07/01/2026 17:50:07
AdditionalData    : {[SBEAdditionalData, Solution Builder extension is partially installed. Please install the latest Solution Builder Extension provided by your hardware vendor. For more information, see https://aka.ms/SBE.]}
```

<br>

#### **Workaround**

<br>

Reinstall the same SBE version using the SBE import method or automated download method after Azure Local instance deployment successfully completes.

<br>

#### **Background**

<br>

The SBE driver CAU plug-in expects all drivers and firmware in the SBE payload to be installed on the server during or prior to deployment. However, some of the drivers in the SBE payload may not apply to the server model or components in the server model. Microsoft is aware of this limitation and is working to resolve this issue in a future release.

The partially installed SBE issue, can also occur if a component firmware version installed on the server is different than what is in the SBE payload. The SBE cannot update firmware or drivers during Azure Local instance deployment.

<br>

### SBE installation will not downgrade drivers that have a newer version than the same driver in the SBE payload

<br>

Dell supports the driver and firmware versions listed here, [Support Matrix | Solutions for Microsoft Azure]({{< ref "../../_index.md" >}}).

<br>

#### **Description**

<br>

The SBE driver CAU plug-in will not attempt to downgrade installed drivers that are higher version than the ones in its payload unless otherwise specified by Dell.

<br>

### AMD DRTM (Dynamic Root of Trust for Measurement) Driver Fails to Update on AX AMD Platforms When the DRTM Device Was Originally Enabled at Azure Local Instance Deployment Time and Later Disabled

<br>

#### **Description**

<br>

SBE installation fails because the driver CAU plug-in in the SBE is unable to update the AMD DRTM driver to a newer version that is in the SBE payload. The AMD DRTM driver is one of the AMD Chipset drivers in the SBE package. The AMD DRTM driver update fails because the AMD DRTM setting was originally enabled but later disabled.

<br>

#### **Workaround**

<br>

Verify that the AMD DRTM BIOS setting is on. Turn back on the AMD DRTM setting if it is off.

The DRTM option is in the BIOS configuration: System Security -> TPM Advanced Settings -> AMD DRTM

Make sure to suspend and drain the Azure Local cluster node prior to rebooting the node. Make sure that BitLocker protection is disabled for the boot volume on the cluster node before making BIOS configuration changes. Disable BitLocker if it is enabled for the boot volume `C:\` prior to rebooting the server for the BIOS changes to take effect. Reenable BitLocker for the boot drive after the server successfully reboots.

<br>

#### **Background**

<br>

AMD DRTM is an advanced security feature that is available on modern AMD CPUs and is used to protect the secure boot enclaves. The AMD DRTM setting is enabled by default on AX servers with AMD CPUs that support the DRTM feature. AMD DRTM should not be disabled.

## Previous Releases

{{< rawhtml >}}
<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>SBE Bundle Version</th>
      <th>Firmware And Driver Payload</th>
      <th>Download URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AX 16G-45n0c</td>
      <td>4.2.2509.1625</td>
      <td>September 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=CGKK0">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=CGKK0</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.2.2509.1516</td>
      <td>September 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DTM18">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DTM18</a></td>
    </tr>
    <tr>
      <td>AX 14G</td>
      <td>4.2.2509.1411</td>
      <td>September 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=D5R9P">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=D5R9P</a></td>
    </tr>
    <tr>
      <td>AX 16G-45n0c</td>
      <td>4.2.2506.1600</td>
      <td>June 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8D3FF">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8D3FF</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.2.2506.1506</td>
      <td>June 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P4WF9">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P4WF9</a></td>
    </tr>
    <tr>
      <td>AX 14G</td>
      <td>4.2.2506.1404</td>
      <td>June 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9F1W7">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9F1W7</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2505.1503</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=W0R1F">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=W0R1F</a></td>
    </tr>
    <tr>
      <td>AX 16G-45n0c</td>
      <td>4.1.2505.1504</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=149T3">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=149T3</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2505.1501</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C5Y7V">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C5Y7V</a></td>
    </tr>
    <tr>
      <td>AX 16G-45n0c</td>
      <td>4.1.2505.1502</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=60GPP">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=60GPP</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2503.3101</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=M13VT">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=M13VT</a></td>
    </tr>
    <tr>
      <td>AX 16G</td>
      <td>4.1.2503.3102</td>
      <td>March 2025 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T5K74">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T5K74</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2412.1201</td>
      <td>December 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XG1TT">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XG1TT</a></td>
    </tr>
    <tr>
      <td>AX 16G</td>
      <td>4.1.2412.1202</td>
      <td>December 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PPH7R">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PPH7R</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2410.901</td>
      <td>September 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XNYNG">https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XNYNG</a></td>
    </tr>
    <tr>
      <td>AX 16G</td>
      <td>4.1.2409.1501</td>
      <td>September 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=6t8nt">https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=6t8nt</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2406.3001</td>
      <td>June 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=6k6g3">https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=6k6g3</a></td>
    </tr>
    <tr>
      <td>AX 15G</td>
      <td>4.1.2405.2001</td>
      <td>March 2024 Driver and Firmware Update</td>
      <td><a href="https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=5WH4H">https://www.dell.com/support/home/en-tc/drivers/driversdetails?driverid=5WH4H</a></td>
    </tr>
  </tbody>
</table>
{{< /rawhtml >}}
