---
title: "Release Artifacts for 14G - Dell 2511"
linkTitle: "14G"
weight: 7489
Description: >
comment: "Copyright © 2025 Dell Inc."

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
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr>
<tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2511.6.zip</td><td>2511.6</td></tr>
<tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.4.2511.1.zip</td><td>2.4.2511.1</td></tr>
<tr><td>Dell HLH Rebuild to Windows Server 2022</td><td>HLH_DataDrive_2511.12_Redeployment.zip</td><td>2511.12</td></tr>
<tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_QE_2.0.2511.14.exe</td><td>2.0.2511.14</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Version</th><th>Notes</th></tr>
<tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2506.0.15</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2506'>Azure Stack Hub 2506 update</a>. The hotfix will be available in the Admin portal.</td></tr>
<tr><td>Hardware Lifecycle Host</td><td>1.2506.0.13</td><td>N/A</td></tr>
<tr><td>Hardware Lifecycle Host ISO</td><td>2511.4</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2506.3141.132</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2506.3141.132'>Deployment Worksheet</a>.</td></tr>
<tr><td>Dell Deployment Automation</td><td>2.28.2511.15</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr>
<tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2511.14</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell RegisterJEA script</td><td>1.28.2511.10</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell Customer Toolkit</td><td>2511.6</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr>
<tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr>
<tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5068787</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5068787'>KB5068787</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.6.0.6</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2511.1</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr>
<tr><td>Firmware Update Module in OEM Extension Package</td><td>2.4.2504.1</td><td>N/A</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">BIOS</td><td rowspan="4">Firmware DUP</td><td rowspan="4">BIOS</td><td rowspan="4">N/A</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T4VCN'>T4VCN</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M80P'>9M80P</a></td><td rowspan="4">2.24.0</td><td rowspan="4">2.25.0</td></tr>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">BIOS</td><td rowspan="1">Firmware DUP</td><td rowspan="1">BIOS</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NW297'>NW297</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V76F2'>V76F2</a></td><td rowspan="1">2.24.0</td><td rowspan="1">2.25.0</td></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="5">N/A</td><td rowspan="5">iDRAC with Lifecycle controller</td><td rowspan="5">Firmware DUP</td><td rowspan="5">iDRAC with Lifecycle Controller</td><td rowspan="5">N/A</td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RVDDR'>RVDDR</a></td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VP556'>VP556</a></td><td rowspan="5">7.00.00.181</td><td rowspan="5">7.00.00.183</td></tr>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2022</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3G71F'>3G71F</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PWYXM'>PWYXM</a></td><td rowspan="4">25.1</td><td rowspan="4">25.07</td></tr>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td>
<tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P8GNV'>P8GNV</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=214KP'>214KP</a></td><td rowspan="1">10.6.0.5</td><td rowspan="1">10.6.0.6</td></tr>
<tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P8GNV'>P8GNV</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=214KP'>214KP</a></td><td rowspan="1">10.6.0.5</td><td rowspan="1">10.6.0.6</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
