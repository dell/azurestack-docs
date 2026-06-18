---
title: "Azure Local Support Matrix for 17G (Dell 2606)"
linkTitle: "17G"
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

### Supported Platforms
{{< rawhtml >}}
<table>
<colgroup><col/><col/></colgroup>
<tr><th>Model</th><th>Supported Operating System</th></tr>
<tr><td>AX-770</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>AX-670</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Base Components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Type</th><th>Software Bundle</th><th>Minimum Supported Version</th><th>Supported Platforms</th><th>Supported OS</th></tr>
<tr><td>BIOS</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VTF4T">VTF4T</a></td><td>1.8.5</td><td>AX-670<br><br>AX-770</td><td>NA</td></tr>
<tr><td>Chipset driver for 17G Intel platforms</td><td>Driver DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7TXYY">7TXYY</a></td><td>10.1.19928.8615</td><td>AX-670<br><br>AX-770</td><td>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
<tr><td rowspan="2">iDRAC10 with Lifecycle Controller</td><td rowspan="2">Firmware DUP</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=11F63">11F63</a></td><td rowspan="1">1.30.30.50</td><td rowspan="2">AX-670<br><br>AX-770</td><td rowspan="2">NA</td></tr>
<tr><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YP95X">YP95X</a></td><td rowspan="1">10.30.10.50</td></tr>
<tr><td>Passive Backplane (1U 8xE3 x2)</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0M4TD">0M4TD</a></td><td>1.92</td><td>AX-670</td><td>NA</td></tr>
<tr><td>Passive Backplane (2U 8xE3 x2)</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7P6P5">7P6P5</a></td><td>1.92</td><td>AX-770</td><td>NA</td></tr>
<tr><td>iDRAC Service Module</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=238XW">238XW</a></td><td>6.1.0.0</td><td>AX-670<br><br>AX-770</td><td>NA</td></tr>
<tr><td>FPGA</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WTG14">WTG14</a></td><td>109.128.104</td><td>AX-670<br><br>AX-770</td><td>NA</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Network Adapters
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Part Number</th><th>SDDC Advanced Qualification</th><th>RDMA Protocol</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Driver Software Bundle</th><th>Driver Minimum Supported Version</th><th>Supported OS</th><th>Supported Platforms</th></tr>
<tr><td>Broadcom 57412 Quad Port 10GbE Base-T, OCP 3.0 NIC +Sec</td><td>59JPJ</td><td rowspan="2">Management<br><br>Compute (Premium)</td><td rowspan="2">NA</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FF94T">FF94T</a></td><td rowspan="2">236.1.173.0</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=78X9T">78X9T</a></td><td rowspan="2">36.11.52.00</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-670<br><br>AX-770</td></tr>
<tr><td>Broadcom 57412 Dual Port 10GbE BASE-T Adapter, OCP 3.0 NIC +Sec</td><td>MN1T3</td>
<tr><td>Emulex LPe37102 SecureHBA Dual Port Fibre Channel 32Gb Adapter, PCIe Low Profile +Sec</td><td>2HGNX</td><td rowspan="2">NA</td><td rowspan="2">NA</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=15J5T">15J5T</a></td><td rowspan="2">03.10.12</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8XGGG">8XGGG</a></td><td rowspan="2">12.34.10</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-670</td></tr>
<tr><td>Emulex LPe38102 SecureHBA Dual Port Fibre Channel 64Gb Adapter, PCIe Low Profile +Sec</td><td>TF3HV</td>
<tr><td>Emulex LPe38102 SecureHBA Dual Port Fibre Channel 64Gb Adapter, PCIe Full Height +Sec</td><td>D6PNX</td><td rowspan="2">NA</td><td rowspan="2">NA</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=15J5T">15J5T</a></td><td rowspan="2">03.10.12</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8XGGG">8XGGG</a></td><td rowspan="2">12.34.10</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-770</td></tr>
<tr><td>Emulex LPe37102 SecureHBA Dual Port Fibre Channel 32Gb Adapter, PCIe Full Height +Sec</td><td>JWVMH</td>
<tr><td>NVIDIA/Mellanox ConnectX-6 Dx OCP3</td><td>769PV</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0WM7T">0WM7T</a></td><td rowspan="2">22.48.1000</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="2">26.001.03</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-670<br><br>AX-770</td></tr>
<tr><td>NVIDIA/Mellanox ConnectX-6 Dx PCIe LP</td><td>PXKX5</td>
<tr><td>NVIDIA/Mellanox ConnectX-6 Dx PCIe FH</td><td>6PKY5</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0WM7T">0WM7T</a></td><td rowspan="1">22.48.1000</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="1">26.001.03</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-770</td></tr>
<tr><td>NVIDIA/Mellanox ConnectX-6 Lx PCIe LP</td><td>74GDV</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=KX0W4">KX0W4</a></td><td rowspan="2">26.48.1000</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="2">26.001.03</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-670<br><br>AX-770</td></tr>
<tr><td>NVIDIA/Mellanox ConnectX-6 Lx OCP3</td><td>7GGY4</td>
<tr><td>NVIDIA/Mellanox ConnectX-6 Lx PCIe FH</td><td>17W36</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=KX0W4">KX0W4</a></td><td rowspan="1">26.48.1000</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="1">26.001.03</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-770</td></tr>
<tr><td>QLogic QLE2772C Dual Port 32Gb Fibre Channel, PCIe Low Profile +Sec</td><td>K10X5</td><td rowspan="1">NA</td><td rowspan="1">NA</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3XDWV">3XDWV</a></td><td rowspan="1">17.10.04</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RF21G">RF21G</a></td><td rowspan="1">37.10.04</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-670</td></tr>
<tr><td>QLogic QLE2772C Dual Port 32Gb Fibre Channel, PCIe Full Height +Sec</td><td>663P2</td><td rowspan="1">NA</td><td rowspan="1">NA</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3XDWV">3XDWV</a></td><td rowspan="1">17.10.04</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RF21G">RF21G</a></td><td rowspan="1">37.10.04</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-770</td></tr>
<tr><td>QLogic QLE2872C Dual Port 64Gb Fibre Channel, PCIe Low Profile +Sec</td><td>W72F2</td><td rowspan="1">NA</td><td rowspan="1">NA</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMXP3">XMXP3</a></td><td rowspan="1">17.10.04</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RF21G">RF21G</a></td><td rowspan="1">37.10.04</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-670</td></tr>
<tr><td>QLogic QLE2872C Dual Port 64Gb Fibre Channel, PCIe Full Height +Sec</td><td>X29W4</td><td rowspan="1">NA</td><td rowspan="1">NA</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMXP3">XMXP3</a></td><td rowspan="1">17.10.04</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RF21G">RF21G</a></td><td rowspan="1">37.10.04</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-770</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Network Switches
{{% alert title="NOTE" color="primary" %}}
A list of supported Network Switch models along with the supported firmware versions can be found here, [Physical network requirements for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/concepts/physical-network-requirements?#network-switches-for-azure-local).
{{% /alert %}}

### PowerFlex
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>PowerFlex SDC Driver Version</th><th>Validated Platforms</th><th>Supported OS</th><th>Download Link</th><th>Extracted Package Location</th></tr>
<tr><td>PowerFlex Storage Data Client (SDC)</td><td>4.5.2.2</td><td>AX-670<br> AX-770</td><td>Azure Stack HCI-24H2</td><td><a href="https://dl.dell.com/downloads/41X88_PowerFlex-Software-4.5.5.2-SDC-Driver.zip">https://dl.dell.com/downloads/41X88_PowerFlex-Software-4.5.5.2-SDC-Driver.zip</a></td><td>PowerFlex_4.5.5200.104_Windows_SDC:<br>EMC-ScaleIO-sdc-4.5-5200.104.msi</td></tr>
<tr><td>PowerFlex Storage Data Client (SDC)</td><td>5</td><td>AX-670<br> AX-770</td><td>Azure Stack HCI-24H2</td><td><a href="https://dl.dell.com/downloads/09J62_PowerFlex-Software-5.0.0.0-SDC-Driver.zip">https://dl.dell.com/downloads/09J62_PowerFlex-Software-5.0.0.0-SDC-Driver.zip</a></td><td>PowerFlex_5.0.0.941_Windows_SDC:<br>EMC-ScaleIO-sdc-5.0-0.941.msi</td></tr>
</table>
<br>
{{< /rawhtml >}}


### GPUs
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>GPU Model</th><th>Vendor</th><th>Description</th><th>Part Number</th><th>Firmware version</th><th>Driver Version</th><th>GPU-P capable</th><th>Supported Platform</th><th>Supported OS</th></tr>
<tr><td>A16</td><td>NVIDIA</td><td>NVIDIA Ampere A16, PCIe, 250W, 64GB Passive, Double Wide, Full Height GPU,V2</td><td>D1P1T</td><td>94.07.54.00.45</td><td>553.62</td><td></td><td>AX-770</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>L4</td><td>NVIDIA</td><td>NVIDIA L4, PCIe, 72W, 24GB Passive, Single Wide Low Profile GPU</td><td>V9XT2</td><td>95.04.29.00.06</td><td>553.62</td><td></td><td>AX-670</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>L4</td><td>NVIDIA</td><td>NVIDIA L4, PCIe, 72W, 24GB Passive, Single Wide Full Height GPU</td><td>NG3PY</td><td>95.04.29.00.06</td><td>553.62</td><td></td><td>AX-770</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>L40S</td><td>NVIDIA</td><td>NVIDIA Ampere L40S, PCIe, 350W, 48GB Passive, Double Wide, Full Height, Full Length, GPU with cable</td><td>7WK28</td><td>95.02.66.00.02</td><td>553.62</td><td></td><td>AX-770</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>RTX PRO 6000</td><td>NVIDIA</td><td>NVIDIA RTX PRO 6000 BSE 96GB 600W PCIe GPU</td><td>THH68</td><td>98.02.74.00.01</td><td>582.53</td><td></td><td>AX-770</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
</table>

{{< /rawhtml >}}
{{% alert title="NOTE" color="primary" %}}
Dell update packages are not available for GPU cards, please download the latest driver version from NVIDIA driver download page.
{{% /alert %}}
### Storage Controllers
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Dell Part Number</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Driver Software Bundle</th><th>Driver Minimum Supported Version</th><th>Supported Platforms</th><th>Supported OS</th></tr>
<tr><td>BOSS-N1</td><td>NH7WD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GDT3C">GDT3C</a></td><td>2.2.13.2038</td><td>Inbox</td><td>Inbox</td><td>AX-670<br><br>AX-770</td><td>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
</table>
<br>
{{< /rawhtml >}}


### SATA M.2 SSD Boot Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>NA</td><td>Solidigm</td><td>PE9010</td><td>HFS960GDJ8X167N</td><td>XN5KG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8X8YR">8X8YR</a></td><td>1.2.1</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>NA</td><td>Solidigm</td><td>PE9010</td><td>HFS960GEJ8X167N</td><td>4H05X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YJG7C">YJG7C</a></td><td>1.3.1</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>NA</td><td>Micron</td><td>7450</td><td>MTFDKBAXXXTFR</td><td>PH7J6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>960GB</td><td>Boot</td></tr>
</table>
<br>
{{< /rawhtml >}}

### NVMe 2.5" Cache or Capacity
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CD8P</td><td>KCD8XPJE1T60</td><td>R64H4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=34VN7">34VN7</a></td><td>2.0.5</td><td>1.6TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Hynix</td><td>PE1030</td><td>HFS1T6GFJCX180N</td><td>MXDXH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0930W">0930W</a></td><td>1.1.0</td><td>1.6TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Samsung</td><td>PM1745</td><td>MZ3LO3T2HCLSAD3</td><td>7R3TT</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=694C5">694C5</a></td><td>1.1.0</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XVJE3T20</td><td>6J3Y1</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0822W">0822W</a></td><td>2.0.4</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CD8P</td><td>KCD8XPJE3T20</td><td>GP5GV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=34VN7">34VN7</a></td><td>2.0.5</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Hynix</td><td>PS1030</td><td>HFS3T2GFJCX171N</td><td>734CX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WHGGM">WHGGM</a></td><td>1.1.0</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Hynix</td><td>PE1030</td><td>HFS3T2GFJCX180N</td><td>HCDFH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0930W">0930W</a></td><td>1.1.0</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Hynix</td><td>PS1030</td><td>HFS6T4GFJCX171N</td><td>DH5XD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WHGGM">WHGGM</a></td><td>1.1.0</td><td>6.4TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Samsung</td><td>PM1745</td><td>MZ3LO6T4HBLAAD3</td><td>FNPJC</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=694C5">694C5</a></td><td>1.1.0</td><td>6.4TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XVJE6T40</td><td>V4DNH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0822W">0822W</a></td><td>2.0.4</td><td>6.4TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XVJE1T60</td><td>3WJ8J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>1.6TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XVJE3T20</td><td>GD7TT</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XVJE6T40</td><td>979HD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>6.4TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Samsung</td><td>PM1755</td><td>MZ3L93T2HFJA-00AD3</td><td>W30JJ</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JYF3Y">JYF3Y</a></td><td>1.0.0</td><td>3.2TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Mixed Use</td><td>Samsung</td><td>PM1755</td><td>MZ3L696T4HFLT-00AD3</td><td>WG6RH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JYF3Y">JYF3Y</a></td><td>1.0.0</td><td>6.4TB</td><td>Cache, Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### NVMe 2.5" Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CD8P</td><td>KCD8XPJE1T92</td><td>59Y5J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=34VN7">34VN7</a></td><td>2.0.5</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Hynix</td><td>PE1010</td><td>HFS1T9GFJCX180N</td><td>9CC5X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0930W">0930W</a></td><td>1.1.0</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZ3LO3T8HCLSAD3</td><td>831H5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8K2NH">8K2NH</a></td><td>1.1.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM7</td><td>KCM7XRJE3T84</td><td>YGK8R</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0822W">0822W</a></td><td>2.0.4</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS3T8GFJCX171N</td><td>84M8H</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WHGGM">WHGGM</a></td><td>1.1.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CD8P</td><td>KCD8XPJE3T84</td><td>6RC59</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=34VN7">34VN7</a></td><td>2.0.5</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Hynix</td><td>PE1010</td><td>HFS3T8GFJCX180N</td><td>1NFG2</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0930W">0930W</a></td><td>1.1.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZ3LO7T6HBLAAD3</td><td>NKGTX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8K2NH">8K2NH</a></td><td>1.1.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM7</td><td>KCM7XRJE7T68</td><td>G27W5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0822W">0822W</a></td><td>2.0.4</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS7T6GFJCX171N</td><td>DDKCG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WHGGM">WHGGM</a></td><td>1.1.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZ3LO15THBLAAD3</td><td>RRYKC</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8K2NH">8K2NH</a></td><td>1.1.0</td><td>15.36TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM7</td><td>KCM7XRJE15T3</td><td>YRN98</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0822W">0822W</a></td><td>2.0.4</td><td>15.36TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS15T3FJCX171N</td><td>HK6WK</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WHGGM">WHGGM</a></td><td>1.1.0</td><td>15.36TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XRJE1T92</td><td>W7Y1X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XRJE3T84</td><td>NR5RF</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XRJE7T68</td><td>7P31X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Kioxia</td><td>CM9 DP</td><td>KCM9XRJE15T3</td><td>3HTR9</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HJ15N">HJ15N</a></td><td>1.0.0</td><td>15.36TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1753</td><td>MZ3L93T8HFJA-00AD3</td><td>DRH2Y</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JYF3Y">JYF3Y</a></td><td>1.0.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1753</td><td>MZ3L97T6HFLT-00AD3</td><td>6G50R</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JYF3Y">JYF3Y</a></td><td>1.0.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>E3.s</td><td>Read Intensive</td><td>Samsung</td><td>PM1753</td><td>MZ3L915THBLC-00AD3</td><td>JVVWW</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JYF3Y">JYF3Y</a></td><td>1.0.0</td><td>15.36TB</td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}

