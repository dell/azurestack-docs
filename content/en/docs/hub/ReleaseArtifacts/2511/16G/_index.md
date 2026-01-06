---
title: "Release Artifacts for 16G - Dell 2511"
linkTitle: "16G"
weight: 7489
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
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub OEM extension package with drivers and firmware updates</td><td>AzSHub_16G_Dell2511.2_OEMPackage.zip</td><td>2511.2</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub HLH ISO</td><td>MS2506_Dell2511.3.iso</td><td>2511.3</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager</td><td>AzSHub_Dell2511.5_LifecycleManager.zip</td><td>2511.5</td></tr>
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
<tr><td>Hardware Lifecycle Host ISO</td><td>2511.3</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2506.3141.132</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2506.3141.132'>Deployment Worksheet</a>.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5068787</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5068787'>KB5068787</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248)</td><td>10.6.0.6</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2511.2</td><td>Contains the driver and firmware update payload.</td></tr>
<tr><td>OEM package</td><td>2511.2</td><td>Includes the OEM extension package.</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BIOS</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=2GWNP'>2GWNP</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8NHX5'>8NHX5</a></td><td rowspan="2">2.7.4</td><td rowspan="2">2.8.1</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">Non-expander Storage Backplane</td><td rowspan="2">Firmware DUP</td><td rowspan="2">Storage - Backplane</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=GXH37'>GXH37</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=58MWX'>58MWX</a></td><td rowspan="2">7.1</td><td rowspan="2">7.2</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">Nvidia ConnectX-6 Lx</td><td rowspan="2">Firmware DUP</td><td rowspan="2">Network/RDMA</td><td rowspan="2">R5WK9</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=1H4PM'>1H4PM</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K65HP'>K65HP</a></td><td rowspan="2">26.41.1000</td><td rowspan="2">26.44.10.36</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">WS2022</td><td rowspan="2">Nvidia ConnectX-6 Lx</td><td rowspan="2">Driver DUP</td><td rowspan="2">Network/RDMA</td><td rowspan="2">R5WK9</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3G71F'>3G71F</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PWYXM'>PWYXM</a></td><td rowspan="2">25.1</td><td rowspan="2">25.07</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="1">N/A</td><td rowspan="1">PERC H355 Adapter</td><td rowspan="1">Firmware DUP</td><td rowspan="1">Storage - HBA</td><td rowspan="1">VCV6T</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PXRX0'>PXRX0</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=1DHXW'>1DHXW</a></td><td rowspan="1">52.30.0-6115</td><td rowspan="1">52.30.0-6347</td></tr>
<tr><td>N/A</td><td>16G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P8GNV'>P8GNV</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=214KP'>214KP</a></td><td rowspan="1">10.6.0.5</td><td rowspan="1">10.6.0.6</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
