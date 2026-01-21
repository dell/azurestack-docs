---
title: "Azure Local Support Matrix for 16G (Dell 2512)"
linkTitle: "16G"
weight: 7488
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

{{% alert title="NOTE" color="primary" %}}
SBE package 4.2.2512.xxxx and newer will only support Azure Local solution versions 12.\*.1001.\* or 12.\*.1002.\* (HCI OS 24H2) and newer.

Dell will support the use of SBE package 4.2.2509.xxxx on Azure Local instances running version 11.* (HCI OS 23H2) until April 2026. Dell recommends that instances running version 11.* be upgraded to 12.* as soon as possible to remain in a supported state.
{{% /alert %}}

### Supported Platforms
{{< rawhtml >}}
<table>
<colgroup><col/><col/></colgroup>
<tr><th>Model</th><th>Supported Operating System</th></tr>
<tr><td>AX-760</td><td>Windows Server 2022 Datacenter<br>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>AX-660</td><td>Windows Server 2025 Datacenter<br>Azure Stack HCI-24H2</td></tr>
<tr><td>MC-660</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Base Components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Type</th><th>Software Bundle</th><th>Minimum Supported Version</th><th>Supported Platforms</th><th>Supported OS</th></tr>
<tr><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GPMNW">GPMNW</a></td><td rowspan="1">2.8.2</td><td rowspan="2">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td><td rowspan="2">NA</td></tr>
<td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=W23G7">W23G7</a></td><td rowspan="1">2.7.5</td></tr>
<tr><td>Chipset driver for 16G Intel platforms</td><td>Driver DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R40PW">R40PW</a></td><td>10.1.19928.8615</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td><td>Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
<tr><td>iDRAC9 with Lifecycle Controller</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=KYWDC">KYWDC</a></td><td>7.20.80.50</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td><td>NA</td></tr>
<tr><td>Expander Storage Backplane</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=J9JW2">J9JW2</a></td><td>1.61</td><td>AX-760<br><br>MC-760</td><td>NA</td></tr>
<tr><td>NVMe Switch Storage Backplane</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R39FM">R39FM</a></td><td>3.33</td><td>AX-760<br><br>MC-760</td><td>NA</td></tr>
<tr><td>Non-expander Storage Backplane</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=58MWX">58MWX</a></td><td>7.2</td><td>AX-760<br><br>MC-760</td><td>NA</td></tr>
<tr><td>Non-expander Storage Backplane</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9T7YG">9T7YG</a></td><td>7.2</td><td>AX-660<br><br>MC-660</td><td>NA</td></tr>
<tr><td>iDRAC Service Module</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=258RC">258RC</a></td><td>5.4.0.0</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td><td>NA</td></tr>
<tr><td>CPLD</td><td>Firmware DUP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XJG0V">XJG0V</a></td><td>1.2.7</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td><td>NA</td></tr>
</table>
<br>
{{< /rawhtml >}}

### Network Adapters
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Part Number</th><th>SDDC Advanced Qualification</th><th>RDMA Protocol</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Driver Software Bundle</th><th>Driver Minimum Supported Version</th><th>Supported OS</th><th>Supported Platforms</th></tr>
<tr><td>Broadcom 5720 Dual Port 1 GbE Network LOM Mezz Card</td><td>5NN70</td><td rowspan="1">Management</td><td rowspan="1">N/A</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V215">5V215</a></td><td rowspan="1">23.31.1</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JDV91">JDV91</a></td><td rowspan="1">233.1.181.0</td><td rowspan="1">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td></tr>
<tr><td>Broadcom 57504 Quad Port 10/25GbE, SFP28 Adapter</td><td>3Y64D</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HVN2R">HVN2R</a></td><td rowspan="2">23.31.18.10</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T5K6M">T5K6M</a></td><td rowspan="2">233.1.181.0</td><td rowspan="2">Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td></tr>
<tr><td>Broadcom 57504 Quad Port 10/25GbE SFP28 Adapter, PCIe FH</td><td>J3D14</td>
<tr><td>Intel E810-XXV Dual Port 25GbE SFP28 Adapter, PCIe LP</td><td>6J1N1</td><td rowspan="7">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="7">iWARP,RoCEv2</td><td rowspan="7"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N11TD">N11TD</a></td><td rowspan="7">24.0.5</td><td rowspan="7"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PH5GK">PH5GK</a></td><td rowspan="7">24.0.0</td><td rowspan="7">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="7">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td></tr>
<tr><td>Intel E810-CQDA2 Dual Port 100GbE QSFP28 Adapter, PCIe FH</td><td>85F8F</td>
<tr><td>Intel E810-XXV Dual Port 25GbE SFP28 Adapter, PCIe FH</td><td>CD16M</td>
<tr><td>Intel E810-CQDA2 Dual Port 100GbE QSFP28 Adapter, PCIe LP</td><td>DWNRF</td>
<tr><td>Intel E810-XXVDA2 Dual Port 1/10/25GbE SFP28 Adapter</td><td>PWH3C</td>
<tr><td>Intel E810-XXVDA4 Quad Port 1/10/25GbE SFP28 Adapter, PCIe FH</td><td>VK88G</td>
<tr><td>Intel E810-XXVDA4 Quad Port 1/10/25GbE SFP28 Adapter</td><td>Y4VV5</td>
<tr><td>Mellanox ConnectX-6 Dx Dual Port 100GbE QSFP56 PCIe Adapter, FH</td><td>8P2T2</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=2CMVW">2CMVW</a></td><td rowspan="2">22.41.10.00</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G6M58">G6M58</a></td><td rowspan="2">24.4.26429</td><td rowspan="2">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td></tr>
<tr><td>Mellanox ConnectX-6 Dx Dual Port 100GbE QSFP56 PCIe Adapter, LP</td><td>F6FXM</td>
<tr><td>Nvidia ConnectX-6 Lx Dual Port 10/25GbE SFP28 Adapter, PCIe LP</td><td>6XJXK</td><td rowspan="2">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="2">RoCEv2</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=1H4PM">1H4PM</a></td><td rowspan="2">26.41.10.00</td><td rowspan="2"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G6M58">G6M58</a></td><td rowspan="2">24.4.26429</td><td rowspan="2">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="2">AX-660<br><br>AX-760<br><br>MC-660<br><br>MC-760</td></tr>
<tr><td>Nvidia ConnectX-6 Lx Dual Port 10/25GbE SFP28 Adapter</td><td>DN78C</td>
<tr><td>Nvidia ConnectX-6 Lx Dual Port 10/25GbE SFP28 Adapter, PCIe FH</td><td>R5WK9</td><td rowspan="1">Management<br><br>Compute (Premium)<br><br>Storage (Premium)</td><td rowspan="1">RoCEv2</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=1H4PM">1H4PM</a></td><td rowspan="1">26.41.10.00</td><td rowspan="1"><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G6M58">G6M58</a></td><td rowspan="1">24.4.26429</td><td rowspan="1">Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td><td rowspan="1">AX-760<br><br>MC-760</td></tr>
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
<tr><td>A16</td><td>NVIDIA</td><td>NVIDIA Ampere A16, PCIe, 250W, 64GB Passive, Double Wide, Full Height GPU,V2</td><td>D1P1T</td><td>94.07.54.00.45</td><td>553.62</td><td>Yes</td><td>AX-760<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>A2</td><td>NVIDIA</td><td>NVIDIA Ampere A2, PCIe, 60W, 16GB Passive, Single Wide, Low Profile GPU, V2</td><td>H98K0</td><td>94.07.5B.00.55</td><td>553.62</td><td>Yes</td><td>AX-660<br>AX-760<br>MC-660<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>A2</td><td>NVIDIA</td><td>NVIDIA Ampere A2, PCIe, 60W, 16GB Passive, Single Wide, Full Height GPU, V2</td><td>MG5JX</td><td>94.07.5B.00.55</td><td>553.62</td><td>Yes</td><td>AX-660<br>AX-760<br>MC-660<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>A40</td><td>NVIDIA</td><td>NVIDIA Ampere A40, PCIe, 300W, 48GB Passive, Double Wide, Full Height GPU</td><td>W6GX6</td><td>94.02.5C.00.0F</td><td>553.62</td><td>Yes</td><td>AX-760<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>L4</td><td>NVIDIA</td><td>NVIDIA L4, PCIe, 72W, 24GB Passive, Single Wide Full Height GPU</td><td>NG3PY</td><td>95.04.29.00.06</td><td>553.62</td><td>Yes</td><td>AX-660<br>AX-760<br>MC-660<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>L4</td><td>NVIDIA</td><td>NVIDIA L4, PCIe, 72W, 24GB Passive, Single Wide Low Profile GPU</td><td>V9XT2</td><td>95.04.29.00.06</td><td>553.62</td><td>Yes</td><td>AX-660<br>AX-760<br>MC-660<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>L40</td><td>NVIDIA</td><td>NVIDIA Ampere L40, PCIe, 300W, 48GB Passive, Double Wide, Full Height, Full Length, GPU with cable</td><td>VHNWT</td><td>95.02.39.00.01</td><td>553.62</td><td>Yes</td><td>AX-760<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
<tr><td>L40S</td><td>NVIDIA</td><td>NVIDIA Ampere L40S, PCIe, 350W, 48GB Passive, Double Wide, Full Height, Full Length, GPU with cable</td><td>7WK28</td><td>95.02.66.00.02</td><td>553.62</td><td>Yes</td><td>AX-760<br>MC-760</td><td>Azure Stack HCI-24H2</td></tr>
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
<tr><td>BOSS-N1</td><td>WW56V</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C6MVR">C6MVR</a></td><td>2.1.13.2037</td><td>Inbox</td><td>Inbox</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC760</td><td>Windows Server 2022 Datacenter<br><br>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
<tr><td>HBA355i</td><td>K6MCJ</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=CG0P9">CG0P9</a></td><td>33.15.00.00</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HDH8G">HDH8G</a></td><td>2.61.74.00</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC760</td><td>Windows Server 2025 Datacenter<br><br>Azure Stack HCI-24H2</td></tr>
<tr><td>HBA355i</td><td>K6MCJ</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=CG0P9">CG0P9</a></td><td>33.15.00.00</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R31NP">R31NP</a></td><td>2.61.74.00</td><td>AX-660<br><br>AX-760<br><br>MC-660<br><br>MC760</td><td>Windows Server 2022 Datacenter</td></tr>
</table>
<br>
{{< /rawhtml >}}


### SATA M.2 SSD Boot Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7400</td><td>MTFDKBA960TDZ</td><td>PRV6C</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N71F4">N71F4</a></td><td>1.6.0</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7400</td><td>MTFDKBG960TDZ</td><td>0V8F7</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N71F4">N71F4</a></td><td>1.6.0</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE8010</td><td>HFS960GDC8X099N</td><td>21GXV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R2TTT">R2TTT</a></td><td>1.3.0</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE9010</td><td>HFS960GEJ8X167N</td><td>4H05X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YJG7C">YJG7C</a></td><td>1.3.1</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKBAXXXTFR</td><td>PH7J6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHKXR">JHKXR</a></td><td>1.4.0</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Hynix</td><td>PE9010</td><td>HFS960GDJ8X167N</td><td>XN5KG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8X8YR">8X8YR</a></td><td>1.2.1</td><td>960GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZVL6480HFLUAD3</td><td>C82V9</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FTVJG">FTVJG</a></td><td>1.0.1</td><td>480 GB</td><td>Boot</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>M.2</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZVL6960HFLBAD3</td><td>8M3JN</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FTVJG">FTVJG</a></td><td>1.0.1</td><td>960 GB</td><td>Boot</td></tr>
</table>
<br>
{{< /rawhtml >}}

### SAS 3.5" HDD Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>HGST</td><td>Vela-A</td><td>HUS726T4TALS200</td><td>NT1X2</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=J5K8G">J5K8G</a></td><td>PU09</td><td>4 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG10</td><td>MG10SDA400NY</td><td>9VN79</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=99TKP">99TKP</a></td><td>EP02</td><td>4 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>HGST</td><td>Vela-AP</td><td>HUS728T8TAL5200</td><td>44YFV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8GM6M">8GM6M</a></td><td>RS09</td><td>8 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG06</td><td>MG06SCA800EY</td><td>FV725</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=4G5GY">4G5GY</a></td><td>EH0D</td><td>8 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>HGST</td><td>Leo-A He12</td><td>HUH721212AL5200</td><td>9HXK6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=04PM5">04PM5</a></td><td>NS11</td><td>12 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>WD</td><td>Paris-C</td><td>WUH721816AL5200</td><td>VF206</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GY6MD">GY6MD</a></td><td>US09</td><td>16 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Cimarron BP</td><td>ST4000NM019B</td><td>10N7R</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3P5N0">3P5N0</a></td><td>LW0B</td><td>4 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Cimarron BP</td><td>ST8000NM024B</td><td>C5HD0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NM6GP">NM6GP</a></td><td>LS0C</td><td>8 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG08SD</td><td>MG08SDA400NY</td><td>FN2YX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GTG81">GTG81</a></td><td>EK06</td><td>4 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Evans BP</td><td>ST12000NM006J</td><td>M1C0T</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XF65R">XF65R</a></td><td>PSLG</td><td>12 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Evans BP</td><td>ST16000NM006J</td><td>41DXR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XF65R">XF65R</a></td><td>PSLG</td><td>16 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba&#160;</td><td>MG08SD</td><td>MG08SDA800EY</td><td>NJWMG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=F95CX">F95CX</a></td><td>EL02</td><td>8 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>Read Intensive</td><td>Seagate</td><td>LongsPeak</td><td>ST20000NM004D</td><td>R3G03</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WCTTD">WCTTD</a></td><td>GS09</td><td>20 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba&#160;</td><td>MG10SD</td><td>MG10SDA800EY</td><td>VJDMM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=99TKP">99TKP</a></td><td>EP02</td><td>8 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>CimarronBP(EWP)</td><td>DL4000NM019B</td><td>F7DTR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=M7PKX">M7PKX</a></td><td>LBW4</td><td>4 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG09</td><td>MG09SCA12TEY</td><td>0N96X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=20Y02">20Y02</a></td><td>EM06</td><td>12 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Summit</td><td>ST12000NM007H</td><td>FN7VR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3VY0D">3VY0D</a></td><td>SWS9</td><td>12 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG09</td><td>MG09SCA16TEY</td><td>MXC46</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=20Y02">20Y02</a></td><td>EM06</td><td>16 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Summit</td><td>ST16000NM007H</td><td>R0G8W</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C50CR">C50CR</a></td><td>SYS9</td><td>16 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Toshiba</td><td>MG10</td><td>MG10SCA20TEY</td><td>NT45N</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0H3CX">0H3CX</a></td><td>EN04</td><td>20 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>WD</td><td>Paris-D PR2</td><td>WUH722020BL5200</td><td>1D4CR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XRFX3">XRFX3</a></td><td>VS19</td><td>20 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>Seagate</td><td>Summit</td><td>ST20000NM007H</td><td>R5KP7</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C50CR">C50CR</a></td><td>SYS9</td><td>20 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>WD</td><td>London DP</td><td>WUH722420AL5200</td><td>MTTCF</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FN2N1">FN2N1</a></td><td>YS01</td><td>20 TB</td><td>Capacity</td></tr>
<tr><td>HDD</td><td>SAS</td><td>3.5</td><td>NA</td><td>WD</td><td>Paris-CP</td><td>WUH722012CL5200</td><td>849H4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VK0PK">VK0PK</a></td><td>AS05</td><td>12 TB</td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### SATA 2.5" SSD Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Intel</td><td>S4520</td><td>SSDSC2KB019TZR</td><td>6J65H</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VJPKG">VJPKG</a></td><td>DL7C</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>SK Hynix</td><td>SE5110</td><td>HFS1T9G3H2X069N</td><td>962FP</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7XTPF">7XTPF</a></td><td>DZ03</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM883a</td><td>MZ7LH1T9HALT0D3</td><td>9F9Y6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3GHD6">3GHD6</a></td><td>HG61</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM893</td><td>MZ7L31T9HBLTAD3</td><td>0KYP4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T3HX9">T3HX9</a></td><td>HJ64</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM893a</td><td>MZ7L31T9HELAAD3</td><td>PTD53</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=D5D3W">D5D3W</a></td><td>HL58</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>5300</td><td>MTFDDAK1T9TDS</td><td>GYGVV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=KT63Y">KT63Y</a></td><td>J008</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>5400</td><td>MTFDDAK1T9TGA-1BC1ZABDA</td><td>KXNX5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RJ0WY">RJ0WY</a></td><td>K003</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Intel</td><td>S4520</td><td>SSDSC2KB038TZR</td><td>KM4C4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VJPKG">VJPKG</a></td><td>DL7C</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>SK Hynix</td><td>SE5110</td><td>HFS3T8G3H2X069N</td><td>3GDK0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7XTPF">7XTPF</a></td><td>DZ03</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM883a</td><td>MZ7LH3T8HALT0D3</td><td>5TVXD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3GHD6">3GHD6</a></td><td>HG61</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM893</td><td>MZ7L33T8HBLTAD3</td><td>GCN5W</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T3HX9">T3HX9</a></td><td>HJ64</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM893a</td><td>MZ7L33T8HELAAD3</td><td>D7V89</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=D5D3W">D5D3W</a></td><td>HL58</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>5300</td><td>MTFDDAK3T8TDT</td><td>4H1RX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R9YDC">R9YDC</a></td><td>J408</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>5400</td><td>MTFDDAK3T8TGA-1BC1ZABDA</td><td>CHF46</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JTW3W">JTW3W</a></td><td>K403</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>Intel</td><td>S4620</td><td>SSDSC2KG019TZR</td><td>6XW3M</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VJPKG">VJPKG</a></td><td>DL7C</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>SK Hynix</td><td>SE5130</td><td>HFS1T9G3E2X149N</td><td>HCR09</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=4T2FN">4T2FN</a></td><td>DG00</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>SK Hynix</td><td>SE5031</td><td>HFS1T9G32FEH-BA10A</td><td>GKTF1</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=2CY65">2CY65</a></td><td>DD02</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM897a</td><td>MZ7L31T9HENAAD3</td><td>GR4WN</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V5XNY">V5XNY</a></td><td>HK58</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM897</td><td>MZ7L31T9HBNAAD3</td><td>RRR7M</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=VRG4Y">VRG4Y</a></td><td>HH64</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>Micron</td><td>5300</td><td>MTFDDAK1T9TDT</td><td>MMCDY</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=KT63Y">KT63Y</a></td><td>J008</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SATA</td><td>2.5</td><td>Mixed Use</td><td>Micron</td><td>5400</td><td>MTFDDAK1T9TGB-1BC1ZABDA</td><td>XRXX2</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RJ0WY">RJ0WY</a></td><td>K003</td><td>1.92TB</td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### SAS 2.5" SSD Cache or Capacity
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1655</td><td>MZILG800HCHQAD3</td><td>3CHC8</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7MTXM">7MTXM</a></td><td>DWG9</td><td>800 GB</td><td>Cache,Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1655</td><td>MZILG1T6HCJRAD3</td><td>5RJND</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7MTXM">7MTXM</a></td><td>DWG9</td><td>1.6 TB</td><td>Cache,Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>PM7</td><td>KPM7XVUG1T60</td><td>4TRHM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T21WT">T21WT</a></td><td>C10E</td><td>1.6 TB</td><td>Cache,Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>PM6</td><td>KPM6XVUG800G</td><td>NNGV4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NGPR2">NGPR2</a></td><td>BA48</td><td>800 GB</td><td>Cache,Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>PM7</td><td>KPM7XVUG800G</td><td>X96H8</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T21WT">T21WT</a></td><td>C10E</td><td>800 GB</td><td>Cache,Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### SAS 2.5" SSD Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1653</td><td>MZILG1T9HCJRAD3</td><td>NRR34</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3MV58">3MV58</a></td><td>DSG9</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1653</td><td>MZILG3T8HCLSAD3</td><td>9N32F</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3MV58">3MV58</a></td><td>DSG9</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1653</td><td>MZILG7T6HBLAAD3</td><td>Y8H7M</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3MV58">3MV58</a></td><td>DSG9</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>PM7</td><td>KPM7XRUG1T92</td><td>6K35K</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T21WT">T21WT</a></td><td>C10E</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>PM7</td><td>KPM7XRUG3T84</td><td>MT0R5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T21WT">T21WT</a></td><td>C10E</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>SSD</td><td>SAS</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>PM7</td><td>KPM7XRUG7T68</td><td>7N1WT</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T21WT">T21WT</a></td><td>C10E</td><td>7.68 TB</td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### NVMe 2.5" Cache or Capacity
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735 SP 3WPD, SSD, NVMe, 2.5, 512e, ISE </td><td>MZWLJ1T6HBJRAD3</td><td>6GK00</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5CM3G">5CM3G</a></td><td>2.5.0</td><td>1.6 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735 SP 3WPD, SSD, Gen4 NVMe, 2.5, 512e, ISE</td><td>MZWLJ3T2HBJRAD3</td><td>15TVC</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5CM3G">5CM3G</a></td><td>2.5.0</td><td>3.2TB</td><td>Cache,Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735 SP 3WPD, SSD, Gen4 NVMe, 2.5, 512e, ISE</td><td>MZWLJ6T4HALAAD3</td><td>F6V5P</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5CM3G">5CM3G</a></td><td>2.5.0</td><td>6.4TB</td><td>Cache,Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM6 SP</td><td>KCM6XVUL1T60</td><td>P03YC</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>1.6 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM6 SP</td><td>KCM6XVUL3T20</td><td>97GR0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>3.2 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM6 SP</td><td>KCM6XVUL6T40</td><td>K916X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>6.4 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735 V2 SP 3WPD</td><td>MZWLR3T2HBLSAD3</td><td>V69W3</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V3P7">5V3P7</a></td><td>2.5.0</td><td>3.2 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735 V2 SP 3WPD</td><td>MZWLR6T4HALAAD3</td><td>H8D5M</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V3P7">5V3P7</a></td><td>2.5.0</td><td>6.4 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735a</td><td>MZWLR1T6HCJRAD3</td><td>H8GHV</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>1.6 TB</td><td>Cache,Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735a</td><td>MZWLR3T2HCLSAD3</td><td>617H6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>3.2 TB</td><td>Cache,Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1735a</td><td>MZWLR6T4HBLAAD3</td><td>9F6Y3</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>6.4 TB</td><td>Cache,Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XVUG1T60</td><td>MP4F2</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>1.6 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XVUG3T20</td><td>XFNX0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>3.2 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XVUG6T40</td><td>8RJJ9</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>6.4 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Hynix</td><td>PS1030</td><td>HFS1T6GEJVX171N</td><td>1HYKD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>1.6 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Hynix</td><td>PS1030</td><td>HFS3T2GEJVX171N</td><td>9VWPD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>3.2 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Hynix</td><td>PS1030</td><td>HFS6T4GEJVX171N</td><td>PYMY6</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>6.4 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1745</td><td>MZWLO1T6HCJR-00AD3</td><td>FVC2P</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>1.6 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1745</td><td>MZWLO3T2HCLS-00AD3</td><td>FDNHD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>3.2 TB</td><td>Cache, Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Samsung</td><td>PM1745</td><td>MZWLO6T4HBLA-00AD3</td><td>64K9C</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>6.4 TB</td><td>Cache, Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

### NVMe 2.5" Capacity Only
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Type</th><th>Drive Type</th><th>Form Factor</th><th>Endurance</th><th>Vendor</th><th>Series</th><th>Model</th><th>Device Part Number (P/N)</th><th>Firmware Software Bundle</th><th>Firmware Minimum Supported Version</th><th>Capacity</th><th>Use</th></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733 V2</td><td>MZWLR3T8HBLSAD3</td><td>G5N65</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V3P7">5V3P7</a></td><td>2.5.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733 V2</td><td>MZWLR7T6HALAAD3</td><td>DX74Y</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V3P7">5V3P7</a></td><td>2.5.0</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733a</td><td>MZWLR1T9HCJRAD3</td><td>8PMRM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733a</td><td>MZWLR3T8HCLSAD3</td><td>RJKM5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733a</td><td>MZWLR7T6HBLAAD3</td><td>R1J8J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733a</td><td>MZWLR15THBLAAD3</td><td>D4CJG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>15.36 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CM6</td><td>KCM6XRUL1T92</td><td>N0VK0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CM6</td><td>KCM6XRUL3T84</td><td>8W2G5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CM6</td><td>KCM6XRUL7T68</td><td>VD0JX</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CM6</td><td>KCM6XRUL15T3</td><td>J91CR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GMM6V">GMM6V</a></td><td>2.2.2</td><td>15.36 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XRUG1T92</td><td>M8YW0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XRUG3T84</td><td>XHYGF</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XRUG7T68</td><td>VV2M7</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Mixed Use</td><td>Kioxia</td><td>CM7</td><td>KCM7XRUG15T3</td><td>DX2PD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K1JTM">K1JTM</a></td><td>2.0.3</td><td>15.36 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD7</td><td>KCD7XRUG7T68</td><td>0RD61</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K6597">K6597</a></td><td>2.0.1</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD8</td><td>KCD8XRUG3T84</td><td>N1MK1</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HV8P1">HV8P1</a></td><td>2.0.1</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS1T9GEJVX171N</td><td>7GGK1</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS3T8GEJVX171N</td><td>J4TDK</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS7T6GEJVX171N</td><td>2533N</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PS1010</td><td>HFS15T3EJVX171N</td><td>8TY8G</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9M65G">9M65G</a></td><td>1.2.0</td><td>15.36 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PE8010</td><td>HFS960GECTX088N</td><td>WR2FG</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T1XKD">T1XKD</a></td><td>1.3.0</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PE8110</td><td>HFS7T6GEETX099N</td><td>RG3T2</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TDGKY">TDGKY</a></td><td>1.1.0</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD8</td><td>KCD8XRUG960G</td><td>YNGYD</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HV8P1">HV8P1</a></td><td>2.0.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKCC960TFR</td><td>KXT48</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TVCWT">TVCWT</a></td><td>1.4.0</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7500</td><td>MTFDKCC960TGP</td><td>G7NCH</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F07C">5F07C</a></td><td>1.2.0</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9A3</td><td>MZQL2960HCJRAD3</td><td>6HYWM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMFKX">XMFKX</a></td><td>1.1.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733a</td><td>MZWLR1T9HCJRAD3</td><td>8PMRM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=71KRG">71KRG</a></td><td>1.2.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1733 V2</td><td>MZWLR1T9HBJRAD3</td><td>WPR17</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5V3P7">5V3P7</a></td><td>2.5.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9A3</td><td>MZQL21T9H</td><td>TGYF5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMFKX">XMFKX</a></td><td>1.1.1</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKCC1T9TFR</td><td>JH61J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TVCWT">TVCWT</a></td><td>1.4.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7500</td><td>MTFDKCC1T9TGP</td><td>M7RHM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F07C">5F07C</a></td><td>1.2.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PE8110</td><td>HFS1T9GEETX099N</td><td>147DR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TDGKY">TDGKY</a></td><td>1.1.0</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKCC3T8TFR</td><td>NDK2D</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TVCWT">TVCWT</a></td><td>1.4.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD7</td><td>KCD7XRUG3T84</td><td>RFYP9</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K6597">K6597</a></td><td>2.0.1</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Hynix</td><td>PE8010</td><td>HFS3T8GECTX088N</td><td>V6WP5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=T1XKD">T1XKD</a></td><td>1.3.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9A3</td><td>MZQL23T8HCLSAD3</td><td>P7G03</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMFKX">XMFKX</a></td><td>1.1.1</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7500</td><td>MTFDKCC3T8TGP</td><td>GT3F3</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F07C">5F07C</a></td><td>1.2.0</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Intel</td><td>Arbordale Plus R P5316</td><td>SSDPF2NV307TZ</td><td>4KCVT</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=4XT8T">4XT8T</a></td><td>1.6.0</td><td>30.72 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZWLO3T8HCLS-00AD3</td><td>9GXVF</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0 </td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZWLO7T6HBLA-00AD3</td><td>DNPR4</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>7.68 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD8</td><td>KCD8XRUG1T92</td><td>NNKCT</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HV8P1">HV8P1</a></td><td>2.0.1</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9A3</td><td>MZQL27T6HBLAAD3</td><td>30FX3</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XMFKX">XMFKX</a></td><td>1.1.1</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7450</td><td>MTFDKCC7T6TFR</td><td>91KYJ</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TVCWT">TVCWT</a></td><td>1.4.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Micron</td><td>7500</td><td>MTFDKCC7T6TGP</td><td>RTJFW</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F07C">5F07C</a></td><td>1.2.0</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Kioxia</td><td>CD8</td><td>KCD8XRUG7T68</td><td>MXD8J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HV8P1">HV8P1</a></td><td>2.0.1</td><td>7.68TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>SK Hynix</td><td>PE8110</td><td>HFS960GEETX099N</td><td>26WJ0</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TDGKY">TDGKY</a></td><td>1.1.0</td><td>960GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZWLO1T9HCJR-00AD3</td><td>G64N5</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>1.92TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>SK Hynix</td><td>PE8110</td><td>HFS3T8GEETX099N</td><td>2V97V</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=TDGKY">TDGKY</a></td><td>1.1.0</td><td>3.84TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM1743</td><td>MZWLO15THBLA-00AD3</td><td>VPWMR</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V7V0K">V7V0K</a></td><td>1.0.0</td><td>15.36TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZWL6960HFJA-00AD3</td><td>71Y2J</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X5N7N">X5N7N</a></td><td>1.0.1</td><td>960 GB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZVL61T9HBL1-00AD3</td><td>NYPRM</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FTVJG">FTVJG</a></td><td>1.0.1</td><td>1.92 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZWL63T8HFLT-00AD3</td><td>2H60T</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X5N7N">X5N7N</a></td><td>1.0.1</td><td>3.84 TB</td><td>Capacity</td></tr>
<tr><td>NVMe</td><td>PCIe</td><td>2.5</td><td>Read Intensive</td><td>Samsung</td><td>PM9D3a</td><td>MZWL67T6HBLC-00AD3</td><td>VYT6X</td><td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X5N7N">X5N7N</a></td><td>1.0.1</td><td>7.68 TB</td><td>Capacity</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}

