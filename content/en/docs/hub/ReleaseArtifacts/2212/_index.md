---
title: "Release Artifacts for 2212"
linkTitle: "2212"
weight: 7788
Description: >

---

{{< rawhtml >}}

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <style>
    table {
        border-width:1px;border-style:solid;
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
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr> <tr><td>Dell Customer Toolkit</td><td>AzS_DellEMC_CustomerToolkit_2212.57.zip</td><td>2212.57</td></tr> <tr><td>Dell OEM extension package for drivers and firmware updates</td><td>AzS-DellEMC-2.3.2212.4.zip</td><td>2.3.2212.4</td></tr> <tr><td>Dell HLH Rebuild to Windows Server 2019</td><td>HLH_DataDrive_2212.131_Redeployment.zip</td><td>2212.131</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>Dell_EMC_Patch_and_Update_Automation_V_2.0.2212.375.exe</td><td>2.0.2212.375</td></tr> <tr><td>Dell Node Expansion scripts</td><td>DELLEMCNodeExpansion_1.20.2212.131.zip</td><td>1.20.2212.131</td></tr> </table><br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2206.0.6</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2206'>Azure Stack Hub 2206 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2206.0.6</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2212.63</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2206.2049.163</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2206.2049.163'>Deployment Worksheet</a>.</td></tr> <tr><td>Dell Deployment Automation</td><td>2.20.2212.272</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell Patch and Update Automation Tool</td><td>2.0.2212.375</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Node Expansion</td><td>1.20.2212.131</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Deployment Guide.</td></tr> <tr><td>Dell RegisterJEA script</td><td>1.20.2212.290</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Dell Customer Toolkit</td><td>2212.57</td><td>See <a href='https://www.dell.com/support/home/en-us/product-support/product/cloud-for-microsoft-azure-stack14g/drivers'>Integrated System for Microsoft Azure Stack Hub 14G/Drivers & Downloads</a> on the Dell Technologies Online Support website.</td></tr> <tr><td>Secure Connect Gateway</td><td>5.12.00.00</td><td>Secure Connect Gateway software.</td></tr> <tr><td>UpdateACL</td><td>1.1.2</td><td>N/A</td></tr> <tr><td>UpdateWDAC</td><td>1.1.1</td><td>See the Dell Integrated System for Microsoft Azure Stack Hub Patch and Update Installation Guide.</td></tr> <tr><td>Windows Server 2019 LCU</td><td>KB5021655</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5021655'>KB5021655</a>.</td></tr> <tr><td>OS9 switch firmware (S3048, S4048, S5048)</td><td>9.14.2.17</td><td>OS9 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OS10 switch firmware (S5248, N3248)</td><td>10.5.4.4</td><td>OS10 switch firmware code is in the Dell Customer Toolkit.</td></tr> <tr><td>OEM extension package</td><td>2.3.2212.4</td><td>Included in the Dell Customer Toolkit and contains the driver and firmware update payload.</td></tr> <tr><td>Firmware Update Module in OEM Extension Package</td><td>2.2.2204.1</td><td>N/A</td></tr> </table><br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">BIOS</td><td rowspan="4">Firmware DUP</td><td rowspan="4">BIOS</td><td rowspan="4">N/A</td><td rowspan="4">NDFHH</td><td rowspan="4">NVD2K</td><td rowspan="4">2.15.1</td><td rowspan="4">2.17.1</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">BIOS</td><td rowspan="1">Firmware DUP</td><td rowspan="1">BIOS</td><td rowspan="1">N/A</td><td rowspan="1">H59KR</td><td rowspan="1">PC6KF</td><td rowspan="1">2.16.1</td><td rowspan="1">2.17.1</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="3">N/A</td><td rowspan="3">INTEL S4520 RR M.2 SSD SSDSC2KB480GZR (Boot)</td><td rowspan="3">Firmware DUP</td><td rowspan="3">Storage - 480GB SATA SSD </td><td rowspan="3">GX439</td><td rowspan="3">N/A</td><td rowspan="3">PN1T8</td><td rowspan="3">N/A</td><td rowspan="3">DL70</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">INTEL S4520 RR M.2 SSD SSDSC2KB480GZR (Boot)</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 960GB SATA SSD </td><td rowspan="1">F6H8H</td><td rowspan="1">N/A</td><td rowspan="1">PN1T8</td><td rowspan="1">N/A</td><td rowspan="1">DL70</td></tr><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><td rowspan="1">N/A</td><td rowspan="1">INTEL S4520 RR M.2 SSD SSDSC2KB960GZR (Boot)</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 480GB SATA SSD </td><td rowspan="1">GX439</td><td rowspan="1">N/A</td><td rowspan="1">PN1T8</td><td rowspan="1">N/A</td><td rowspan="1">DL70</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="3">N/A</td><td rowspan="3">INTEL S4520 RR M.2 SSD SSDSC2KB960GZR (Boot)</td><td rowspan="3">Firmware DUP</td><td rowspan="3">Storage - 960GB SATA SSD </td><td rowspan="3">F6H8H</td><td rowspan="3">N/A</td><td rowspan="3">PN1T8</td><td rowspan="3">N/A</td><td rowspan="3">DL70</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">INTEL S4620 RR M.2 SSD SSDSC2KG480GZR (Boot)</td><td rowspan="4">Firmware DUP</td><td rowspan="4">Storage - 480GB SATA SSD </td><td rowspan="4">00DJ5</td><td rowspan="4">N/A</td><td rowspan="4">PN1T8</td><td rowspan="4">N/A</td><td rowspan="4">DL70</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">N/A</td><td rowspan="4">INTEL S4620 RR M.2 SSD SSDSC2KG960GZR (Boot)</td><td rowspan="4">Firmware DUP</td><td rowspan="4">Storage - 960GB SATA SSD </td><td rowspan="4">8MHYH</td><td rowspan="4">N/A</td><td rowspan="4">PN1T8</td><td rowspan="4">N/A</td><td rowspan="4">DL70</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">WS2022</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Driver DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1">2YNFG</td><td rowspan="1">7N9PV</td><td rowspan="1">20.5.0</td><td rowspan="1">21.5.0</td></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R640)</td><td>R640</td><td rowspan="1">WS2019</td><td rowspan="1">INTEL X710 DP 10Gb DA/SFP+, + I350 DP 1Gb Ethernet, NDC</td><td rowspan="1">Driver DUP</td><td rowspan="1">Network</td><td rowspan="1">N/A</td><td rowspan="1">2YNFG</td><td rowspan="1">7N9PV</td><td rowspan="1">20.5.0</td><td rowspan="1">21.5.0</td></tr><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2022</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4">GT4YH</td><td rowspan="4">JX4HG</td><td rowspan="4">02.80.02</td><td rowspan="4">03.00.01</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Scale Units (PowerEdge R640 AS All Flash)</td><td>R640</td><td rowspan="4">WS2019</td><td rowspan="4">Mellanox ConnectX-4 LX / 25GbE</td><td rowspan="4">Driver DUP</td><td rowspan="4">Network / RDMA</td><td rowspan="4">N/A</td><td rowspan="4">GT4YH</td><td rowspan="4">JX4HG</td><td rowspan="4">02.80.02</td><td rowspan="4">03.00.01</td></tr><tr><td>Scale Units (PowerEdge R640 Tactical)</td><td>R640</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><tr><td>Scale Units (PowerEdge R840 AS Dense)</td><td>R840</td><tr><td>Scale Units (PowerEdge R740xd)</td><td>R740xd</td><td rowspan="1">N/A</td><td rowspan="1">SEAGATE ST12000NM006J</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - 12TB SAS HDD </td><td rowspan="1">M1C0T</td><td rowspan="1">N/A</td><td rowspan="1">4JCT7 </td><td rowspan="1">N/A</td><td rowspan="1">PSL9</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S3048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1">1NTPC</td><td rowspan="1">3RPV2</td><td rowspan="1">9.14.2.14</td><td rowspan="1">9.14.2.17</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S4048-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">6FPJT</td><td rowspan="1">3HHHC</td><td rowspan="1">9.14.2.14</td><td rowspan="1">9.14.2.17</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5048F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">XT6YX</td><td rowspan="1">RVFFK</td><td rowspan="1">9.14.2.14</td><td rowspan="1">9.14.2.17</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1">0XGR0</td><td rowspan="1">18R7R</td><td rowspan="1">10.5.3.4</td><td rowspan="1">10.5.4.4</td></tr><tr><td>N/A</td><td>14G</td><td rowspan="1">N/A</td><td rowspan="1">N3248TE-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">BMC</td><td rowspan="1">N/A</td><td rowspan="1">0XGR0</td><td rowspan="1">18R7R</td><td rowspan="1">10.5.3.4</td><td rowspan="1">10.5.4.4</td></tr></table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
