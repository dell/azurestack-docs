---
title: "Release Artifacts for 14G - 2401"
linkTitle: "14G"
weight: 7599
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
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr> <tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2401.7.zip</td><td>2401.7</td></tr> <tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.3.2401.2.zip</td><td>2.3.2401.2</td></tr> <tr><td>Dell HLH Rebuild to Windows Server 2019</td><td>HLH_DataDrive_2401.18_Redeployment.zip</td><td>2401.18</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_QE_2.0.2401.12.exe</td><td>2.0.2401.12</td></tr> <tr><td>Dell Node Expansion scripts</td><td>DELLEMCNodeExpansion_1.24.2401.8.zip</td><td>1.24.2401.8</td></tr> </table><br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2306.0.16</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2306'>Azure Stack Hub 2306 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2306.0.16</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2401.14</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2306.2462.46</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/'>Deployment Worksheet</a>.</td></tr> <tr><td>Dell Deployment Automation</td><td>2.24.2401.8</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2401.12</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Node Expansion</td><td>1.24.2401.8</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell RegisterJEA script</td><td>1.24.2401.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Customer Toolkit</td><td>2401.7</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr> <tr><td>Secure Connect Gateway</td><td>5.18.00.00</td><td>Secure Connect Gateway software.</td></tr> <tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr> <tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Windows Server 2019 LCU</td><td>KB5033371</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5033371'>KB5033371</a>.</td></tr> <tr><td>Windows Server 2019 ASDB LCU</td><td>KB5017270, KB5018461</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>Windows Server 2019 ASDB SSU</td><td>KB5018507</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>OS9 switch firmware (S3048, S4048, S5048)</td><td>9.14.2.21</td><td>OS9 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.5.5.6</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OEM extension package</td><td>2.3.2401.2</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr> <tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr> </table><br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">MICRON 5400 Pro M.2 SSD MTFDDAV480TGA-1BC1ZABDA (Boot)</td><td rowspan="4">Firmware DUP</td><td rowspan="4">Storage - 480GB SATA SSD</td><td rowspan="4">VN68H</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C2Y7D'>C2Y7D</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RJ0WY'>RJ0WY</a></td><td rowspan="4">K002</td><td rowspan="4">K003</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">MICRON 5400 Pro M.2 SSD MTFDDAV960TGA-1BC1ZABDA (Boot)</td><td rowspan="4">Firmware DUP</td><td rowspan="4">Storage - 960GB SATA SSD</td><td rowspan="4">KHRN0</td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C2Y7D'>C2Y7D</a></td><td rowspan="4"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RJ0WY'>RJ0WY</a></td><td rowspan="4">K002</td><td rowspan="4">K003</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S3048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9GWDW'>9GWDW</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XVTCN'>XVTCN</a></td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.21</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S4048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=1NWP3'>1NWP3</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=F90H3'>F90H3</a></td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.21</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5048F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FK3NJ'>FK3NJ</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HG8VH'>HG8VH</a></td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.21</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=29T68'>29T68</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NV3YV'>NV3YV</a></td><td rowspan="1">10.5.5.5</td><td rowspan="1">10.5.5.6</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=29T68'>29T68</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NV3YV'>NV3YV</a></td><td rowspan="1">10.5.5.5</td><td rowspan="1">10.5.5.6</td></tr></table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
