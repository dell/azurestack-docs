---
title: "Release Artifacts for 16G - 2504"
linkTitle: "16G"
weight: 7496
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
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub OEM extension package with drivers and firmware updates</td><td>AzSHub_16G_Dell2504.2_OEMPackage.zip</td><td>2504.2</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub HLH ISO</td><td>MS2406_Dell2504.6.iso</td><td>2504.6</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager</td><td>AzSHub_Dell2504.2_LifecycleManager.zip</td><td>2504.2</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/></colgroup>
<tr><th>Component</th><th>Version</th><th>Notes</th></tr>
<tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2501.0.21</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501'>Azure Stack Hub 2501 update</a>. The hotfix will be available in the Admin portal.</td></tr>
<tr><td>Hardware Lifecycle Host</td><td>1.2406.0.8</td><td>N/A</td></tr>
<tr><td>Hardware Lifecycle Host ISO</td><td>2504.6</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2501.2966.112</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2501.2966.112'>Deployment Worksheet</a>.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5058385</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5058385'>KB5058385</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248)</td><td>10.6.0.3</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2504.2</td><td>Contains the driver and firmware update payload.</td></tr>
<tr><td>OEM package</td><td>2504.2</td><td>Includes the OEM extension package.</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BIOS</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K77XK'>K77XK</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XK9CT'>XK9CT</a></td><td rowspan="2">2.5.4</td><td rowspan="2">2.6.3</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">iDRAC9 with Lifecycle Controller</td><td rowspan="2">Firmware DUP</td><td rowspan="2">iDRAC with Lifecycle Controller</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5MXXN'>5MXXN</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WN31M'>WN31M</a></td><td rowspan="2">7.20.10.50</td><td rowspan="2">7.20.30.50</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">WS2022</td><td rowspan="2">Nvidia ConnectX-6 Lx</td><td rowspan="2">Driver DUP</td><td rowspan="2">Network/RDMA</td><td rowspan="2">R5WK9</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G6M58'>G6M58</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3G71F'>3G71F</a></td><td rowspan="2">24.04.03</td><td rowspan="2">25.1</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">NVMe Switch Storage Backplane</td><td rowspan="2">Firmware DUP</td><td rowspan="2">Storage - Backplane</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WR74F'>WR74F</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R39FM'>R39FM</a></td><td rowspan="2">3.32</td><td rowspan="2">3.33</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="1">WS2022</td><td rowspan="1">PERC H355 Adapter</td><td rowspan="1">Driver DUP</td><td rowspan="1">Storage - HBA</td><td rowspan="1">VCV6T</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WC00M'>WC00M</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=6R1TD'>6R1TD</a></td><td rowspan="1">7.726.01.0</td><td rowspan="1">7.730.02.00</td></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="1">N/A</td><td rowspan="1">PERC H355 Adapter</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - HBA</td><td rowspan="1">VCV6T</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RRR7N'>RRR7N</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PXRX0'>PXRX0</a></td><td rowspan="1">52.26.0-5179</td><td rowspan="1">52.30.0-6115</td></tr>
<tr><td>N/A</td><td>16G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HD1V8'>HD1V8</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=82WVT'>82WVT</a></td><td rowspan="1">10.6.0.1</td><td rowspan="1">10.6.0.3</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
