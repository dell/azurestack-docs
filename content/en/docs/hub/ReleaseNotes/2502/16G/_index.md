---
title: "Release Notes for 16G - Dell 2502"
linkTitle: "16G"
weight: 7498
Description: >
comment: "Copyright © 2026 Dell Inc."

---

## Dell Integrated System for Microsoft Azure Stack Hub Release Notes
### Current Release Version: Dell 2502 and Microsoft 2501
### Release Type: Major (MA)

{{% alert title="NOTE" color="primary" %}}
Dell Azure Stack Hub OEM updates must be installed in sequential order, it is not supported to skip or miss-out an OEM update version. These release notes contain supplemental information for the Dell 2502 release and the Microsoft 2501 release.
{{% /alert %}}

## New features, changed features, and fixes
### New features
* Initial release of the Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager which provides an automated way of upgrading Hardware Lifecycle Host (HLH) firmware, software and driver components. See [Patch and Update for 16G]({{< ref "../../../PatchAndUpdate/16G/_index.md" >}}).

* There are improvements and updates to drivers and firmware. See [Release Artifacts for 16G - Dell 2502]({{< ref "../../../ReleaseArtifacts/2502/16G/_index.md" >}}).

### Changed features
There are no changed features for this release.

### Fixes
There are no fixes for this release.

## Known issues and limitations

This release notes document describes known issues and limitations for the Dell Integrated System for Microsoft Azure Stack Hub solution based on the Dell 2502 release and Microsoft 2501 release.

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
For information about supported hardware, firmware, and software, see the [Dell Integrated System for Microsoft Azure Stack Hub Support Matrix]({{< ref "../../../SupportMatrix/2502/16G/_index.md" >}}).

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
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2501.0.21</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501'>Azure Stack Hub 2501 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2406.0.8</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2502.5</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2501.2966.112</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2501.2966.112'>Deployment Worksheet</a>.</td></tr> <tr><td>Windows Server 2022 LCU</td><td>KB5051979</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5051979'>KB5051979</a>.</td></tr> <tr><td>OS10 switch firmware (S5248)</td><td>10.6.0.1</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr> <tr><td>OEM extension package</td><td>2.4.2502.3</td><td>Contains the driver and firmware update payload.</td></tr> <tr><td>OEM package</td><td>2502.3</td><td>Includes the OEM extension package.</td></tr> </table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}

## Additional resources

### Dell Technologies resources

Additional Dell Technologies resources are available on the Dell Technologies Online Support website:

- [16G documentation](https://www.dell.com/support/home/us/en/04/product-support/product/cloud-for-microsoft-azure-stack16G/docs)

### Microsoft resources

The following additional resources are available on the Microsoft website:

- [Azure Stack Hub User Documentation](https://learn.microsoft.com/en-us/azure/azure-stack/user/)
- [Azure Stack Hub Operator Documentation](https://learn.microsoft.com/en-us/azure/azure-stack/)
- [Datacenter integration considerations for Azure Stack Hub integrated systems](https://learn.microsoft.com/en-us/azure-stack/operator/azure-stack-datacenter-integration)
