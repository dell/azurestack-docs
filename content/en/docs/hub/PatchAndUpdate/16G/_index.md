---
title: "Patch and Update for 16G"
linkTitle: "16G"
weight: 9000
Description: >
hide_feedback: true

---

{{< rawhtml >}}
{{< customtable >}}
{{< /rawhtml >}}

## Introduction

Microsoft Azure Stack Hub operators are faced with the enormous challenge of keeping their solution both secure and functional. They must ensure that the solution is not vulnerable to threats, external or internal, while maintaining negotiated service-level agreements.

## Solution overview

As a Microsoft Azure Stack Hub systems provider, Dell Technologies is committed to ensuring that your Azure Stack Hub environment is both secure and functional. In Dell Technologies releases, you will find firmware and driver updates for both the Hardware Lifecycle Host (HLH) and the scale unit (SU) nodes that are contained in the OEM package updates. Dell Technologies delivers these updates quarterly, and you can apply them independently of Microsoft updates.

There are two other types of update packages for the Azure Stack Hub integrated systems: *software updates* and *hotfixes*.

For more information, see [Update package types - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-updates?#update-package-types).

### Audience

This patch and update guide is for Azure Stack Hub 16th-generation (16G) operators who intend to perform lifecycle operations (Patch and Update) for:

- Firmware updates for the Hardware Lifecycle Host (HLH)
- Operating System updates for the HLH (Windows Server 2022)
- Driver updates for the HLH (Windows Server 2022)
- Windows Defender Application Control (WDAC) policy updates for the HLH Operating System
- Firmware updates for the Top-of-Rack (ToR) switches (S5248F-ON)
- Firmware updates for the scale unit (SU) nodes
- Driver updates for the scale unit nodes (Windows Server 2022)

#### Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager overview

Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager provides an automated way of upgrading HLH firmware, software, and driver components.

Lifecycle Manager will perform the following tasks:

- Update firmware on the Hardware Lifecycle Host
- Update drivers on the Hardware Lifecycle Host
- Install Windows updates for the Hardware Lifecycle Host Operating System
- Update the Windows Defender Application Control (WDAC) policy on the Hardware Lifecycle Host

{{% alert title="NOTE" color="primary" %}}

Firmware updates for the Top-of-Rack (ToR) switches are not included in the Lifecycle Manager update process and <u>**must**</u> be updated manually from the Hardware Lifecycle Host (HLH) using SCP and SSH commands. See the section [Manually Updating the Switch Firmware from the Hardware Lifecycle Host (HLH)](#top-of-rack-tor-switches) for more information.

Firmware and driver updates for scale unit (SU) nodes are not included in the Lifecycle Manager update process and <u>**must**</u> be updated manually using the Azure Stack Hub administrator portal. See the section [OEM package updates](#original-equipment-manufacturer-oem-package-updates) for more information.

{{% /alert %}}

Lifecycle Manager should take between 1-2 hours to complete.

Lifecycle Manager is available for download on the [Integrated System for Microsoft Azure Stack Hub 16G > Drivers & Downloads](https://www.dell.com/support/product-details/en-us/product/cloud-for-microsoft-azure-stack16g/drivers) product support website.

#### OEM package updates

The Azure Stack Hub OEM package update contains firmware, device drivers, and hardware management tools in a specialized format used by Azure Stack Hub during initial deployment and update.

Dell Technologies is responsible for the end-to-end servicing lifecycle for the hardware-related firmware and driver update packages.

In addition, Dell Technologies will own and maintain guidance for all software and hardware on the HLH.

OEM package updates are available for download on the [Integrated System for Microsoft Azure Stack Hub 16G > Drivers & Downloads](https://www.dell.com/support/product-details/en-us/product/cloud-for-microsoft-azure-stack16g/drivers) product support website.

## Prerequisites

Perform the following steps before proceeding with the Lifecycle Manager update process. There are some steps which are a one-time-activity and some that you must perform in every release.

### Download the Lifecycle Manager zip file

To download the latest Lifecycle Manager zip file, perform the following steps:

#### Steps

1. Go to the Dell Technologies Support website at [Integrated System for Microsoft Azure Stack Hub 16G > Drivers & Downloads](https://www.dell.com/support/product-details/en-us/product/cloud-for-microsoft-azure-stack16g/drivers) and download the latest Lifecycle Manager zip file.

2. Log in to the HLH with the **HLHAdmin** default administrator account or a customer specified administrative user account.

    - The HLH can be accessed via Remote Desktop Protocol (RDP) from a *Permitted Network* or directly via the iDRAC Direct port (USB to Micro-USB) connection.

        - See [Permitted Networks - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-network#permitted-networks) for additional details.
        <br><br>

3. On the HLH, navigate to the **E:\\** drive and create a folder named **Temp**.

4. Download the Lifecycle Manager zip file to the HLH **E:\Temp** directory.

### Download the OEM Update Package zip file

To download the corresponding OEM package update zip file, perform the following steps:

#### Steps

1. Go to the Dell Technologies Support website at [Integrated System for Microsoft Azure Stack Hub 16G > Drivers & Downloads](https://www.dell.com/support/product-details/en-us/product/cloud-for-microsoft-azure-stack16g/drivers) and download the latest OEM package update zip file.

    {{% alert title="WARNING" color="danger" %}}

The Lifecycle Manager zip file version **must match** the version of the OEM package zip file, otherwise the Lifecycle Manager will not pass the pre-checks.

For example, if the Lifecycle Manager zip file is **2502**, then the OEM package zip file **must** also be **2502**.

    {{% /alert %}}

2. Log in to the HLH with the **HLHAdmin** default administrator account or a customer specified administrative user account.

    - The HLH can be accessed via Remote Desktop Protocol (RDP) from a *Permitted Network* or directly via the iDRAC Direct port (USB to Micro-USB) connection.

      - See [Permitted Networks - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-network#permitted-networks) for additional details.
      <br><br>

3. Download the OEM package update zip file to the HLH **E:\Temp** directory.

### Extract Lifecycle Manager and OEM package update zip files

Lifecycle Manager zip and OEM package update zip files that were downloaded to the HLH from the Dell support website will need to be extracted into their own directories.

To extract Lifecycle Manager and OEM package update zip files, perform the following steps:

#### Steps

1. Before beginning the extraction process, first the files in the **E:\Temp** directory will need to be unblocked. Open a PowerShell terminal as administrator and type the following command:

    ```powershell
    Get-ChildItem -Path "E:\Temp" -Recurse | Unblock-File
    ```

    {{% alert title="WARNING" color="danger" %}}

Lifecycle Manager zip file contents must be **unblocked**; otherwise, the Lifecycle Manager will not pass the pre-checks.

    {{% /alert %}}

2. Once the contents within the **E:\Temp** directory have been unblocked, you can begin to extract the zip files into their directories.

3. On the HLH, navigate to the **E:\\** drive and create a folder named **LCM**.

4. On the HLH, navigate to the **E:\\** drive and create a folder named **OEM**.

5. Extract the Lifecycle Manager zip file from the **E:\Temp** directory to the **E:\LCM** directory.

{{% imgproc hlh_E_lcm Fit "800x450" 30px %}} {{% /imgproc %}}

6. Extract the OEM package update zip file from the **E:\Temp** directory to the **E:\OEM** directory.

{{% imgproc hlh_E_oem Fit "800x450" 30px %}} {{% /imgproc %}}

## Hardware Lifecycle Host (HLH)

### Running Lifecycle Manager

{{% alert title="NOTE" color="primary" %}}

Lifecycle Manager will reboot the HLH multiple times during the upgrade process. You will need to log back into the HLH manually after each reboot; otherwise, the upgrade will not continue until you do.

As an **optional** step you can enable the **Auto Logon** feature on the HLH. This will allow the HLH to automatically log back in after each reboot.

For more information on how to enable the **Auto Logon** feature, see [Turn on automatic logon in Windows](https://learn.microsoft.com/en-us/troubleshoot/windows-server/user-profiles-and-logon/turn-on-automatic-logon).

{{% /alert %}}

To run Lifecycle Manager on the HLH, perform the following steps:

#### Steps

{{% alert title="WARNING" color="danger" %}}
Never use PowerShell ISE at any time during the use of this document.
{{% /alert %}}

1. From the HLH, open a PowerShell console window as an administrator.

2. You will need to export the BitLocker recovery keys before proceeding with the upgrade. Type the command below into your PowerShell prompt to export your BitLocker recovery keys.

    ```powershell
    (Get-BitLockerVolume -MountPoint D, E).KeyProtector | Where-Object -FilterScript {$_.KeyProtectorType -eq 'RecoveryPassword'} | Select-Object -Property KeyProtectorId,RecoveryPassword | Out-File -FilePath "E:\Temp\BitLockerRecoveryKeys.txt"
    ```

    {{% alert title="CAUTION" color="warning" %}}

Once the BitLocker recovery keys have been exported into the **E:\Temp** folder, ensure they are moved to a secure location **outside** of the HLH.

Failure to do so may result in an inaccessible HLH due to firmware or hardware issues during the firmware upgrade process.

For more information see [BitLocker Operations Guide](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/operations-guide?tabs=powershell#reset-and-backup-a-recovery-password).

    {{% /alert %}}

{{% imgproc hlh_E_temp_bitlocker_keys_exported Fit "800x450" 30px %}} {{% /imgproc %}}

3. Change the current directory to the E:\LCM location that the Lifecycle Manager zip file was extracted to in a previous step:

    ```powershell
    Set-Location -Path "E:\LCM"
    ```

4. Run Lifecycle Manager by using the following command:

    ```powershell
    .\Invoke-DellAzSHubLifecyclemanager.ps1 -OEMPackagePath "E:\OEM\AzS-Dell-<version>.zip"
    ```

    You will be prompted to provide credentials for the following endpoints:
     - Hardware Lifecycle Host OS administrative account credential
     - iDRAC administrative account credential for the Hardware Lifecycle Host

    You will then be prompted to confirm that you have backed up the BitLocker recovery keys. Press **Y** to confirm if you have backed up the BitLocker recovery keys; otherwise, press **N** to cancel the update process and back up your BitLocker recovery keys.

{{% imgproc hlh_lifecycle_manager_bitlocker_prompt Fit "800x450" 30px %}} {{% /imgproc %}}

5. Once the update process begins, continue to monitor Lifecycle Manager while it runs. While the automation is running there will be multiple reboots, in order to keep the upgrade process progressing **you must log back into the HLH manually; otherwise, the upgrade will not continue until you do**.

    Some updates are grouped together to limit the amount of reboots. The HLH may reboot for any of the following reasons:
{{< rawhtml >}}

<table>
  <thead>
    <tr>
      <th>Update Type</th>
      <th>Reboot Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Firmware updates</td>
      <td>Separate reboot</td>
    </tr>
    <tr>
      <td>Driver updates</td>
      <td>Grouped reboot</td>
    </tr>
    <tr>
      <td>Operating System updates</td>
      <td>Grouped reboot</td>
    </tr>
    <tr>
      <td>Windows Defender Application Control (WDAC) policy updates</td>
      <td>Grouped reboot</td>
    </tr>
  </tbody>
</table>
{{< /rawhtml >}}

6. Upon completion, the output should look similar to the image shown below. This shows a list of all completed tasks from Lifecycle Manager, as well as the total elapsed time of the upgrade.

    If the upgrade was successful, you will see the **Dell AzS Hub Lifecycle Manager completed successfully** message in the output.
{{% imgproc hlh_lifecycle_manager_successfully_completed Fit "800x450" 30px %}} {{% /imgproc %}}

7. Finally, you can gather logs by navigating to the directory **E:\LCM\Logs** on the HLH. These logs can be used for troubleshooting purposes if needed.
    - Additionally, **C:\MASLogs** will contain logs related to the firmware update process.

{{% imgproc hlh_E_lcm_logs Fit "800x450" 30px %}} {{% /imgproc %}}

## Top-of-Rack (ToR) Switches

### Manually Updating the Switch Firmware from the Hardware Lifecycle Host (HLH)

You must manually install the OS10 software image from the HLH using SCP and SSH commands.

{{% alert title="WARNING" color="danger" %}}
To maintain the integrity of Dell Azure Stack Hub Integrated System, it is **required** to perform the switch firmware update in conjunction with the Lifecycle Manager update process.
{{% /alert %}}

To update switch firmware, perform the following steps:

#### Steps

{{% alert title="WARNING" color="danger" %}}
Never use PowerShell ISE at any time during the use of this document.
{{% /alert %}}

1. From the HLH, open a PowerShell console window as an administrator.

   - The HLH can be accessed via Remote Desktop Protocol (RDP) from a *Permitted Network*.
   <br><br>

2. Change directory to ***E:\OEM\AzS-Dell***-*&lt;version&gt;****\Firmware\Switches\msftdell***

    ```powershell
    Set-Location -Path "E:\OEM\AzS-Dell-<version>\Firmware\Switches\msftdell"
    ```

3. Run the following command to copy the switch firmware from the extracted OEM package update zip file on the HLH to the ToR switches.

    For example, if upgrading the firmware on ToR-1 with an IP address of **10.128.164.98** and a switch administrative user account of *azsadmin-gtbzp*, you would run the following:

    ```bash
    scp -o MACs=hmac-sha2-512 .\PKGS_OS10-Enterprise-<version>-installer-x86_64.bin azsadmin-gtbzp@10.128.164.98:
    ```

4. Repeat the above step for ToR-2.

    For example, if upgrading the firmware on ToR-2 with an IP address of **10.128.164.99** and a switch administrative user account of *azsadmin-gtbzp*, you would run the following:

    ```bash
    scp -o MACs=hmac-sha2-512 .\PKGS_OS10-Enterprise-<version>-installer-x86_64.bin azsadmin-gtbzp@10.128.164.99:
    ```

5. The below steps will be repeated on each ToR switch (e.g. ToR-1 and ToR-2) **ONLY** after fully completing the first switch (e.g. ToR-1).

   - Run the following commands to connect to the ToR switch.

        For example, if upgrading the firmware on ToR-1 with an IP address of **10.128.164.98** and a switch administrative user account of *azsadmin-gtbzp*, you would run the following:

        ```bash
        ssh -o MACs=hmac-sha2-512 azsadmin-gtbzp@10.128.164.98
        ```

      - Enter the password of the switch administrative user account when prompted.
    <br><br>

    - Run the following command to move the SCP copied firmware file to its intended destination (*/var/os10-image*):

        ```bash
        system "sudo mv ./PKGS_OS10-Enterprise-<version>-installer-x86_64.bin /var/os10-image"
        ```

      - Enter the password of the switch administrative user account when prompted.
    <br><br>

   - Verify the image is now located in the **image** directory.

        ```plaintext
        dir image
        ```

        - The output should look similar to the below example:

            ```plaintext
            Directory contents for folder:
            Date (modified)        Size (bytes)  Name
            ---------------------  ------------  ------------------------------------------
            2025-03-18T18:37:56+00:667040481     PKGS_OS10-Enterprise-<version>-installer-x86_64.bin
            ```

    - To verify that an installation is *not* already in progress, run the following command:

        ```plaintext
        show image status
        ```

        - The output should look similar to the below example:

            ```plaintext
            Image Upgrade State:     idle
            ==================================================
            File Transfer State:     idle
            --------------------------------------------------
              State Detail:          No download information available
              Task Start:            -001-11-30T00:00:00+00:00
              Task End:              -001-11-30T00:00:00+00:00
              Transfer Progress:     0 %
              Transfer Bytes:        0 bytes
              File Size:             0 bytes
              Transfer Rate:         0 kbps

            Installation State:      idle
            --------------------------------------------------
              State Detail:          No install information available
              Task Start:            -001-11-30T00:00:00+00:00
              Task End:              -001-11-30T00:00:00+00:00
            ```

   - Run the following command to install the downloaded image to the *standby* partition:

        ```plaintext
        image install image://PKGS_OS10-Enterprise-<version>-installer-x86_64.bin
        ```

   - To view the image install progress, run the following command:

        ```plaintext
        show image status
        ```

        - The output should look similar to the below example:

            ```plaintext
            Image Upgrade State:     idle
            ==================================================
            File Transfer State:     idle
            --------------------------------------------------
              State Detail:          No download information available
              Task Start:            0000-00-00T00:00:00Z
              Task End:              0000-00-00T00:00:00Z
              Transfer Progress:     0 %
              Transfer Bytes:        0 bytes
              File Size:             0 bytes
              Transfer Rate:         0 kbps

            Installation State:      install
            --------------------------------------------------
              State Detail:          In progress: Configure filesystem (3 of 9)
              Task Start:            2025-03-17T21:15:16Z
              Task End:              0000-00-00T00:00:00Z
            ```

   - Keep checking until the image installation is complete. Then check to verify if the image is installed to the *standby* partition by running the following command:

        ```plaintext
        show boot
        ```

        - The output should look similar to the below example:

            ```plaintext
            Current system image information:
            ===================================
            Type      Boot Type      Active                   Standby                 Next-Boot
            -----------------------------------------------------------------------------------
            Node-id 1 Flash Boot     [B] 10.5.6.5            [A] 10.6.0.1            [B] active
            ```

   - Set the next boot partition to the *standby* partition where the downloaded image is installed by running the following command:

        ```plaintext
        boot system standby
        ```

   - Save the currently running configuration and then reload to the configured image by running the following commands:

        ```plaintext
        write memory
        reload
        ```

    - After the switch reloads, copy the new *active* image to the *standby* boot partition by running the following command:

        ```plaintext
        image copy active-to-standby
        ```

    - Verify the status of the BGP connections on the switches by running the following command:

        ```plaintext
        show ip bgp summary
        ```

       - Verify that BGP is established for all neighbors as indicated by the **Up/Down** column showing a connection timer. The output should look similar to the below example:

          ```plaintext
          BGP router identifier 10.128.164.24 local AS number 64910
          Neighbor                                      AS          MsgRcvd     MsgSent     Up/Down           State/Pfx
          10.128.165.12                                 64912       11          12          00:07:01          25
          10.128.165.13                                 64912       11          12          00:07:01          25
          10.128.165.33                                 64912       10          10          00:07:01          25
          10.128.164.1                                  64900       11          12          00:07:06          1
          10.128.164.9                                  64900       11          12          00:07:06          1
          10.128.164.30                                 64910       12          14          00:06:23          8
          10.128.164.34                                 64910       12          14          00:07:06          8
          ```

    - Verify that the switch firmware version was updated by running the following command:

        ```plaintext
        show version
        ```

        - The output should look similar to the below example:

            ```plaintext
            Dell SmartFabric OS10 Enterprise
            Copyright (c) 1999-2024 by Dell Inc. All Rights Reserved.
            OS Version: 10.6.0.1
            Build Version: 10.6.0.1.35
            Build Time: 2024-12-02T17:55:39+0000
            System Type: S5248F-ON
            Architecture: x86_64
            Up Time: 1 day 00:11:14
            ```

## Original Equipment Manufacturer (OEM) package updates

### Servicing Policy

Updates for the hardware components in the form of driver updates, firmware updates, and security patches are provided by Dell Technologies. These updates are referred to as **OEM package updates**. It is recommended to be within **N-2** of the current available OEM package for Azure Stack Hub.

{{% alert title="WARNING" color="danger" %}}

Azure Stack Hub OEM package updates must be installed in sequential order.

It is not supported to skip an OEM package update version.

{{% /alert %}}

### Identify the OEM version applied to the Azure Stack Hub

To identify the version of the Original Equipment Manufacturer (OEM) package currently applied to the Azure Stack Hub, perform the following steps:

#### Steps

1. Open the Azure Stack Hub administrator portal.

2. Open the **Microsoft Azure Stack Hub - Administration Dashboard** and click **Dashboard**.

3. Click **Update**.

{{% imgproc admin_portal_dashboard_update_tile Fit "800x450" 30px %}} {{% /imgproc %}}

4. The **Updates** blade will appear as shown below. The **Updates** blade displays your current Azure Stack Hub version and the latest deployed version of the OEM package update.

{{% imgproc admin_portal_updates_oemversion Fit "800x450" 30px %}} {{% /imgproc %}}

### Import and Install an OEM package update

In this step you will be uploading and installing the OEM package update utilizing the Azure Stack Hub administrator portal.

{{% alert title="CAUTION" color="warning" %}}
Before you apply an OEM package update, always apply the latest Azure Stack Hub hotfix available for your Azure Stack Hub system.
{{% /alert %}}

For additional information about Azure Stack Hub updates, please see:

- [Updates and servicing policy - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-servicing-policy#oem-packages)
- [Checklist for applying updates - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/release-notes-checklist)
- [Prepare the update package - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-update-prepare-package)
- [Apply updates - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-apply-updates)
- [Apply OEM updates - Azure Stack Hub](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-update-oem)

#### Steps

1. Access the Azure Stack Hub administrator portal of the system you wish to perform the OEM package update on.

2. Navigate to **Storage accounts > updateadminaccount > Containers**.

{{% imgproc admin_portal_updateadminaccount Fit "800x450" 30px %}} {{% /imgproc %}}

3. Create a container for the OEM package update by clicking **+Container**.

4. In the **Name** field on the right navigation pane enter the name for your container e.g. *2408oemupdate* and then click **Create**.

{{% imgproc admin_portal_updateadminaccount_create_container_oemupdate Fit "2000x250" 30px %}} {{% /imgproc %}}

5. Once the container is created, click the name of the container to access it.

{{% imgproc admin_portal_updateadminaccount_containers_oemupdate Fit "2000x450" 30px %}} {{% /imgproc %}}

6. Once you have clicked on the container click **Upload** at the top of the page.

{{% imgproc admin_portal_updateadminaccount_container_oemupdate_upload Fit "2000x450" 30px %}} {{% /imgproc %}}

7. Dell OEM package updates are in a zip format. The zip file contains the **oemMetadata.xml** file and the OEM package update payload.
You will need to upload both the zip file for the OEM package update and the **oemMetadata.xml** that is associated with it.

{{% imgproc hlh_E_oem Fit "800x450" 30px %}} {{% /imgproc %}}

8. Once uploaded to the storage account container, they should appear in the container that was created in step 3.

9. Navigate back to the **Dashboard** and then click the **Update** tile.

{{% imgproc admin_portal_dashboard_update_tile Fit "2000x450" 30px %}} {{% /imgproc %}}

10. The **Updates** blade should now show an available OEM package update that can be installed.

11. Click the update and then click **Install** to install the OEM package update.

12. After clicking install on the OEM package update, the update run details can be seen by clicking on the update in the **Updates** menu once the update has entered into a **Preparing** or **Installing** state.

<ol start="13">
<li>
<p>Once completed, <strong>Updates</strong> blade should display <strong>Applied successfully</strong> and in the <strong>Update history</strong> menu the update state should be marked as <strong>Installed</strong>.</p>
</li>
{{% imgproc admin_portal_updates_applied_successfully Fit "2000x450" %}} {{% /imgproc %}}
<p>If the update fails, the <strong>Update</strong> blade reports <strong>Needs attention</strong>. Click on the failed update and use the <strong>Download summary</strong> button to get a high-level status of where the update failed.</p>
{{% imgproc admin_portal_updates_failed Fit "2000x650" %}} {{% /imgproc %}}
</ol>
