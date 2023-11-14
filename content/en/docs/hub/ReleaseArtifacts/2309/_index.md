---
title: "Release Artifacts for 2309"
linkTitle: "2309"
weight: 7691
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
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr> <tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2309.14.zip</td><td>2309.14</td></tr> <tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.3.2309.1.zip</td><td>2.3.2309.1</td></tr> <tr><td>Dell HLH Rebuild to Windows Server 2019</td><td>HLH_DataDrive_2309.26_Redeployment.zip</td><td>2309.26</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_QE_2.0.2309.44.exe</td><td>2.0.2309.44</td></tr> <tr><td>Dell Node Expansion scripts</td><td>DELLEMCNodeExpansion_1.23.2309.14.zip</td><td>1.23.2309.14</td></tr> </table><br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2306.0.16</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2306'>Azure Stack Hub 2306 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2306.0.16</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2309.7</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2306.2462.46</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2306.2462.46'>Deployment Worksheet</a>.</td></tr> <tr><td>Dell Deployment Automation</td><td>2.23.2309.42</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2309.44</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Node Expansion</td><td>1.23.2309.14</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell RegisterJEA script</td><td>1.23.2309.38</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Customer Toolkit</td><td>2309.14</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr> <tr><td>Secure Connect Gateway</td><td>5.18.00.00</td><td>Secure Connect Gateway software.</td></tr> <tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr> <tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Windows Server 2019 LCU</td><td>KB5031361</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5031361'>KB5031361</a>.</td></tr> <tr><td>Windows Server 2019 ASDB LCU</td><td>KB5017270, KB5018461</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>Windows Server 2019 ASDB SSU</td><td>KB5018507</td><td>Specific to the Windows Server 2019 ASDB image on the Hardware Lifecycle Host.</td></tr> <tr><td>OS9 switch firmware (S3048, S4048, S5048)</td><td>9.14.2.20</td><td>OS9 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.5.5.5</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OEM extension package</td><td>2.3.2309.1</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr> <tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr> </table><br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">BIOS</td><td rowspan="4">Firmware DUP</td><td rowspan="4">BIOS</td><td rowspan="4">N/A</td><td rowspan="4">YM8R4</td><td rowspan="4">56TY1</td><td rowspan="4">2.18.1</td><td rowspan="4">2.20.1</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">BIOS</td><td rowspan="1">Firmware DUP</td><td rowspan="1">BIOS</td><td rowspan="1">N/A</td><td rowspan="1">PF39N</td><td rowspan="1">MXH11</td><td rowspan="1">2.18.1</td><td rowspan="1">2.20.1</td></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="5">N/A</td><td rowspan="5">iDRAC with Lifecycle controller</td><td rowspan="5">Firmware DUP</td><td rowspan="5">iDRAC with Lifecycle Controller</td><td rowspan="5">N/A</td><td rowspan="5">Y0CWW</td><td rowspan="5">KH4XX</td><td rowspan="5">6.10.80.00</td><td rowspan="5">7.00.00.00</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">WS2022</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Driver DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1">7N9PV</td><td rowspan="1">8FFGM</td><td rowspan="1">21.5.0</td><td rowspan="1">22.5.0</td></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">WS2019</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Driver DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1">7N9PV</td><td rowspan="1">8FFGM</td><td rowspan="1">21.5.0</td><td rowspan="1">22.5.0</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2022</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4">Y31G3</td><td rowspan="4">52PMN</td><td rowspan="4">03.20.02</td><td rowspan="4">23.07.01</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2019</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4">Y31G3</td><td rowspan="4">52PMN</td><td rowspan="4">03.20.02</td><td rowspan="4">23.07.01</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S3048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1">9GWDW</td><td rowspan="1">9GWDW</td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.20</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S4048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">1NWP3</td><td rowspan="1">1NWP3</td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.20</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5048F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">FK3NJ</td><td rowspan="1">FK3NJ</td><td rowspan="1">9.14.2.20</td><td rowspan="1">9.14.2.20</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">H9HK2</td><td rowspan="1">29T68</td><td rowspan="1">10.5.5.3</td><td rowspan="1">10.5.5.5</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1">H9HK2</td><td rowspan="1">29T68</td><td rowspan="1">10.5.5.3</td><td rowspan="1">10.5.5.5</td></tr></table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
