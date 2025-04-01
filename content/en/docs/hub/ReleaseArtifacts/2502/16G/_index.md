---
title: "Release Artifacts for 16G - 2502"
linkTitle: "16G"
weight: 7498
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
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>File Name</th><th>Supported Version</th></tr> <tr><td>Dell Integrated Systems for Microsoft Azure Stack Hub OEM extension package with drivers and firmware updates</td><td>AzSHub_16G_Dell2502.3_OEMPackage.zip</td><td>2502.3</td></tr> <tr><td>Dell Integrated Systems for Microsoft Azure Stack Hub HLH ISO</td><td>MS2406_Dell2502.5.iso</td><td>2502.5</td></tr> <tr><td>Dell Integrated Systems for Microsoft Azure Stack Hub Lifecycle Manager</td><td>AzSHub_Dell2502.32_LifecycleManager.zip</td><td>2502.32</td></tr> </table><br>
{{< /rawhtml >}}
### Software Versions
{{< rawhtml >}}
<table> <colgroup><col/><col/><col/></colgroup> <tr><th>Component</th><th>Version</th><th>Notes</th></tr> <tr><td>Microsoft Azure Stack Hub Baseline (for bare-metal deployment)</td><td>1.2501.0.21</td><td><a href='https://learn.microsoft.com/en-us/azure-stack/operator/release-notes?view=azs-2501'>Azure Stack Hub 2501 update</a>. The hotfix will be available in the Admin portal.</td></tr> <tr><td>Hardware Lifecycle Host</td><td>1.2406.0.8</td><td>N/A</td></tr> <tr><td>Hardware Lifecycle Host ISO</td><td>2502.5</td><td>N/A</td></tr> <tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2501.2966.112</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2501.2966.112'>Deployment Worksheet</a>.</td></tr> <tr><td>Windows Server 2022 LCU</td><td>KB5051979</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5051979'>KB5051979</a>.</td></tr> <tr><td>OS10 switch firmware (S5248)</td><td>10.6.0.1</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr> <tr><td>OEM extension package</td><td>2.4.2502.3</td><td>Contains the driver and firmware update payload.</td></tr> <tr><td>OEM package</td><td>2502.3</td><td>Includes the OEM extension package.</td></tr> </table><br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BIOS</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PJYMD'>PJYMD</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K77XK'>K77XK</a></td><td rowspan="2">2.4.4</td><td rowspan="2">2.5.4</td></tr><tr><td>Scale Units (PowerEdge R760)</td><td>R760</td><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BOSS-N1</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BOSS-N1</td><td rowspan="2">2MFVD</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=3P9J3'>3P9J3</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=33TD2'>33TD2</a></td><td rowspan="2">2.1.13.2025</td><td rowspan="2">2.1.13.2033</td></tr><tr><td>Scale Units (PowerEdge R760)</td><td>R760</td><tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">iDRAC9 with Lifecycle Controller</td><td rowspan="2">Firmware DUP</td><td rowspan="2">iDRAC with Lifecycle Controller</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=92MM7'>92MM7</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5MXXN'>5MXXN</a></td><td rowspan="2">7.10.90.00</td><td rowspan="2">7.20.10.50</td></tr><tr><td>Scale Units (PowerEdge R760)</td><td>R760</td><tr><td>N/A</td><td>16G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=DNVRC'>DNVRC</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HD1V8'>HD1V8</a></td><td rowspan="1">10.5.6.5</td><td rowspan="1">10.6.0.1</td></tr></table><br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
