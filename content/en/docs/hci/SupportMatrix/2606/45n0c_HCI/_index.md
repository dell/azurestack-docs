---
title: "Azure Local Support Matrix for 45n0c (Dell 2606)"
linkTitle: "45n0c"
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
<tr><td>AX-4510c</td><td>Windows Server 2022 Datacenter<br>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>AX-4520c</td><td>Windows Server 2022 Datacenter<br>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>APEX MC-4510c</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>APEX MC-4520c</td><td>Azure Stack HCI-24H2</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Base Components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Type</th><th>Software Bundle</th><th>Minimum Supported Version</th><th>Supported Platforms</th><th>Supported OS</th></tr>
<tr><td>BIOS</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DV9VR">DV9VR</a></td><td>1.23.1</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>NA</td></tr>
<tr><td>iDRAC9 with Lifecycle Controller</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=924YT">924YT</a></td><td>7.30.10.50</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>NA</td></tr>
<tr><td>Chipset driver for 15G Intel platforms</td><td>Driver DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C2MC3">C2MC3</a></td><td>10.1.19928.8615</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
<tr><td>iDRAC Service Module</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=238XW">238XW</a></td><td>6.1.0.0</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>NA</td></tr>
<tr><td>Chassis Manager</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WC84H">WC84H</a></td><td>5</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>NA</td></tr>
<tr><td>CPLD</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G1YRC">G1YRC</a></td><td>1.0.5</td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>NA</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Network Adapters
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Part Number</th><th>SDDC Advanced Qualification</th><th>RDMA Protocol</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Driver Software Bundle</th><th>Driver Minimum Supported Version</th><th>Supported OS</th><th>Supported Platforms</th></tr>
<tr><td>Broadcom 57504 Quad Port 10/25GbE SFP28 Adapter, PCIe FH</td><td>J3D14</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=2MY7D">2MY7D</a></td><td rowspan="1">36.11.73.00</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=78X9T">78X9T</a></td><td rowspan="1">36.11.52.00</td><td rowspan="1">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-4520c<br><br>APEX MC-4520c</td></tr>
<tr><td>Intel E823</td><td>KJMHJ</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">iWARP,RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FCG2V">FCG2V</a></td><td rowspan="1">25.0.4</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3VT4C">3VT4C</a></td><td rowspan="1">25.0.4</td><td rowspan="1">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td></tr>
<tr><td>Intel E810-CQDA2 Dual Port 100GbE QSFP28 Adapter, PCIe FH</td><td>85F8F</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">iWARP,RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FCG2V">FCG2V</a></td><td rowspan="2">25.0.4</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3VT4C">3VT4C</a></td><td rowspan="2">25.0.4</td><td rowspan="2">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-4520c<br><br>APEX MC-4520c</td></tr>
<tr><td>Intel E810-XXV Dual Port 25GbE SFP28 Adapter, PCIe FH</td><td>CD16M</td>
<tr><td>Mellanox ConnectX-6 Dx Dual Port 100GbE QSFP56 PCIe Adapter, FH</td><td>8P2T2</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=81T4K">81T4K</a></td><td rowspan="1">22.48.10.00</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="1">26.001.03</td><td rowspan="1">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-4520c<br><br>APEX MC-4520c</td></tr>
<tr><td>Nvidia ConnectX-6 Lx Dual Port 10/25GbE SFP28 Adapter, PCIe FH</td><td>R5WK9</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NMDJG">NMDJG</a></td><td rowspan="1">26.48.10.00</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK">3T3MK</a></td><td rowspan="1">26.001.03</td><td rowspan="1">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-4520c<br><br>APEX MC-4520c</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Network Switches
{{% alert title="NOTE" color="primary" %}}
A list of supported Network Switch models along with the supported firmware versions can be found here, [Physical network requirements for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/concepts/physical-network-requirements?#network-switches-for-azure-local).
{{% /alert %}}

### GPUs
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>GPU Model</th><th>Vendor</th><th>Description</th><th>Part Number</th><th>Firmware version</th><th>Driver Version</th><th>GPU-P capable</th><th>Supported Platform</th><th>Supported OS</th></tr>
<tr><td>A2</td><td>NVIDIA</td><td>NVIDIA Ampere A2, PCIe, 60W, 16GB Passive, Single Wide, Full Height GPU, V2</td><td>MG5JX</td><td>94.07.5B.00.55</td><td>528.89 WHQL</td><td>Yes</td><td>AX-4520c<br>APEX MC-4520c</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>L4</td><td>NVIDIA</td><td>NVIDIA L4, PCIe, 72W, 24GB Passive, Single Wide Full Height GPU</td><td>NG3PY</td><td>95.04.29.00.06</td><td>528.89 WHQL</td><td>Yes</td><td>AX-4520c<br>APEX MC-4520c</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
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
<tr><td>BOSS-N1</td><td>M88HH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YVYW4">YVYW4</a></td><td>2.1.13.2038</td><td>Inbox</td><td></td><td>AX-4510c<br><br>AX-4520c<br><br>APEX MC-4510c<br><br>APEX MC-4520c</td><td>Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
</table>
<br>
{{< /rawhtml >}}


### NVMe 2.5" Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7400</td><td>MTFDKBG1T9TDZ</td><td>G18YX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N71F4">N71F4</a></td><td>1.6.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7400</td><td>MTFDKBG3T8TDZ</td><td>2RN2N</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N71F4">N71F4</a></td><td>1.6.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE8010</td><td>HFS960GDC8X099N</td><td>21GXV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R2TTT">R2TTT</a></td><td>1.3.0</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Mixed Use</td><td>Hynix</td><td>PE8030</td><td>HFS800GDC8X088N</td><td>31XDY</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R2TTT">R2TTT</a></td><td>1.3.0</td><td>800 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Mixed Use</td><td>Micron</td><td>7450</td><td>MTFDKBA800TFS</td><td>F9MKX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>800 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Mixed Use</td><td>Hynix</td><td>PE9030</td><td>HFS800GDJ8X167N</td><td>FYWN9</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9GH86">9GH86</a></td><td>1.2.1</td><td>800 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE9010</td><td>HFS960GDJ8X167N</td><td>XN5KG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8X8YR">8X8YR</a></td><td>1.2.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE9010</td><td>HFS960GEJ8X167N</td><td>4H05X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YJG7C">YJG7C</a></td><td>1.3.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKBA960TFR</td><td>PH7J6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKBG1T9TFR</td><td>J927V</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>1.92 TB </td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE8110 </td><td>HFS1T9GDE0X088N</td><td>MY5M4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=19H08">19H08</a></td><td>1.1.0</td><td>1.92 TB </td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKBG3T8TFR</td><td>5FP33</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix </td><td>PE8110 </td><td>HFS3T8GDE0X088N</td><td>5JR5H</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=19H08">19H08</a></td><td>1.1.0 </td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZVL6960HFLBAD3</td><td>8M3JN</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FTVJG">FTVJG</a></td><td>1.0.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZVL61T9HBL1AD3</td><td>NYPRM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FTVJG">FTVJG</a></td><td>1.0.1</td><td>1.92 TB </td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}

