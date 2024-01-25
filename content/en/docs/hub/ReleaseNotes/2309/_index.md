---
title: "Release Notes for 2309"
linkTitle: "2309"
weight: 7691
Description: >

---

## Dell Integrated System for Microsoft Azure Stack Hub Release Notes

### Current Release Version: Dell 2309 and Microsoft 2306

### Release Type: Major (MA)

{{% alert title="NOTE" color="primary" %}}
Dell Azure Stack Hub OEM updates must be installed in sequential order, it is not supported to skip or miss-out an OEM update version. These release notes contain supplemental information for the Dell 2309 release and the Microsoft 2306 release.
{{% /alert %}}

## New features, changed features, and fixes

### New features

- Improvements and updates to Secure Connect Gateway (SCG), drivers, and firmware.
- Dell Patch and Update support for Windows Server 2022 and Windows 11.

### Changed features

There are no changed features for this release.

### Fixes

- Fixed an issue with the Dell Patch and Update process where the switch backup task could fail with the error message:

    *"The term *'Write-InfoLog'* is not recognized as the name of a cmdlet, function, script file, or operable program"*

## Known issues and limitations

This release notes document describes known issues and limitations for the Dell Integrated System for Microsoft Azure Stack Hub solution based on the Dell 2309 release and Microsoft 2306 release.

| Item                           | Description                                                                                                                                                                                                                                  |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OEM update                     | Dell Technologies recommends updating to the n-1 version before applying the latest OEM package.                                                          |
| Microsoft Azure Stack Hub code | For information about known issues and limitations in the Microsoft Azure Stack Hub code, see the [Azure Stack Hub 2306 update](https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2306) on the Microsoft website |

## Notes and warnings

{{% alert title="CAUTION" color="warning" %}}
Before you use the Microsoft Patch and Update process to update Azure Stack Hub, close any active session to the ERCS virtual machines. If an active session is open, the update may fail, and must be resumed.
{{% /alert %}}

## Microsoft fixed issues

For information about fixed issues in this release, see the [Azure Stack Hub 2306 update](https://docs.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2306) on the Microsoft website.

## Hardware and firmware support

For information about supported hardware, firmware, and software, see the Dell Integrated System for Microsoft Azure Stack Hub Support Matrix. The Support Matrix is available at [Dell Integrated System for Microsoft Azure Stack Hub Support Matrix]({{< ref "../../SupportMatrix/2309/_index.md" >}}).

{{% alert title="NOTE" color="primary" %}}
The [Dell Azure Stack Hub Tech Book](https://infohub.delltechnologies.com/t/tech-book-dell-integrated-system-for-microsoft-azure-stack-hub-1/) contains information regarding dimensions for Dell Technologies racks, servers, and switches.
This information is updated as needed.
{{% /alert %}}

{{< rawhtml >}}

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<style>
table {
    border-width:1px; border-style:solid;
    border-color:black;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
    table-layout:fixed;
    overflow-wrap: break-word;
}
th {
    border-width:1px;
    padding:7px;
    border-style:solid;
    border-color:#0076CE;
    background-color:#0076CE;
    color:#FFFFFF;
    text-align:center;
}
td {
    border-width:1px;
    padding:7px;
    border-style:solid;
    border-color:#0076CE;
    text-align:center;
}
caption {
    padding-bottom: 10px;
    color:  #0076CE;
    font-weight: bold;
    text-align: left;
    font-size: 20px;
}
</style>

</head>

<body>

<div id="content">
{{< /rawhtml >}}

### Software Versions

{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2306.0.16</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2306'>Azure Stack Hub 2306 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2306.0.16</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2309.7</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2306.2462.46</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2306.2462.46'>Deployment Worksheet</a>.</td></tr> <tr><td>Dell Deployment Automation</td><td>2.23.2309.42</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2309.44</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Node Expansion</td><td>1.23.2309.14</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell RegisterJEA script</td><td>1.23.2309.38</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Customer Toolkit</td><td>2309.14</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr> <tr><td>Secure Connect Gateway</td><td>5.18.00.00</td><td>Secure Connect Gateway software.</td></tr> <tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr> <tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Windows Server 2019 LCU</td><td>KB5031361</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5031361'>KB5031361</a>.</td></tr> <tr><td>Windows Server 2019 ASDB LCU</td><td>KB5017270, KB5018461</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>Windows Server 2019 ASDB SSU</td><td>KB5018507</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>OS9 switch firmware (S3048, S4048, S5048)</td><td>9.14.2.20</td><td>OS9 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.5.5.5</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OEM extension package</td><td>2.3.2309.1</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr> <tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr> </table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>

{{< /rawhtml >}}

## Additional resources

### Dell Technologies resources

Additional Dell Technologies resources are available on the Dell Technologies Online Support website:

- [14G documentation](https://www.dell.com/support/home/us/en/04/product-support/product/cloud-for-microsoft-azure-stack14g/docs)

### Microsoft resources

The following additional resources are available on the Microsoft website:

- [Azure Stack Hub User Documentation](https://learn.microsoft.com/en-us/azure/azure-stack/user/)
- [Azure Stack Hub Operator Documentation](https://learn.microsoft.com/en-us/azure/azure-stack/)
- [Datacenter integration considerations for Azure Stack Hub integrated systems](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-datacenter-integration)

## Payload information

Firmware and driver versions of each individual component can be found in the Dell Integrated System for Microsoft Azure Stack Hub Support Matrix.

Fixes, enhancements, and other information about each firmware and driver can be found on the [Dell Support site](https://www.dell.com/support/home/en-us/).
