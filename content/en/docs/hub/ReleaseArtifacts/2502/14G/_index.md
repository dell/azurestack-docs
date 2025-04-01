---
title: "Release Artifacts for 14G - 2502"
linkTitle: "14G"
weight: 7498
Description: >

---

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

### Dell Customer Tools
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr> <tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2502.5.zip</td><td>2502.5</td></tr> <tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.4.2502.1.zip</td><td>2.4.2502.1</td></tr> <tr><td>Dell HLH Rebuild to Windows Server 2022</td><td>HLH_DataDrive_2502.9_Redeployment.zip</td><td>2502.9</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_QE_2.0.2502.16.exe</td><td>2.0.2502.16</td></tr> </table><br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2501.0.21</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501'>Azure Stack Hub 2501 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2406.0.8</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2502.12</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2501.2966.112</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2501.2966.112'>Deployment Worksheet</a>.</td></tr> <tr><td>Dell Deployment Automation</td><td>2.28.2502.13</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2502.16</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell RegisterJEA script</td><td>1.28.2502.11</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Customer Toolkit</td><td>2502.5</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr> <tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr> <tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Windows Server 2022 LCU</td><td>KB5051979</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5051979'>KB5051979</a>.</td></tr> <tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.6.0.1</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OEM extension package</td><td>2.4.2502.1</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr> <tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr> </table><br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><td rowspan="1">N/A</td><td rowspan="1">HGST HUH721212AL5200</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 12TB SAS HDD </td><td rowspan="1">9HXK6</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8VV2X'>8VV2X</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=04PM5'>04PM5</a></td><td rowspan="1">NS10</td><td rowspan="1">NS11</td></tr><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><td rowspan="1">N/A</td><td rowspan="1">HGST HUS726T4TALS200</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 4TB SAS HDD</td><td rowspan="1">NT1X2</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8W21G'>8W21G</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=J5K8G'>J5K8G</a></td><td rowspan="1">PU07</td><td rowspan="1">PU09</td></tr><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><td rowspan="1">N/A</td><td rowspan="1">HGST HUS728T8TAL5200 </td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 8TB SAS HDD </td><td rowspan="1">44YFV</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=27MDM'>27MDM</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8GM6M'>8GM6M</a></td><td rowspan="1">RS07</td><td rowspan="1">RS09</td></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="5">N/A</td><td rowspan="5">iDRAC with Lifecycle controller</td><td rowspan="5">Firmware DUP</td><td rowspan="5">iDRAC with Lifecycle Controller</td><td rowspan="5">N/A</td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XTFXJ'>XTFXJ</a></td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C2VDG'>C2VDG</a></td><td rowspan="5">7.00.00.173</td><td rowspan="5">7.00.00.174</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DNVRC'>DNVRC</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HD1V8'>HD1V8</a></td><td rowspan="1">10.5.6.5</td><td rowspan="1">10.6.0.1</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DNVRC'>DNVRC</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HD1V8'>HD1V8</a></td><td rowspan="1">10.5.6.5</td><td rowspan="1">10.6.0.1</td></tr></table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
