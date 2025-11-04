---
title: "Release Notes for 14G - Dell 2504"
linkTitle: "14G"
weight: 7496
Description: >
comment: "Copyright © 2025 Dell Inc."

---

## Dell Integrated System for Microsoft Azure Stack Hub Release Notes
### Current Release Version: Dell 2504 and Microsoft 2501
### Release Type: Major (MA)

{{% alert title="NOTE" color="primary" %}}
Dell Azure Stack Hub OEM updates must be installed in sequential order, it is not supported to skip or miss-out an OEM update version. These release notes contain supplemental information for the Dell 2504 release and the Microsoft 2501 release.
{{% /alert %}}

## New features, changed features, and fixes
### New features
There are improvements and updates to drivers and firmware. See [Release Artifacts for 14G - Dell 2504]({{< ref "../../../ReleaseArtifacts/2504/14G/_index.md" >}}).

### Changed features
There are no changed features for this release.

### Fixes
There are no fixes for this release.

## Known issues and limitations

This release notes document describes known issues and limitations for the Dell Integrated System for Microsoft Azure Stack Hub solution based on the Dell 2504 release and Microsoft 2501 release.

| Item                           | Description                                                                                                                                                                                                                                  |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OEM update                     | Dell Technologies recommends updating to the n-1 version before applying the latest OEM package.                                                          |
| Microsoft Azure Stack Hub code | For information about known issues and limitations in the Microsoft Azure Stack Hub code, see the [Azure Stack Hub 2501 update](https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501) on the Microsoft website |

## Notes and warnings
{{% alert title="CAUTION" color="warning" %}}
Before you use the Microsoft Patch and Update process to update Azure Stack Hub, close any active session to the ERCS virtual machines. If an active session is open, the update may fail, and must be resumed.
{{% /alert %}}

## Microsoft fixed issues
For information about fixed issues in this release, see the [Azure Stack Hub 2501 update](https://docs.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501) on the Microsoft website.

## Hardware and firmware support
For information about supported hardware, firmware, and software, see the [Dell Integrated System for Microsoft Azure Stack Hub Support Matrix]({{< ref "../../../SupportMatrix/2504/14G/_index.md" >}}).

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
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Version</th><th>Notes</th></tr>
<tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2501.0.21</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501'>Azure Stack Hub 2501 update</a>. The hotfix will be available in the Admin portal.</td></tr>
<tr><td>Hardware Lifecycle Host</td><td>1.2406.0.8</td><td>N/A</td></tr>
<tr><td>Hardware Lifecycle Host ISO</td><td>2504.2</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2501.2966.112</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2501.2966.112'>Deployment Worksheet</a>.</td></tr>
<tr><td>Dell Deployment Automation</td><td>2.28.2504.50</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr>
<tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2504.2</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell RegisterJEA script</td><td>1.28.2504.8</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell Customer Toolkit</td><td>2504.7</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr>
<tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr>
<tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5058385</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5058385'>KB5058385</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.6.0.3</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2504.1</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr>
<tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr>
</table>
<br>
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
