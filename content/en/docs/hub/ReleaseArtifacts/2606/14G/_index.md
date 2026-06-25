---
title: "Release Artifacts for 14G - Dell 2606"
linkTitle: "14G"
weight: 7394
Description: >
comment: "Copyright © 2026 Dell Inc."

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
<tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2606.5.zip</td><td>2606.5</td></tr>
<tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.4.2606.2.zip</td><td>2.4.2606.2</td></tr>
<tr><td>Dell HLH Rebuild to Windows Server 2022</td><td>HLH_DataDrive_2606.8_Redeployment.zip</td><td>2606.8</td></tr>
<tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_QE_2.0.2511.14.exe</td><td>2.0.2511.14</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Version</th><th>Notes</th></tr>
<tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2601.0.4</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2601'>Azure Stack Hub 2601 update</a>. The hotfix will be available in the Admin portal.</td></tr>
<tr><td>Hardware Lifecycle Host</td><td>1.2601.0.4</td><td>N/A</td></tr>
<tr><td>Hardware Lifecycle Host ISO</td><td>2606.3</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2601.3322.143</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/'>Deployment Worksheet</a>.</td></tr>
<tr><td>Dell Deployment Automation</td><td>2.28.2606.3</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr>
<tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2511.14</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell RegisterJEA script</td><td>1.28.2606.2</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Dell Customer Toolkit</td><td>2606.5</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr>
<tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr>
<tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5087545</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5087545'>KB5087545</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.6.1.1</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2606.2</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr>
<tr><td>Firmware Update Module in OEM Extension Package</td><td>2.4.2603.1</td><td>N/A</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">BIOS</td><td rowspan="1">Firmware DUP</td><td rowspan="1">BIOS</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V76F2'>V76F2</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HV7HK'>HV7HK</a></td><td rowspan="1">2.25.0</td><td rowspan="1">2.27.0</td></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">BIOS</td><td rowspan="4">Firmware DUP</td><td rowspan="4">BIOS</td><td rowspan="4">N/A</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M80P'>9M80P</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N5C9K'>N5C9K</a></td><td rowspan="4">2.25.0</td><td rowspan="4">2.27.0</td></tr>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="5">N/A</td><td rowspan="5">iDRAC with Lifecycle controller</td><td rowspan="5">Firmware DUP</td><td rowspan="5">iDRAC with Lifecycle Controller</td><td rowspan="5">N/A</td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VP556'>VP556</a></td><td rowspan="5"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FWMWV'>FWMWV</a></td><td rowspan="5">7.00.00.183</td><td rowspan="5">7.00.00.184</td></tr>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">WS2022</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Driver DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=6JHVK'>6JHVK</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3VT4C'>3VT4C</a></td><td rowspan="1">23.0.0</td><td rowspan="1">25.0.4</td></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">N/A</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=H8M48'>H8M48</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PJDHV'>PJDHV</a></td><td rowspan="1">20.5.16</td><td rowspan="1">25.0.4</td></tr>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">Mellanox ConnectX-4 LX  / 25GbE</td><td rowspan="4">Firmware DUP</td><td rowspan="4">Network/RDMA</td><td rowspan="4">N/A</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=76DNG'>76DNG</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N62GF'>N62GF</a></td><td rowspan="4">14.32.21.02</td><td rowspan="4">14.32.21.04</td></tr>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td>
<tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2022</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PWYXM'>PWYXM</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK'>3T3MK</a></td><td rowspan="4">25.07</td><td rowspan="4">26.001.03</td></tr>
<tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td>
<tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td>
<tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td>
<tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8N9K7'>8N9K7</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F3RV'>5F3RV</a></td><td rowspan="1">10.6.1.0</td><td rowspan="1">10.6.1.1</td></tr>
<tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8N9K7'>8N9K7</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F3RV'>5F3RV</a></td><td rowspan="1">10.6.1.0</td><td rowspan="1">10.6.1.1</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
