---
title: "Release Artifacts for 16G - Dell 2606"
linkTitle: "16G"
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
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub OEM extension package with drivers and firmware updates</td><td>AzSHub_16G_Dell2606.3_OEMPackage.zip</td><td>2606.3</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub HLH ISO</td><td>MS2601_Dell2606.3.iso</td><td>2606.3</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager</td><td>AzSHub_Dell2606.2_LifecycleManager.zip</td><td>2606.2</td></tr>
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
<tr><td>Windows Server 2022 LCU</td><td>KB5087545</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5087545'>KB5087545</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248)</td><td>10.6.1.1</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2606.3</td><td>Contains the driver and firmware update payload.</td></tr>
<tr><td>OEM package</td><td>2606.3</td><td>Includes the OEM extension package.</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BIOS</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=457WM'>457WM</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=G93PH'>G93PH</a></td><td rowspan="2">2.9.4</td><td rowspan="2">2.10.1</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BOSS-N1</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BOSS-N1</td><td rowspan="2">2MFVD</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C6MVR'>C6MVR</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WGYK7'>WGYK7</a></td><td rowspan="2">2.1.13.2037</td><td rowspan="2">2.1.13.2038</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td><td rowspan="1">WS2022</td><td rowspan="1">HBA355i</td><td rowspan="1">Driver DUP</td><td rowspan="1">Storage - HBA</td><td rowspan="1">K6MCJ</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=M2P63'>M2P63</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=R31NP'>R31NP</a></td><td rowspan="1">2.61.48.00</td><td rowspan="1">2.61.74.00</td></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">WS2022</td><td rowspan="2">Nvidia ConnectX-6 Lx</td><td rowspan="2">Driver DUP</td><td rowspan="2">Network/RDMA</td><td rowspan="2">R5WK9</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FWT33'>FWT33</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3T3MK'>3T3MK</a></td><td rowspan="2">25.10.51000</td><td rowspan="2">26.001.03</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">Nvidia ConnectX-6 Lx</td><td rowspan="2">Firmware DUP</td><td rowspan="2">Network/RDMA</td><td rowspan="2">R5WK9</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XG5FJ'>XG5FJ</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NMDJG'>NMDJG</a></td><td rowspan="2">26.47.10.88</td><td rowspan="2">26.48.10.00</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>N/A</td><td>16G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8N9K7'>8N9K7</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5F3RV'>5F3RV</a></td><td rowspan="1">10.6.1.0</td><td rowspan="1">10.6.1.1</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
