---
title: "Release Artifacts for 16G - Dell 2508"
linkTitle: "16G"
weight: 7492
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
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub OEM extension package with drivers and firmware updates</td><td>AzSHub_16G_Dell2508.4_OEMPackage.zip</td><td>2508.4</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub HLH ISO</td><td>MS2506_Dell2508.9.iso</td><td>2508.9</td></tr>
<tr><td>Dell Integrated System for Microsoft Azure Stack Hub Lifecycle Manager</td><td>AzSHub_Dell2508.3_LifecycleManager.zip</td><td>2508.3</td></tr>
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
<tr><td>Hardware Lifecycle Host ISO</td><td>2508.9</td><td>N/A</td></tr>
<tr><td>Microsoft Partner Toolkit (PTK)</td><td>1.2506.3141.132</td><td>Includes the <a href='https://www.powershellgallery.com/packages/Azs.Deployment.Worksheet/1.2506.3141.132'>Deployment Worksheet</a>.</td></tr>
<tr><td>Windows Server 2022 LCU</td><td>KB5058385</td><td>See the Windows support document <a href='https://support.microsoft.com/help/5058385'>KB5058385</a>.</td></tr>
<tr><td>OS10 switch firmware (S5248)</td><td>10.6.0.5</td><td>OS10 switch firmware is included in the OEM Extension Package.</td></tr>
<tr><td>OEM extension package</td><td>2.4.2508.4</td><td>Contains the driver and firmware update payload.</td></tr>
<tr><td>OEM package</td><td>2508.4</td><td>Includes the OEM extension package.</td></tr>
</table>
<br>
{{< /rawhtml >}}
### Updated OEM Package components
{{< rawhtml >}}
<table>
<colgroup><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/><col/></colgroup>
<tr><th>Server Type</th><th>Platform</th><th>OS Type</th><th>Component</th><th>Type</th><th>Category</th><th>Dell P/N</th><th>Previous SWB</th><th>Target SWB</th><th>Previous Version</th><th>Target Version</th></tr>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BIOS</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BIOS</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=XK9CT'>XK9CT</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=W23G7'>W23G7</a></td><td rowspan="2">2.6.3</td><td rowspan="2">2.7.5</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">BOSS-N1</td><td rowspan="2">Firmware DUP</td><td rowspan="2">BOSS-N1</td><td rowspan="2">2MFVD</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=33TD2'>33TD2</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=C6MVR'>C6MVR</a></td><td rowspan="2">2.1.13.2033</td><td rowspan="2">2.1.13.2037</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>Hardware Lifecycle Host/HLH (PowerEdge R760)</td><td>R760</td><td rowspan="2">N/A</td><td rowspan="2">iDRAC9 with Lifecycle Controller</td><td rowspan="2">Firmware DUP</td><td rowspan="2">iDRAC with Lifecycle Controller</td><td rowspan="2">N/A</td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WN31M'>WN31M</a></td><td rowspan="2"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=6CKFT'>6CKFT</a></td><td rowspan="2">7.20.30.50</td><td rowspan="2">7.20.60.50</td></tr>
<tr><td>Scale Units (PowerEdge R760)</td><td>R760</td>
<tr><td>N/A</td><td>16G</td><td rowspan="1">N/A</td><td rowspan="1">S5248F-ON</td><td rowspan="1">Switch Firmware</td><td rowspan="1">TOR</td><td rowspan="1">N/A</td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=82WVT'>82WVT</a></td><td rowspan="1"><a href='https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=P8GNV'>P8GNV</a></td><td rowspan="1">10.6.0.3</td><td rowspan="1">10.6.0.5</td></tr>
</table>
<br>
{{< /rawhtml >}}

{{< rawhtml >}}
</div>

</body>

</html>


{{< /rawhtml >}}
