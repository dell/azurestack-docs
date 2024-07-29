---
title: "Azure Stack HCI Firmware and Driver Matrix for Legacy Windows Server Operating Systems (Windows Server 2016)"
linkTitle: "Windows Server 2016"
weight: 1000
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

{{< rawhtml >}}

<h3>Introduction</h3>
<p>
This matrix is for Windows Server operating systems that have exited Microsoft mainstream support. This Windows Server operating system is no longer being validated by Dell for use with hyperconverged cluster deployments. The table in the below link is a snapshot of the last firmware and driver versions that were validated by Dell engineering for use with this legacy Windows Server version.
</p>
<li><a href="https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2016">Windows Server 2016 - Microsoft Lifecycle | Microsoft Learn</a></li>
<br>
<p>
Customers that are still running this Windows Server version for their hyperconverged cluster deployments are encouraged to perform an in-place upgrade to the Windows Server 2022 operating system per instructions at the following link.
</p>
<li><a href="https://learn.microsoft.com/en-us/windows-server/get-started/perform-in-place-upgrade">Perform a Feature Update of Windows Server | Microsoft Learn</a></li>

{{< /rawhtml >}}

{{% alert title="NOTE" color="primary" %}}
To find a particular driver or firmware download, take the Software Bundle ID and append it to the following URL:
<br>
<https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=>

For example:
<br>
<https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=2R28V>
{{% /alert %}}

### Storage Spaces Direct Ready Nodes and AX nodes Supported Firmware versions

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Component</th>
    <th colspan="1" rowspan="1">Type</th>
    <th colspan="1" rowspan="1">Category</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Supported Systems</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">W77H1</td>
    <td colspan="1" rowspan="1">2.16.1</td>
    <td colspan="1" rowspan="1"> <p>AX-640</p> <p>R640</p> <p>AX-740xd</p> <p>R740xd</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">CKFTD</td>
    <td colspan="1" rowspan="1">2.16.1</td>
    <td colspan="1" rowspan="1">R440</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">VHNTJ</td>
    <td colspan="1" rowspan="1">2.16.1</td>
    <td colspan="1" rowspan="1">R740xd2</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">61GYN</td>
    <td colspan="1" rowspan="1">2.9.3</td>
    <td colspan="1" rowspan="1">AX-6515</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">C45MX</td>
    <td colspan="1" rowspan="1">2.9.3</td>
    <td colspan="1" rowspan="1">AX-7525</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BIOS</td>
    <td colspan="1" rowspan="1">G7K8G</td>
    <td colspan="1" rowspan="1">1.8.2</td>
    <td colspan="1" rowspan="1"> <p>AX-650</p> <p>AX-750</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">iDRAC9 with Lifecycle Controller</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BMC</td>
    <td colspan="1" rowspan="1">KMYV9</td>
    <td colspan="1" rowspan="1">6.10.00.00</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Non-expander Storage Backplane</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">Storage-Backplane</td>
    <td colspan="1" rowspan="1">VV85D</td>
    <td colspan="1" rowspan="1">4.35</td>
    <td colspan="1" rowspan="1"> <p>AX-640</p> <p>AX-740xd</p> <p>R640</p> <p>R740xd</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Non-expander Storage Backplane</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">Storage-Backplane</td>
    <td colspan="1" rowspan="1">6NNVP</td>
    <td colspan="1" rowspan="1">3.72</td>
    <td colspan="1" rowspan="1"><p>AX-7525</p> <p>AX-650</p> <p>AX-750</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe Switch Storage Backplane</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">Storage-Backplane</td>
    <td colspan="1" rowspan="1">5XJWN</td>
    <td colspan="1" rowspan="1">1.05</td>
    <td colspan="1" rowspan="1">AX-750</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Expander Storage Backplane</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">Storage-Backplane</td>
    <td colspan="1" rowspan="1">H9PV3</td>
    <td colspan="1" rowspan="1">1.20</td>
    <td colspan="1" rowspan="1"><p>AX-750</p> <p>AX-7525</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Expander Storage Backplane</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">Storage-Backplane</td>
    <td colspan="1" rowspan="1">60K1J</td>
    <td colspan="1" rowspan="1">2.52</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Intel S3520, M.2, SSD, RI, 240 GB, 480 GB</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BOSS (Boot)</td>
    <td colspan="1" rowspan="1">CHJGV</td>
    <td colspan="1" rowspan="1">DL43</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Micron 5100, M.2, SSD, 240 GB, 480 GB</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BOSS (Boot)</td>
    <td colspan="1" rowspan="1">YM8KY</td>
    <td colspan="1" rowspan="1">E013</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Micron 5300, M.2, SSD, 240 GB, 480 GB</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">BOSS (Boot)</td>
    <td colspan="1" rowspan="1">PWVX5</td>
    <td colspan="1" rowspan="1">J004</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">1GW62</td>
    <td colspan="1" rowspan="1">1.0.10</td>
    <td colspan="1" rowspan="1">R440</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">9N4DH</td>
    <td colspan="1" rowspan="1">1.0.6</td>
    <td colspan="1" rowspan="1"> <p>AX-640</p> <p>R640</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">G65GH</td>
    <td colspan="1" rowspan="1">1.1.4</td>
    <td colspan="1" rowspan="1"> <p>AX-740xd</p> <p>R740xd</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">R13D8</td>
    <td colspan="1" rowspan="1">1.0.4</td>
    <td colspan="1" rowspan="1">R740xd2</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">79XGF</td>
    <td colspan="1" rowspan="1">1.0.7</td>
    <td colspan="1" rowspan="1">AX-6515</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">XTPX5</td>
    <td colspan="1" rowspan="1">1.1.15</td>
    <td colspan="1" rowspan="1">AX-7525</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">Firmware DUP</td>
    <td colspan="1" rowspan="1">CPLD</td>
    <td colspan="1" rowspan="1">N9YTC</td>
    <td colspan="1" rowspan="1">1.0.8</td>
    <td colspan="1" rowspan="1"> <p>AX-650</p> <p>AX-750</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">iDRAC Service Module OS DUP</td>
    <td colspan="1" rowspan="1">Application</td>
    <td colspan="1" rowspan="1">iSM</td>
    <td colspan="1" rowspan="1">XJ9W8</td>
    <td colspan="1" rowspan="1">4.3.0.0</td>
    <td colspan="1" rowspan="1">All</td>
</tr>
</tbody>
</table>
<h6>(1) The "Non-expander Storage Backplane" is applicable only to R640 12-drive and R740xd 18-drive chassis configurations.</h6>
{{< /rawhtml >}}

### Storage Spaces Direct Ready Nodes and AX nodes Firmware and Drivers for Windows Server 2016

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="2">Component</th>
    <th colspan="1" rowspan="2">Category</th>
    <th colspan="1" rowspan="2">Part Number</th>
    <td colspan="2" rowspan="1"> <h4>Firmware</h4> </td>
    <td colspan="2" rowspan="1"> <h4>Drivers</h4> </td>
</tr>
<tr>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1"> <p>Mellanox ConnectX-4 Lx Dual Port 25GbE DA/SFP rNDC</p> <p>Mellanox ConnextX-4 Lx Dual Port 25GbE DA/SFP Network Adapter, LP</p> <p>Mellanox ConnextX-4 Lx Dual Port 25GbE DA/SFP Network Adapter, FH</p> </td>
    <td colspan="1" rowspan="1">Network / RDMA</td>
    <td colspan="1" rowspan="1"> <p>R887V</p> <p>20NJD</p> <p>MRT0D</p> </td>
    <td colspan="1" rowspan="1">YTPJW</td>
    <td colspan="1" rowspan="1">14.31.20.06</td>
    <td colspan="1" rowspan="1">F3Y6R</td>
    <td colspan="1" rowspan="1"> <p>02.80.02 - Installer</p> <p>2.80.25134.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>Mellanox Connectx-5 EX Dual Port 100GbE QSFP20 PCIe Adapter, FH</p> <p>Mellanox Connectx-5 EX Dual Port 100GbE QSFP20 PCIe Adapter, LP</p> <p>Mellanox ConnectX-5 Dual Port 25GbE SFP28 Adapter, FH</p> <p>Mellanox ConnectX-5 Dual Port 25GbE SFP28 Adapter, LP</p> </td>
    <td colspan="1" rowspan="1">Network / RDMA</td>
    <td colspan="1" rowspan="1"> <p>71C1T</p> <p>9FTMY</p> <p>TDNNT</p> <p>V5DG9</p> </td>
    <td colspan="1" rowspan="1">3CJ0V</td>
    <td colspan="1" rowspan="1">16.31.20.06</td>
    <td colspan="1" rowspan="1">F3Y6R</td>
    <td colspan="1" rowspan="1"> <p>02.80.02 - Installer</p> <p>2.80.25134.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1"><p>Mellanox ConnectX-6 Dx Dual Port 100GbE QSFP56 PCIe Adapter, LP</p> <p>Mellanox ConnectX-6 Dx Dual Port 100GbE QSFP56 PCIe Adapter, FH</p></td>
    <td colspan="1" rowspan="1">Network / RDMA</td>
    <td colspan="1" rowspan="1"><p>F6FXM</p> <p>8P2T2</p></td>
    <td colspan="1" rowspan="1">1XPGP</td>
    <td colspan="1" rowspan="1">22.31.20.06</td>
    <td colspan="1" rowspan="1">F3Y6R</td>
    <td colspan="1" rowspan="1"><p>02.80.02 - Installer</p> <p>2.80.25134.0 - Driver</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>Qlogic FastLinQ 41262 Dual Port 25Gbe SFP28, rNDC</p> <p>QLogic FastLinQ 41262 Dual Port 25Gb SFP28 Adapter, LP</p> <p>QLogic FastLinQ 41262 Dual Port 25Gb SFP28 Adapter, FH</p> </td>
    <td colspan="1" rowspan="1">Network / iWARP</td>
    <td colspan="1" rowspan="1"> <p>4KF8J</p> <p>415DX</p> <p>51GRM</p> </td>
    <td colspan="1" rowspan="1">TD0M9</td>
    <td colspan="1" rowspan="1">15.20.16</td>
    <td colspan="1" rowspan="1">RYX52</td>
    <td colspan="1" rowspan="1"> <p>35.20.14 - Installer</p> <p>8.53.1.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>QLogic FastLinQ 41162 Dual Port 10GbE BASE-T & Dual Port 1GbE BASE-T, rNDC</p> </td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">0D1WT</td>
    <td colspan="1" rowspan="1">TD0M9</td>
    <td colspan="1" rowspan="1">15.20.16</td>
    <td colspan="1" rowspan="1">RYX52</td>
    <td colspan="1" rowspan="1"> <p>35.20.14 - Installer</p> <p>8.53.1.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">QLogic FastLinQ 41164 Quad Port 10GbE SFP+, rNDC</td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">XVVY1</td>
    <td colspan="1" rowspan="1">TD0M9</td>
    <td colspan="1" rowspan="1">15.20.16</td>
    <td colspan="1" rowspan="1">RYX52</td>
    <td colspan="1" rowspan="1"> <p>35.20.14 - Installer</p> <p>8.53.1.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">QLogic FastLinQ 41164 Quad Port 10GbE BASE-T, rNDC</td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">X1TD1</td>
    <td colspan="1" rowspan="1">TD0M9</td>
    <td colspan="1" rowspan="1">15.20.16</td>
    <td colspan="1" rowspan="1">RYX52</td>
    <td colspan="1" rowspan="1"> <p>35.20.14 - Installer</p> <p>8.53.1.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>Intel X710 DP 10Gb DA/SFP+, +I350 DP 1Gb Ethernet, NDC</p> </td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">6VDPG</td>
    <td colspan="1" rowspan="1">DK4G2</td>
    <td colspan="1" rowspan="1">20.0.17</td>
    <td colspan="1" rowspan="1">284J6</td>
    <td colspan="1" rowspan="1"> <p>20.0.0 - Installer</p> <p>1.13.104.0 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>Qlogic 57800 2x10Gb BT + 2x1Gb BT NDC</p> <p>QLogic 57800 2x10Gb DA/SFP+ +2x1Gb BT NDC</p> </td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1"> <p>G8RPD</p> <p>165T0</p> </td>
    <td colspan="1" rowspan="1">899FK</td>
    <td colspan="1" rowspan="1">15.20.13</td>
    <td colspan="1" rowspan="1">MJP9W</td>
    <td colspan="1" rowspan="1"> <p>35.20.04 - Installer</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Broadcom 5720 Dual Port 1 GbE Network LOM Mezz Card</td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">KJMHJ</td>
    <td colspan="1" rowspan="1">M18WH</td>
    <td colspan="1" rowspan="1">21.80.9</td>
    <td colspan="1" rowspan="1">49X84</td>
    <td colspan="1" rowspan="1"> <p>21.80.3 - Installer</p> <p>214.0.0.6 - Driver</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Broadcom 57412 2 Port 10Gb SRP+ + 5720 2 Port 1 GB Base-T, rNDC</td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">NWMNX</td>
    <td colspan="1" rowspan="1">YPXWJ</td>
    <td colspan="1" rowspan="1">21.85.21.91</td>
    <td colspan="1" rowspan="1">XYJ8C</td>
    <td colspan="1" rowspan="1"><p>218.0.169.0 - Installer</p> <p>21.80.16.60 - Driver</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Broadcom 57416 Dual Port 10 Gb E SFP+ Network LOM Mezz Card</td>
    <td colspan="1" rowspan="1">Network / NDC</td>
    <td colspan="1" rowspan="1">WC9TR</td>
    <td colspan="1" rowspan="1">YPXWJ</td>
    <td colspan="1" rowspan="1">21.85.21.91</td>
    <td colspan="1" rowspan="1">XYJ8C</td>
    <td colspan="1" rowspan="1"><p>218.0.169.0 - Installer</p> <p>21.80.16.60 - Driver</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Broadcom 57414 Dual Port 25 Gb E SFP+ Network LOM Mezz Card</td>
    <td colspan="1" rowspan="1">Network / NDC / OCP</td>
    <td colspan="1" rowspan="1">930PP</td>
    <td colspan="1" rowspan="1">YPXWJ</td>
    <td colspan="1" rowspan="1"> <p>21.85.21.91</p> </td>
    <td colspan="1" rowspan="1">XYJ8C</td>
    <td colspan="1" rowspan="1"><p>218.0.169.0 - Installer</p> <p>21.80.16.60 - Driver</p></td>
</tr>
<tr>
    <td colspan="1" rowspan="1"> <p>HBA330 Controller, 12Gps Mini Card</p> <p>HBA330 Controller, 12Gps Mini Card, LP</p> </td>
    <td colspan="1" rowspan="1">Storage-HBA</td>
    <td colspan="1" rowspan="1"> <p>P2R3R</p> <p>J7TNV</p> </td>
    <td colspan="1" rowspan="1"> <p>124X2</p> <p>NKNVC</p> </td>
    <td colspan="1" rowspan="1">16.17.01.00</td>
    <td colspan="1" rowspan="1"> <p>P1NP6</p> </td>
    <td colspan="1" rowspan="1"> <p>2.51.25.01 - Windows Server 2016</p> </td>
</tr>
<tr>
    <td colspan="1" rowspan="1">BOSS-S1</td>
    <td colspan="1" rowspan="1">BOSS-S1</td>
    <td colspan="1" rowspan="1">2MFVD</td>
    <td colspan="1" rowspan="1">3P39V</td>
    <td colspan="1" rowspan="1">2.5.13.3024</td>
    <td colspan="1" rowspan="1">8KKVC</td>
    <td colspan="1" rowspan="1">1.2.0.1052</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Chipset driver for Intel platforms</td>
    <td colspan="1" rowspan="1">Chipset</td>
    <td colspan="1" rowspan="1">Not applicable</td>
    <td colspan="1" rowspan="1">Not applicable</td>
    <td colspan="1" rowspan="1">Not applicable</td>
    <td colspan="1" rowspan="1"> <p>MPXXJ</p> </td>
    <td colspan="1" rowspan="1"> <p>10.1.18807.8279</p> </td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SAS 2.5” HDD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Type</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">7.2K 12Gbps SAS HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Avenger</td>
    <td colspan="1" rowspan="1">ST2000NX0463</td>
    <td colspan="1" rowspan="1">TMVN7</td>
    <td colspan="1" rowspan="1">GW3V7</td>
    <td colspan="1" rowspan="1">NT32</td>
    <td colspan="1" rowspan="1">2 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">10K 12 Gbps SAS HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Skybolt</td>
    <td colspan="1" rowspan="1">DL2400MM0159</td>
    <td colspan="1" rowspan="1">RWR8F</td>
    <td colspan="1" rowspan="1">HYJ6K</td>
    <td colspan="1" rowspan="1">ST5C</td>
    <td colspan="1" rowspan="1">2.4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">10K 12 Gbps SAS HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">AL15SE</td>
    <td colspan="1" rowspan="1">AL15SEB24EQY</td>
    <td colspan="1" rowspan="1">F9NWJ</td>
    <td colspan="1" rowspan="1">0T1RG</td>
    <td colspan="1" rowspan="1">EF06</td>
    <td colspan="1" rowspan="1">2.4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">10K 12 Gbps SAS HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Skybolt</td>
    <td colspan="1" rowspan="1">ST2400MM0159</td>
    <td colspan="1" rowspan="1">36YG1</td>
    <td colspan="1" rowspan="1">DY8C3</td>
    <td colspan="1" rowspan="1">ST76</td>
    <td colspan="1" rowspan="1">2.4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SATA 2.5” HDD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Type</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">7.2K 6Gbps SATA HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Avenger</td>
    <td colspan="1" rowspan="1">ST2000NX0423</td>
    <td colspan="1" rowspan="1">VR92X</td>
    <td colspan="1" rowspan="1">GMW4P</td>
    <td colspan="1" rowspan="1">NB33</td>
    <td colspan="1" rowspan="1">2 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SATA 3.5” HDD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Type</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Aries K Plus</td>
    <td colspan="1" rowspan="1"> <p>HUS726020ALA610</p> <p>HUS726040ALA610</p> </td>
    <td colspan="1" rowspan="1"> <p>8NP2N</p> <p>61FFW</p> </td>
    <td colspan="1" rowspan="1">X59KC</td>
    <td colspan="1" rowspan="1">KV45</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Rainier MLK</td>
    <td colspan="1" rowspan="1">HUS722T2TALA600</td>
    <td colspan="1" rowspan="1">V9H6C</td>
    <td colspan="1" rowspan="1">V3DJM</td>
    <td colspan="1" rowspan="1">MU03</td>
    <td colspan="1" rowspan="1">2 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Tomcat R</td>
    <td colspan="1" rowspan="1"> <p>MG04ACA200NY</p> <p>MG04ACA400NY</p> </td>
    <td colspan="1" rowspan="1"> <p>NPVM6</p> <p>95M6K</p> </td>
    <td colspan="1" rowspan="1"> <p>V47C4</p>  </td>
    <td colspan="1" rowspan="1">FK5D</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Nemo</td>
    <td colspan="1" rowspan="1">ST2000NM0018-2F3130</td>
    <td colspan="1" rowspan="1">W8FW5</td>
    <td colspan="1" rowspan="1">CMK5N</td>
    <td colspan="1" rowspan="1">EA04</td>
    <td colspan="1" rowspan="1">2 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Makara BP</td>
    <td colspan="1" rowspan="1"> <p>ST2000NM0145-2DC104</p> <p>ST4000NM0265-2DC107</p> </td>
    <td colspan="1" rowspan="1"> <p>WG9R0</p> <p>MWHY9</p> </td>
    <td colspan="1" rowspan="1">M5GJ1</td>
    <td colspan="1" rowspan="1">DB34</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Vela-A</td>
    <td colspan="1" rowspan="1">HUS726T4TALA6L0</td>
    <td colspan="1" rowspan="1">YH3T9</td>
    <td colspan="1" rowspan="1">3CFT0</td>
    <td colspan="1" rowspan="1">PV07</td>
    <td colspan="1" rowspan="1">4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Vela-AP</td>
    <td colspan="1" rowspan="1">HUS728T8TALE6L0</td>
    <td colspan="1" rowspan="1">1WMVC</td>
    <td colspan="1" rowspan="1">N26JT</td>
    <td colspan="1" rowspan="1">RT07</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Libra HE10</td>
    <td colspan="1" rowspan="1">HUH721008ALE600</td>
    <td colspan="1" rowspan="1">KRV2W</td>
    <td colspan="1" rowspan="1">H12N2</td>
    <td colspan="1" rowspan="1">LT21</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Makara Plus</td>
    <td colspan="1" rowspan="1">ST8000NM0205-2FF112</td>
    <td colspan="1" rowspan="1">92MDW</td>
    <td colspan="1" rowspan="1">MR6RH</td>
    <td colspan="1" rowspan="1">PB53</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG06</td>
    <td colspan="1" rowspan="1">MG06ACA800EY</td>
    <td colspan="1" rowspan="1">9X09C</td>
    <td colspan="1" rowspan="1">PT7D8</td>
    <td colspan="1" rowspan="1">GA09</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Leo-A He12</td>
    <td colspan="1" rowspan="1">HUH721212ALE600</td>
    <td colspan="1" rowspan="1">T2YHT</td>
    <td colspan="1" rowspan="1">0HF04</td>
    <td colspan="1" rowspan="1">NT10</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG07</td>
    <td colspan="1" rowspan="1">MG07ACA12TEY</td>
    <td colspan="1" rowspan="1">753F0</td>
    <td colspan="1" rowspan="1">0942Y</td>
    <td colspan="1" rowspan="1">GB03</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08AC</td>
    <td colspan="1" rowspan="1">MG08ACA16TEY</td>
    <td colspan="1" rowspan="1">HPGJ4</td>
    <td colspan="1" rowspan="1">MGF80</td>
    <td colspan="1" rowspan="1">GC02</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08AD</td>
    <td colspan="1" rowspan="1">MG08ADA400NY</td>
    <td colspan="1" rowspan="1">W2M9N</td>
    <td colspan="1" rowspan="1">7NJXF</td>
    <td colspan="1" rowspan="1">GD03</td>
    <td colspan="1" rowspan="1">4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Cimarron</td>
    <td colspan="1" rowspan="1"> <p>ST4000NM016A-2HZ130</p> <p>ST8000NM012A-2KE131</p> </td>
    <td colspan="1" rowspan="1"> <p>XPJ47</p> <p>F4JXT</p> </td>
    <td colspan="1" rowspan="1"> <p>179WV</p> <p>V1521</p> </td>
    <td colspan="1" rowspan="1"> <p>CAJC</p> <p>CALD</p> </td>
    <td colspan="1" rowspan="1"> <p>4 TB</p> <p>8 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Cimarron BP</td>
    <td colspan="1" rowspan="1"><p>ST4000NM018B-2TF130</p> <p>ST8000NM023B-2TJ133</p></td>
    <td colspan="1" rowspan="1"><p>6KR2M</p> <p>J7W80</p></td>
    <td colspan="1" rowspan="1"><p>J4X0T</p> <p>4P5X3</p></td>
    <td colspan="1" rowspan="1"><p>LC09</p> <p>LA0A</p></td>
    <td colspan="1" rowspan="1"><p>4 TB</p> <p>8 TB</p></td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SAS 3.5” HDD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Type</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Aries K Plus</td>
    <td colspan="1" rowspan="1"> <p>HUS726020ALS210</p> <p>HUS726040ALS210</p> </td>
    <td colspan="1" rowspan="1"> <p>VH6FW</p> <p>X4FKY</p> </td>
    <td colspan="1" rowspan="1">68X4C</td>
    <td colspan="1" rowspan="1">KU45</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Tomcat R</td>
    <td colspan="1" rowspan="1"> <p>MG04SCA20ENY</p> <p>MG04SCA40ENY</p> </td>
    <td colspan="1" rowspan="1"> <p>HHX14</p> <p>1MVTT</p> </td>
    <td colspan="1" rowspan="1">RG9MK</td>
    <td colspan="1" rowspan="1">EG03</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Makara BP</td>
    <td colspan="1" rowspan="1"> <p>ST2000NM0155</p> <p>ST4000NM0295</p> </td>
    <td colspan="1" rowspan="1"> <p>7RCGV</p> <p>5JH5X</p> </td>
    <td colspan="1" rowspan="1">3CRY1</td>
    <td colspan="1" rowspan="1">DT32</td>
    <td colspan="1" rowspan="1"> <p>2 TB</p> <p>4 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Vela-A</td>
    <td colspan="1" rowspan="1">HUS726T4TALS200</td>
    <td colspan="1" rowspan="1">NT1X2</td>
    <td colspan="1" rowspan="1">1DM5F</td>
    <td colspan="1" rowspan="1">PU07</td>
    <td colspan="1" rowspan="1">4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Vela-AP</td>
    <td colspan="1" rowspan="1">HUS728T8TAL5200</td>
    <td colspan="1" rowspan="1">44YFV</td>
    <td colspan="1" rowspan="1">6JJPV</td>
    <td colspan="1" rowspan="1">RS07</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Libra HE10</td>
    <td colspan="1" rowspan="1">HUH721008AL5200</td>
    <td colspan="1" rowspan="1">KRDKK</td>
    <td colspan="1" rowspan="1">MGW91</td>
    <td colspan="1" rowspan="1">LS21</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Makara Plus</td>
    <td colspan="1" rowspan="1">ST8000NM0185</td>
    <td colspan="1" rowspan="1">M40TH/VFP4M</td>
    <td colspan="1" rowspan="1">6421F</td>
    <td colspan="1" rowspan="1">PT55</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG06</td>
    <td colspan="1" rowspan="1">MG06SCA800EY</td>
    <td colspan="1" rowspan="1"> <p>FV725</p> </td>
    <td colspan="1" rowspan="1">4G5GY</td>
    <td colspan="1" rowspan="1">EH0D</td>
    <td colspan="1" rowspan="1">8 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Hitachi</td>
    <td colspan="1" rowspan="1">Leo-A He12</td>
    <td colspan="1" rowspan="1">HUH721212AL5200</td>
    <td colspan="1" rowspan="1">9HXK6</td>
    <td colspan="1" rowspan="1">230YX</td>
    <td colspan="1" rowspan="1">NS10</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG07</td>
    <td colspan="1" rowspan="1">MG07SCA12TEY</td>
    <td colspan="1" rowspan="1">DK7C9/KFJ7G</td>
    <td colspan="1" rowspan="1">GT72W</td>
    <td colspan="1" rowspan="1">EI0C</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Evans</td>
    <td colspan="1" rowspan="1">ST12000NM009G</td>
    <td colspan="1" rowspan="1">7KT9W</td>
    <td colspan="1" rowspan="1">NJ4NN</td>
    <td colspan="1" rowspan="1">ESL7</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Mobula BP</td>
    <td colspan="1" rowspan="1">ST12000NM0158</td>
    <td colspan="1" rowspan="1">YMN53</td>
    <td colspan="1" rowspan="1">VTX9C</td>
    <td colspan="1" rowspan="1">RSL5</td>
    <td colspan="1" rowspan="1">12 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08SC</td>
    <td colspan="1" rowspan="1">MG08SCA16TEY</td>
    <td colspan="1" rowspan="1">8MG73</td>
    <td colspan="1" rowspan="1">9N3RR</td>
    <td colspan="1" rowspan="1">EJ09</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08SC</td>
    <td colspan="1" rowspan="1">MG08SCA16TEY</td>
    <td colspan="1" rowspan="1">4N7V0</td>
    <td colspan="1" rowspan="1">9N3RR</td>
    <td colspan="1" rowspan="1">EJ09</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08SC</td>
    <td colspan="1" rowspan="1">MG08SCA16TEY</td>
    <td colspan="1" rowspan="1">24HF9</td>
    <td colspan="1" rowspan="1">9N3RR</td>
    <td colspan="1" rowspan="1">EJ09</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Evans</td>
    <td colspan="1" rowspan="1">ST16000NM010G</td>
    <td colspan="1" rowspan="1">CNXPV</td>
    <td colspan="1" rowspan="1">NJ4NN</td>
    <td colspan="1" rowspan="1">ESL7</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">WD</td>
    <td colspan="1" rowspan="1">Paris-C</td>
    <td colspan="1" rowspan="1">WUH721816AL5200</td>
    <td colspan="1" rowspan="1">VF206</td>
    <td colspan="1" rowspan="1">19MP7</td>
    <td colspan="1" rowspan="1">US06</td>
    <td colspan="1" rowspan="1">16 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5"</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Cimarron</td>
    <td colspan="1" rowspan="1"> <p>ST4000NM017A</p> <p>ST8000NM014A</p> </td>
    <td colspan="1" rowspan="1"> <p>KRM6X</p> <p>0N660</p> </td>
    <td colspan="1" rowspan="1"> <p>WTX15</p> <p>PRFRJ</p> </td>
    <td colspan="1" rowspan="1"> <p>CSJA</p> <p>CSLC</p> </td>
    <td colspan="1" rowspan="1"> <p>4 TB</p> <p>8 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Cimarron BP</td>
    <td colspan="1" rowspan="1">ST4000NM019B</p> <p>ST8000NM024B</td>
    <td colspan="1" rowspan="1"><p>10N7R</p> <p>C5HD0</p></td>
    <td colspan="1" rowspan="1"><p>912Y9</p> <p>DTGXD</p></td>
    <td colspan="1" rowspan="1"><p>LW0A</p> <p>LS0A</p></td>
    <td colspan="1" rowspan="1"><p>4 TB</p> <p>8 TB</p></td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">3.5</td>
    <td colspan="1" rowspan="1">HDD</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">MG08SD</td>
    <td colspan="1" rowspan="1">MG08SDA400NY</td>
    <td colspan="1" rowspan="1">FN2YX</td>
    <td colspan="1" rowspan="1">N5XN3</td>
    <td colspan="1" rowspan="1">EK05</td>
    <td colspan="1" rowspan="1">4 TB</td>
    <td colspan="1" rowspan="1">Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SATA 2.5” SSD Drives - Cache or Capacity

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">HK4</td>
    <td colspan="1" rowspan="1"> <p>THNSF8800CCSE</p> <p>THNSF81D60CSE</p> </td>
    <td colspan="1" rowspan="1"> <p>VCRY6</p> <p>DMF5Y</p> </td>
    <td colspan="1" rowspan="1">H3XHN</td>
    <td colspan="1" rowspan="1">DACB</td>
    <td colspan="1" rowspan="1"> <p>800 GB</p> <p>1.6 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Micron</td>
    <td colspan="1" rowspan="1">5300</td>
    <td colspan="1" rowspan="1"> <p>MTFDDAK960TDT</p> <p>MTFDDAK1T9TDT</p> </td>
    <td colspan="1" rowspan="1"> <p>XMWMK</p> <p>MMCDY</p> </td>
    <td colspan="1" rowspan="1">X5R54</td>
    <td colspan="1" rowspan="1">J004</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">SM863a</td>
    <td colspan="1" rowspan="1"> <p>MZ7KM960HMJP0D3</p> <p>MZ7KM1T9HMJP0D3</p> </td>
    <td colspan="1" rowspan="1"> <p>DD4G0</p> <p>K5P0T</p> </td>
    <td colspan="1" rowspan="1">97D8J</td>
    <td colspan="1" rowspan="1">GD57</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">SM883</td>
    <td colspan="1" rowspan="1"> <p>MZ7KH960HAJR0D3</p> <p>MZ7KH1T9HAJR0D3</p> </td>
    <td colspan="1" rowspan="1"> <p>YDHYX</p> <p>71K37</p> </td>
    <td colspan="1" rowspan="1">3J3JR</td>
    <td colspan="1" rowspan="1">HF58</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">S4600</td>
    <td colspan="1" rowspan="1"> <p>SSDSC2KG960G7R</p> <p>SSDSC2KG019T7R</p> </td>
    <td colspan="1" rowspan="1"> <p>TR3MY</p> <p>MWKF2</p> </td>
    <td colspan="1" rowspan="1">V141M</td>
    <td colspan="1" rowspan="1">DL5C</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">S4610</td>
    <td colspan="1" rowspan="1"> <p>SSDSC2KG960G8R</p> <p>SSDSC2KG019T8R</p> </td>
    <td colspan="1" rowspan="1"> <p>X31G3</p> <p>F8N2K/55J8H</p> </td>
    <td colspan="1" rowspan="1">2674V</td>
    <td colspan="1" rowspan="1">DL69</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Micron</td>
    <td colspan="1" rowspan="1">5200</td>
    <td colspan="1" rowspan="1"> <p>MTFDDAK960TDN</p> <p>MTFDDAK1T9TDN</p> </td>
    <td colspan="1" rowspan="1"> <p>HY1F8</p> <p>XKF5Y</p> </td>
    <td colspan="1" rowspan="1">H72VG</td>
    <td colspan="1" rowspan="1">F005</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">HK6-V</td>
    <td colspan="1" rowspan="1"> <p>KHK6YVSE960G</p> <p>KHK6YVSE1T92</p> </td>
    <td colspan="1" rowspan="1"> <p>XW4D1</p> <p>0DXJ7</p> </td>
    <td colspan="1" rowspan="1">W0YR1</td>
    <td colspan="1" rowspan="1">DBC4</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Hynix</td>
    <td colspan="1" rowspan="1">SE5031</td>
    <td colspan="1" rowspan="1"> <p>HFS960G32FEH-BA10A</p> <p>HFS1T9G32FEH-BA10A</p> </td>
    <td colspan="1" rowspan="1"> <p>7GR2K</p>  <p>GKTF1</p> </td>
    <td colspan="1" rowspan="1">7X9WV</td>
    <td colspan="1" rowspan="1">DD02</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">Youngsville-RR</td>
    <td colspan="1" rowspan="1"><p>SSDSC2KG960GZR</p> <p>SSDSC2KG019TZR</p></td>
    <td colspan="1" rowspan="1"><p>8MHYH</p> <p>8RXV5</p></td>
    <td colspan="1" rowspan="1">PN1T8</td>
    <td colspan="1" rowspan="1">DL70</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM897</td>
    <td colspan="1" rowspan="1"><p>MZ7L3960HBLTAD3</p> <p>MZ7L31T9HBNAAD3</p> <p>MZ7L33T8HBNAAD3</p></td>
    <td colspan="1" rowspan="1"><p>96KT6</p> <p>RRR7M</p> <p>N04DW</p></td>
    <td colspan="1" rowspan="1">2PV21</td>
    <td colspan="1" rowspan="1">HH53</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SATA 2.5” SSD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Micron</td>
    <td colspan="1" rowspan="1">5200</td>
    <td colspan="1" rowspan="1">MTFDDAK1T9TDD</td>
    <td colspan="1" rowspan="1">VJ36D</td>
    <td colspan="1" rowspan="1">H72VG</td>
    <td colspan="1" rowspan="1">F005</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Micron</td>
    <td colspan="1" rowspan="1">5300</td>
    <td colspan="1" rowspan="1">MTFDDAK1T9TDS</td>
    <td colspan="1" rowspan="1">GYGVV</td>
    <td colspan="1" rowspan="1">X5R54</td>
    <td colspan="1" rowspan="1">J004</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">HK6-R</td>
    <td colspan="1" rowspan="1"> <p>KHK6YRSE1T92</p> <p>KHK6YRSE3T84</p> </td>
    <td colspan="1" rowspan="1"> <p>919J7</p> <p>8PYG5</p> </td>
    <td colspan="1" rowspan="1">W0YR1</td>
    <td colspan="1" rowspan="1">DBC4</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM883a</td>
    <td colspan="1" rowspan="1">MZ7LH1T9HALT0D3</td>
    <td colspan="1" rowspan="1">9F9Y6</td>
    <td colspan="1" rowspan="1">882YH</td>
    <td colspan="1" rowspan="1">HG58</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM883</td>
    <td colspan="1" rowspan="1">MZ7LH1T9HMLT0D3</td>
    <td colspan="1" rowspan="1">Y24T6</td>
    <td colspan="1" rowspan="1">93P7P</td>
    <td colspan="1" rowspan="1">HE59</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Hynix</td>
    <td colspan="1" rowspan="1">SE4011</td>
    <td colspan="1" rowspan="1">HFS1T9G32FEH-7A10A</td>
    <td colspan="1" rowspan="1">0XMV9</td>
    <td colspan="1" rowspan="1">MFCH2</td>
    <td colspan="1" rowspan="1">DE07</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">S4510</td>
    <td colspan="1" rowspan="1">SSDSC2KB019T8R</td>
    <td colspan="1" rowspan="1">33R2T</td>
    <td colspan="1" rowspan="1">2674V</td>
    <td colspan="1" rowspan="1">DL69</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">S4500</td>
    <td colspan="1" rowspan="1"> <p>SSDSC2KB019T7R</p> <p>SSDSC2KB038T7R</p> </td>
    <td colspan="1" rowspan="1"> <p>XCN15</p> <p>3RRN8</p> </td>
    <td colspan="1" rowspan="1">V141M</td>
    <td colspan="1" rowspan="1">DL5C</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">S4510</td>
    <td colspan="1" rowspan="1">SSDSC2KB038T8R</td>
    <td colspan="1" rowspan="1">1RHK2</td>
    <td colspan="1" rowspan="1">2674V</td>
    <td colspan="1" rowspan="1">DL69</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM883</td>
    <td colspan="1" rowspan="1">MZ7LH3T8HMLT0D3</td>
    <td colspan="1" rowspan="1">FYP5F</td>
    <td colspan="1" rowspan="1">93P7P</td>
    <td colspan="1" rowspan="1">HE59</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM883a</td>
    <td colspan="1" rowspan="1">MZ7LH3T8HALT0D3</td>
    <td colspan="1" rowspan="1">5TVXD</td>
    <td colspan="1" rowspan="1">882YH</td>
    <td colspan="1" rowspan="1">HG58</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Hynix</td>
    <td colspan="1" rowspan="1">SE4011</td>
    <td colspan="1" rowspan="1">HFS3T8G32FEH-7410A</td>
    <td colspan="1" rowspan="1">D6C0R</td>
    <td colspan="1" rowspan="1">MFCH2</td>
    <td colspan="1" rowspan="1">DE07</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Micron</td>
    <td colspan="1" rowspan="1">5300</td>
    <td colspan="1" rowspan="1">MTFDDAK3T8TDT</td>
    <td colspan="1" rowspan="1">4H1RX</td>
    <td colspan="1" rowspan="1">PXMD3</td>
    <td colspan="1" rowspan="1">J404</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Hynix</td>
    <td colspan="1" rowspan="1">SE5110</td>
    <td colspan="1" rowspan="1"><p>HFS1T9G3H2X069N</p> <p>HFS3T8G3H2X069N</p></td>
    <td colspan="1" rowspan="1"><p>962FP</p> <p>3GDK0</p></td>
    <td colspan="1" rowspan="1">8KVKG</td>
    <td colspan="1" rowspan="1">DZ02</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">Youngsville-RR</td>
    <td colspan="1" rowspan="1"><p>SSDSC2KB960GZR</p> <p>SSDSC2KB019TZR</p> <p>SSDSC2KB038TZR</p></td>
    <td colspan="1" rowspan="1"><p>F6H8H</p> <p>VYYW8</p> <p>WNPN1</p></td>
    <td colspan="1" rowspan="1">PN1T8</td>
    <td colspan="1" rowspan="1">DL70</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM893</td>
    <td colspan="1" rowspan="1"><p>MZ7L31T9HBLTAD3</p> <p>MZ7L33T8HBLTAD3</p></td>
    <td colspan="1" rowspan="1"><p>0KYP4</p> <p>GCN5W</p></td>
    <td colspan="1" rowspan="1">5MKJ8</td>
    <td colspan="1" rowspan="1">HJ53</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SAS 2.5” SSD Drives - Cache or Capacity

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Supported Config</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">Write Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M4</td>
    <td colspan="1" rowspan="1"> <p>PX05SMB080Y</p> <p>PX05SMB160Y</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>CN3JH</p> <p>GVTYD</p> </td>
    <td colspan="1" rowspan="1">1DJXX</td>
    <td colspan="1" rowspan="1">AS10</td>
    <td colspan="1" rowspan="1"> <p>800 GB</p> <p>1.6 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M4</td>
    <td colspan="1" rowspan="1"> <p>PX05SVB096Y</p> <p>PX05SVB192Y</p> <p>PX05SVB384Y</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>503M7</p> <p>V0K7V</p> <p>3DDFT</p> </td>
    <td colspan="1" rowspan="1">1DJXX</td>
    <td colspan="1" rowspan="1">AS10</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Write Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M5-M</td>
    <td colspan="1" rowspan="1"> <p>KPM5XMUG800G</p> <p>KPM5XMUG1T60</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>DHRVV</p> <p>W9G88</p> </td>
    <td colspan="1" rowspan="1">4P9DW</td>
    <td colspan="1" rowspan="1">B026</td>
    <td colspan="1" rowspan="1"> <p>800 GB</p> <p>1.6 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1645a</td>
    <td colspan="1" rowspan="1"> <p>MZILT800HBHQ0D3</p> <p>MZILT1T6HBJR0D3</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>GW8T1</p> <p>3TCV6</p> </td>
    <td colspan="1" rowspan="1">VJY6V</td>
    <td colspan="1" rowspan="1">DWA4</td>
    <td colspan="1" rowspan="1"> <p>800 GB</p> <p>1.6 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1645</td>
    <td colspan="1" rowspan="1">MZILT1T6HAJQ0D3</td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1">DR0HX</td>
    <td colspan="1" rowspan="1">C9JP2</td>
    <td colspan="1" rowspan="1">DWF8</td>
    <td colspan="1" rowspan="1">1.6 TB</td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">WD</td>
    <td colspan="1" rowspan="1">Bear Cove Quantum</td>
    <td colspan="1" rowspan="1"> <p>WUSTR6480BSS200</p> <p>WUSTR6416BSS200</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>6VJC9</p> <p>6NF96</p> </td>
    <td colspan="1" rowspan="1">X95FJ</td>
    <td colspan="1" rowspan="1">G130</td>
    <td colspan="1" rowspan="1"> <p>800 GB</p> <p>1.6 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M5-V</td>
    <td colspan="1" rowspan="1"> <p>KPM5XVUG960G</p> <p>KPM5XVUG1T92</p> <p>KPM5XVUG3T84</p> </td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"> <p>WFGTH</p> <p>2WVYG</p> <p>91W3V</p> </td>
    <td colspan="1" rowspan="1">4P9DW</td>
    <td colspan="1" rowspan="1">B026</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Write Intensive</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">PM6</td>
    <td colspan="1" rowspan="1"><p>KPM6XMUG800G</p> <p>KPM6XMUG1T60</p></td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"><p>H6GCD</p> <p>5GDXH</p></td>
    <td colspan="1" rowspan="1">6K5N9</td>
    <td colspan="1" rowspan="1">BA0D</td>
    <td colspan="1" rowspan="1"><p>800 GB</p> <p>1.6 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">PM6</td>
    <td colspan="1" rowspan="1"><p>KPM6XVUG800G</p> <p>KPM6XVUG1T60</p> <p>KPM6XVUG6T40</p></td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"><p>JTKH5</p> <p>GD3N0</p> <p>6NW3J</p></td>
    <td colspan="1" rowspan="1">6K5N9</td>
    <td colspan="1" rowspan="1">BA0D</td>
    <td colspan="1" rowspan="1"><p>800 GB</p> <p>1.6 TB</p> <p>6.4 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">PM6, FIPS</td>
    <td colspan="1" rowspan="1"><p>KPM6WVUG960G</p> <p>KPM6WVUG1T92</p> <p>KPM6WVUG3T84</p></td>
    <td colspan="1" rowspan="1">Hyb, AF</td>
    <td colspan="1" rowspan="1"><p>WMWKG</p> <p>DHWH5</p> <p>81H9C</p></td>
    <td colspan="1" rowspan="1">376CY</td>
    <td colspan="1" rowspan="1">BD0D</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### SAS 2.5” SSD Drives - Capacity Only

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">WD</td>
    <td colspan="1" rowspan="1">Bear Cove Plus</td>
    <td colspan="1" rowspan="1"> <p>WUSTR1519ASS200</p> <p>WUSTR1538ASS200</p> </td>
    <td colspan="1" rowspan="1"> <p>5ND33</p> <p>YW17N</p> </td>
    <td colspan="1" rowspan="1">358PN</td>
    <td colspan="1" rowspan="1">K960</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">WD</td>
    <td colspan="1" rowspan="1">Bear Cove Quantum</td>
    <td colspan="1" rowspan="1"> <p>WUSTVA119BSS200</p> <p>WUSTVA138BSS200</p> </td>
    <td colspan="1" rowspan="1"> <p>02X38</p> <p>FP1KF</p> </td>
    <td colspan="1" rowspan="1">1GGR2</td>
    <td colspan="1" rowspan="1">G10A</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1643</td>
    <td colspan="1" rowspan="1"> <p>MZILT1T9HAJQ0D3</p> <p>MZILT3T8HALS0D3</p> <p>MZILT7T6HMLA0D3</p> </td>
    <td colspan="1" rowspan="1"> <p>F0VFY</p> <p>X8F87</p> <p>RVYD5</p> </td>
    <td colspan="1" rowspan="1">J3RRK</td>
    <td colspan="1" rowspan="1">DSF8</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1643a</td>
    <td colspan="1" rowspan="1"> <p>MZILT1T9HBJR0D3</p> <p>MZILT3T8HBLS0D3</p> <p>MZILT7T6HALA0D3</p> </td>
    <td colspan="1" rowspan="1"> <p>TMTW9</p> <p>CRNPH</p> <p>84C40</p> </td>
    <td colspan="1" rowspan="1">D7RNT</td>
    <td colspan="1" rowspan="1">DSA4</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1633a</td>
    <td colspan="1" rowspan="1">MZILS3T8HMLH0D3</td>
    <td colspan="1" rowspan="1">JR1HP</td>
    <td colspan="1" rowspan="1">XNGNT</td>
    <td colspan="1" rowspan="1">DSLA</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M5-R</td>
    <td colspan="1" rowspan="1"> <p>KPM5XRUG1T92</p> <p>KPM5XRUG3T84</p> </td>
    <td colspan="1" rowspan="1"> <p>TDNP7</p> <p>N85XX</p> </td>
    <td colspan="1" rowspan="1">4P9DW</td>
    <td colspan="1" rowspan="1">B026</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix M4</td>
    <td colspan="1" rowspan="1">PX05SRB384Y</td>
    <td colspan="1" rowspan="1">XCRDV</td>
    <td colspan="1" rowspan="1">1DJXX</td>
    <td colspan="1" rowspan="1">AS10</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">PM6</td>
    <td colspan="1" rowspan="1"><p>KPM6XRUG1T92</p> <p>KPM6XRUG3T84</p> <p>KPM6XRUG7T68</p></td>
    <td colspan="1" rowspan="1"><p>4CN85</p> <p>H9TT5</p> <p>PD02Y</p></td>
    <td colspan="1" rowspan="1">2N1R6</td>
    <td colspan="1" rowspan="1">BA0B</td>
    <td colspan="1" rowspan="1"> <p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">PM6</td>
    <td colspan="1" rowspan="1"><p>KPM6WRUG1T92</p> <p>KPM6WRUG3T84</p></td>
    <td colspan="1" rowspan="1"><p>7F2D1</p> <p>FH1W9</p></td>
    <td colspan="1" rowspan="1">376CY</td>
    <td colspan="1" rowspan="1">BD0D</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### Value SAS 2.5” SSD Drives - Cache or Capacity

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix RM5</td>
    <td colspan="1" rowspan="1"> <p>KRM5XVUG3T84</p> </td>
    <td colspan="1" rowspan="1"> <p>X78JM</p> </td>
    <td colspan="1" rowspan="1">12D7W</td>
    <td colspan="1" rowspan="1">B70C</td>
    <td colspan="1" rowspan="1"> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">LangeBP</td>
    <td colspan="1" rowspan="1">XS3840LE70154</td>
    <td colspan="1" rowspan="1">NWGX3</td>
    <td colspan="1" rowspan="1">NX13G</td>
    <td colspan="1" rowspan="1">4D0C</td>
    <td colspan="1" rowspan="1">3.84 TB</td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">LangeBP,SED</td>
    <td colspan="1" rowspan="1"><p>XS960LE70134</p> <p>XS1920LE70134</p> <p>XS3840LE70134</p></td>
    <td colspan="1" rowspan="1"><p>2RDWT</p> <p>N6DRV</p> <p>YM9HP</p></td>
    <td colspan="1" rowspan="1">G04C8</td>
    <td colspan="1" rowspan="1">4S0C</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Mixed Use</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">RM6,SED</td>
    <td colspan="1" rowspan="1"><p>KRM6VVUG960G</p> <p>KRM6VVUG1T92</p> <p>KRM6VVUG3T84</p></td>
    <td colspan="1" rowspan="1"><p>42XXC</p> <p>N15JP</p> <p>FXYGR</p></td>
    <td colspan="1" rowspan="1">3P4FR</td>
    <td colspan="1" rowspan="1">BJ02</td>
    <td colspan="1" rowspan="1"><p>960 GB</p> <p>1.92 TB</p> <p>3.84 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">Phoenix RM5</td>
    <td colspan="1" rowspan="1">KRM5XRUG7T68</td>
    <td colspan="1" rowspan="1">5XD2F</td>
    <td colspan="1" rowspan="1">12D7W</td>
    <td colspan="1" rowspan="1">B70C</td>
    <td colspan="1" rowspan="1">7.68 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">Lange</td>
    <td colspan="1" rowspan="1">XS7680SE70074</td>
    <td colspan="1" rowspan="1">2PKRH</td>
    <td colspan="1" rowspan="1">H3VHX</td>
    <td colspan="1" rowspan="1">EC16</td>
    <td colspan="1" rowspan="1">7.68 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">LangeBP</td>
    <td colspan="1" rowspan="1">XS7680SE70154</td>
    <td colspan="1" rowspan="1">5KW0F</td>
    <td colspan="1" rowspan="1">NX13G</td>
    <td colspan="1" rowspan="1">4D0C</td>
    <td colspan="1" rowspan="1">7.68 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Seagate</td>
    <td colspan="1" rowspan="1">LangeBP,SED</td>
    <td colspan="1" rowspan="1"><p>XS1920SE70134</p> <p>XS3840SE70134</p> <p>XS7680SE7013</p></td>
    <td colspan="1" rowspan="1"><p>K9T53</p> <p>4KPKF</p> <p>2THYF</p></td>
    <td colspan="1" rowspan="1">G04C8</td>
    <td colspan="1" rowspan="1">4S0C</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">RM6,SED</td>
    <td colspan="1" rowspan="1"><p>KRM6VRUG1T92</p> <p>KRM6VRUG3T84</p> <p>KRM6VRUG7T68</p></td>
    <td colspan="1" rowspan="1"><p>1FGWG</p> <p>XNXD2</p> <p>5MHY8</p></td>
    <td colspan="1" rowspan="1">3P4FR</td>
    <td colspan="1" rowspan="1">BJ02</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### NVMe Drives - Cache or Capacity

{{% alert title="NOTE" color="primary" %}}
Intel Optane P4800x is supported only on the R640 Storage Spaces Direct Ready Node.
{{% /alert %}}
{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Platform</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Description</th>
    <th colspan="1" rowspan="1">Model Number</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">Optane P4800x SSD/NVMe, 375 GB U.2 2.5" SFF</td>
    <td colspan="1" rowspan="1">SSDPE21K375GAT</td>
    <td colspan="1" rowspan="1">3DM57</td>
    <td colspan="1" rowspan="1">HD2YY</td>
    <td colspan="1" rowspan="1">E201DP38</td>
    <td colspan="1" rowspan="1">375 GB</td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1"> <p>PM1725A</p>  </td>
    <td colspan="1" rowspan="1"> <p>MZWLL1T6HEHP-000D3</p> <p>MZWLL3T2HMJP-000D3</p> <p>MZWLL6T4HMLS-000D3</p> </td>
    <td colspan="1" rowspan="1"> <p>JD6CH</p> <p>JDMHM</p> <p>Y3XT2</p> </td>
    <td colspan="1" rowspan="1"> <p>34C36</p> </td>
    <td colspan="1" rowspan="1">1.2.1</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>3.2 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1"> <p>PM1725b</p> </td>
    <td colspan="1" rowspan="1"> <p>MZWLL1T6HAJQ-000D3</p> <p>MZWLL3T2HAJQ-000D3</p> <p>MZWLL6T4HMLA-000D3</p> </td>
    <td colspan="1" rowspan="1"> <p>4WDXY</p> <p>K60N7</p> <p>08NMX</p> </td>
    <td colspan="1" rowspan="1">3F3N1</td>
    <td colspan="1" rowspan="1">1.2.2</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>3.2 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1"> <p>P4600</p> </td>
    <td colspan="1" rowspan="1"> <p>SSDPE2KE016T7T</p> <p>SSDPE2KE032T7T</p> </td>
    <td colspan="1" rowspan="1"> <p>F5P84</p> <p>MCV6J</p> </td>
    <td colspan="1" rowspan="1">CR0HC</td>
    <td colspan="1" rowspan="1">QDV1DP17</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>3.2 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1"> <p>P4610</p> </td>
    <td colspan="1" rowspan="1"> <p>SSDPE2KE016T8T</p> <p>SSDPE2KE032T8T</p> <p>SSDPE2KE064T8T</p> </td>
    <td colspan="1" rowspan="1"> <p>58V30</p> <p>2CN1T</p> <p>X27HY</p> </td>
    <td colspan="1" rowspan="1">GD4X4</td>
    <td colspan="1" rowspan="1">VDV1DP25</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>3.2 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">KIOXIA</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">CM6,FIPS</td>
    <td colspan="1" rowspan="1">Dell Ent NVMe FIPS CM6 MU 1.6 TB</td>
    <td colspan="1" rowspan="1">G7N00</td>
    <td colspan="1" rowspan="1">T79D5</td>
    <td colspan="1" rowspan="1">1.2.0</td>
    <td colspan="1" rowspan="1">1.6 TB</td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">PM1735</td>
    <td colspan="1" rowspan="1">Dell Ent NVMe AGN MU U.2 1.6 TB</td>
    <td colspan="1" rowspan="1">6GK00</td>
    <td colspan="1" rowspan="1">RP8RC</td>
    <td colspan="1" rowspan="1">2.3.0</td>
    <td colspan="1" rowspan="1">1.6 TB</td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">PM1735 V2</td>
    <td colspan="1" rowspan="1"><p>Dell Ent NVMe v2 AGN MU U.2 1.6 TB</p> <p>Dell Ent NVMe v2 AGN MU U.2 3.2 TB</p> <p>Dell Ent NVMe v2 AGN MU U.2 6.4 TB</p></td>
    <td colspan="1" rowspan="1"><p>0MNMV</p> <p>V69W3</p> <p>H8D5M</p></td>
    <td colspan="1" rowspan="1">TRCC6</td>
    <td colspan="1" rowspan="1">2.3.0</td>
    <td colspan="1" rowspan="1"><p>1.6 TB</p> <p>3.2 TB</p> <p>6.4 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">CM6 SP</td>
    <td colspan="1" rowspan="1"><p>Dell Ent NVMe CM6 MU 1.6 TB</p> <p>Dell Ent NVMe CM6 MU 3.2 TB</p> <p>Dell Ent NVMe CM6 MU 6.4 TB</p></td>
    <td colspan="1" rowspan="1"><p>P03YC</p> <p>97GR0</p> <p>K916X</p></td>
    <td colspan="1" rowspan="1">511TX</td>
    <td colspan="1" rowspan="1">2.1.8</td>
    <td colspan="1" rowspan="1"><p>1.6 TB</p> <p>3.2 TB</p> <p>6.4 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">P5600 SP</td>
    <td colspan="1" rowspan="1"><p>Dell Ent NVMe P5600 MU U.2 1.6 TB</p> <p>Dell Ent NVMe P5600 MU U.2 3.2 TB</p></td>
    <td colspan="1" rowspan="1"><p>C9X5T</p> <p>PRKTM</p></td>
    <td colspan="1" rowspan="1">J7FTF</td>
    <td colspan="1" rowspan="1">1.2.4</td>
    <td colspan="1" rowspan="1"><p>1.6 TB</p> <p>3.2 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">2.5"</td>
    <td colspan="1" rowspan="1">Arbordale Plus RR</td>
    <td colspan="1" rowspan="1"><p>SSDPF2KE016T1E</p> <p>SSDPF2KE032T1E</p></td>
    <td colspan="1" rowspan="1"><p>82TVJ</p> <p>TY3M5</p></td>
    <td colspan="1" rowspan="1">J55N8</td>
    <td colspan="1" rowspan="1">1.0.0</td>
    <td colspan="1" rowspan="1"><p>1.6 TB</p> <p>3.2 TB</p></td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### NVMe Drives - Capacity Only

{{% alert title="NOTE" color="primary" %}}
Toshiba CD5 960 GB capacity is supported only on the R640 Storage Spaces Direct Ready Node.
{{% /alert %}}
{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Endurance</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Series</th>
    <th colspan="1" rowspan="1">Model</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="2">  <p>Read Intensive</p> </td>
    <td colspan="1" rowspan="1">Toshiba</td>
    <td colspan="1" rowspan="1">CD5</td>
    <td colspan="1" rowspan="1"> <p>KCD5XLUG960G</p> <p>KCD5XLUG3T84</p> </td>
    <td colspan="1" rowspan="1"> <p>DRC9H</p> <p>17C57</p> </td>
    <td colspan="1" rowspan="1">T79D5</td>
    <td colspan="1" rowspan="1">1.2.0</td>
    <td colspan="1" rowspan="1"> <p>960 GB</p> <p>3.84 TB</p> </td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">P4510</td>
    <td colspan="1" rowspan="1">SSDPE2KX040T8T</td>
    <td colspan="1" rowspan="1">5GMK0</td>
    <td colspan="1" rowspan="1">GD4X4</td>
    <td colspan="1" rowspan="1">VDV1DP25</td>
    <td colspan="1" rowspan="1">4 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">KIOXIA</td>
    <td colspan="1" rowspan="1">CM6</td>
    <td colspan="1" rowspan="1">Dell Ent NVMe FIPS CM6 RI 1.92 TB</td>
    <td colspan="1" rowspan="1">TXP72</td>
    <td colspan="1" rowspan="1">T79D5</td>
    <td colspan="1" rowspan="1">1.2.0</td>
    <td colspan="1" rowspan="1">1.92 TB</td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">P5500</td>
    <td colspan="1" rowspan="1"><p>Dell Ent NVMe P5500 RI U.2 1.92 TB</p> <p>Dell Ent NVMe P5500 RI U.2 3.84 TB</p> <p>Dell Ent NVMe P5500 RI U.2 7.68 TB</p></td>
    <td colspan="1" rowspan="1"><p>WPP9G</p> <p>KRT3G</p> <p>RNN67</p></td>
    <td colspan="1" rowspan="1">XXN1D</td>
    <td colspan="1" rowspan="1">1.2.3</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PM1733 V2</td>
    <td colspan="1" rowspan="1"><p>Dell Ent NVMe v2 AGN RI U.2 3.84 TB</p> <p>Dell Ent NVMe v2 AGN RI U.2 7.68 TB</p></td>
    <td colspan="1" rowspan="1"><p>G5N65</p> <p>DX74Y</p></td>
    <td colspan="1" rowspan="1">FJK0C</td>
    <td colspan="1" rowspan="1">2.2.0</td>
    <td colspan="1" rowspan="1"><p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Kioxia</td>
    <td colspan="1" rowspan="1">CM6,SP</td>
    <td colspan="1" rowspan="1"><p>KCM6XRUL1T92</p> <p>KCM6XRUL3T84</p> <p>KCM6XRUL7T86</p></td>
    <td colspan="1" rowspan="1"><p>N0VK0</p> <p>8W2G5</p> <p>VD0JX</p></td>
    <td colspan="1" rowspan="1">511TX</td>
    <td colspan="1" rowspan="1">2.1.8</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">Read Intensive</td>
    <td colspan="1" rowspan="1">Intel</td>
    <td colspan="1" rowspan="1">Arbordale Plus RR</td>
    <td colspan="1" rowspan="1"><p>SSDPF2KX019T1E</p> <p>SSDPF2KX038T1E</p> <p>SSDPF2KX076T1E</p></td>
    <td colspan="1" rowspan="1"><p>0HVC7</p> <p>77MRY</p> <p>90M2J</p></td>
    <td colspan="1" rowspan="1">J55N8</td>
    <td colspan="1" rowspan="1">1.0.0</td>
    <td colspan="1" rowspan="1"><p>1.92 TB</p> <p>3.84 TB</p> <p>7.68 TB</p></td>
    <td colspan="1" rowspan="1">Capacity Only</td>
</tr>
</tbody>
</table>
{{< /rawhtml >}}

### NVMe PCIe Add In Card (AIC) - Cache or Capacity

{{< rawhtml >}}
<table>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<colgroup>
<col>
</colgroup>
<thead>
<tr>
    <th colspan="1" rowspan="1">Platform</th>
    <th colspan="1" rowspan="1">Vendor</th>
    <th colspan="1" rowspan="1">Form Factor</th>
    <th colspan="1" rowspan="1">Description</th>
    <th colspan="1" rowspan="1">Model Number</th>
    <th colspan="1" rowspan="1">Device Part Number (P/N)</th>
    <th colspan="1" rowspan="1">Software Bundle</th>
    <th colspan="1" rowspan="1">Minimum Supported Version</th>
    <th colspan="1" rowspan="1">Capacity</th>
    <th colspan="1" rowspan="1">Use</th>
</tr>
</thead>
<tbody>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PCIe AIC</td>
    <td colspan="1" rowspan="1"> <p>PM1725A</p> </td>
    <td colspan="1" rowspan="1"> <p>MZPLL1T6HEHP-000D3</p> <p>MZPLL6T4HMLS-000D3</p> </td>
    <td colspan="1" rowspan="1"> <p>06V6M</p> <p>604N5</p> </td>
    <td colspan="1" rowspan="1">34C36</td>
    <td colspan="1" rowspan="1">1.2.1</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PCIe AIC</td>
    <td colspan="1" rowspan="1"> <p>PM1725b</p> </td>
    <td colspan="1" rowspan="1"> <p>MZPLL1T6HAJQ-000D3</p> <p>MZPLL6T4HMLA-000D3</p> </td>
    <td colspan="1" rowspan="1"> <p>FTX2R</p> <p>FW2K0</p> </td>
    <td colspan="1" rowspan="1">3F3N1</td>
    <td colspan="1" rowspan="1">1.2.2</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
<tr>
    <td colspan="1" rowspan="1">NVMe only</td>
    <td colspan="1" rowspan="1">Samsung</td>
    <td colspan="1" rowspan="1">PCIe AIC</td>
    <td colspan="1" rowspan="1"> <p>PM1735</p> </td>
    <td colspan="1" rowspan="1"> <p>MZPLJ1T6HBJR-00AD3</p> <p>MZPLJ6T4HALA-00AD3</p> </td>
    <td colspan="1" rowspan="1"> <p>Y7D7D</p> <p>91FXC</p> </td>
    <td colspan="1" rowspan="1">RDKVC</td>
    <td colspan="1" rowspan="1">2.4.0</td>
    <td colspan="1" rowspan="1"> <p>1.6 TB</p> <p>6.4 TB</p> </td>
    <td colspan="1" rowspan="1">Cache, Capacity</td>
</tr>
</tbody>
</table>

{{< /rawhtml >}}

{{< rawhtml >}}

</div>

</body>

</html>

{{< /rawhtml >}}
