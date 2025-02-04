---
title: "BIOS and iDRAC configuration recommendations"
linkTitle: "BIOS and iDRAC configuration recommendations"
weight: 10000
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
{{< /rawhtml >}}

### BIOS Configuration
The following table lists the BIOS configuration settings for server nodes implemented as Storage Spaces Direct cluster nodes.

|BIOS Section| BIOS Token|PE Default Value|AX Value|Platform|
|---|---|---|---|---|
|Processor Settings|Virtualization Technology|Enabled|Enabled|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Processor Settings|x2APIC Mode|Enabled|Enabled|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Processor Settings|NUMA Nodes Per Socket|1|4|AX-6515<br><br>AX-7525|
|Processor Settings|Dell Controlled Turbo Setting (Optional)|Disabled|Enabled|AX-760<br><br>AX-750<br><br>AX-650<br><br>AX-4510c<br><br>AX-4520c|
|Integrated Devices|SR-IOV Global Enable|Disabled|Enabled|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|System Profile Settings|Systems Profile|Performance Per Watt (DAPC)|Performance|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|TPM Security|Off|On|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|AC Power Recovery|NA|On|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|AC Power Recovery Delay|NA|Random|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|Secure Boot|Disabled|Enabled|AX-640<br><br>AX-740xd<br><br>AX-650<br><br>AX-750<br><br>AX-6515<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Processor Settings|Kernel DMA Protection|Disabled|Enabled|AX-650<br><br>AX-750<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Processor Settings|Secure Memory Encryption|Disabled|Enabled|AX-7525|
|Processor Settings|Transparent Secure Memory Encryption|Disabled|Enabled|AX-7525|
|Systems Security|TPM PPI Bypass Provision|Disabled|Enabled|AX-650<br><br>AX-750<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|TPM PPI Bypass Clear|Disabled|Enabled|AX-650<br><br>AX-750<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|TPM2 Algorithm Selection|SHA1|SHA256|AX-650<br><br>AX-750<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|Intel TXT/AMD DRTM|Off|On|AX-650<br><br>AX-750<br><br>AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|
|Systems Security|SMM Security Mitigation|Disabled|Enabled|AX-7525<br><br>AX-760<br><br>AX-4510c<br><br>AX-4520c|

### iDRAC Configuration
The following table lists the iDRAC settings for server nodes configured as Azure Stack HCI cluster nodes.

{{< rawhtml >}}
<table style="width:100%">
    <tr>
        <th>Setting Category</th>
        <th>Setting Name</th>
        <th>Desired Value</th>
    </tr>
    <tr>
        <td rowspan="2">Network Settings</td>
        <td>Enable NIC</td>
        <td>Enable</td>
    </tr>
    <tr>
        <td>NIC Selection</td>
        <td>Dedicated</td>
    </tr>
    <tr>
        <td>IPMI Settings</td>
        <td>Enable IPMI Over LAN*</td>
        <td>Enable</td>
    </tr>
    <tr>
        <td rowspan="3">Power Configuration</td>
        <td>Redundancy Policy</td>
        <td>Input Power Redundant</td>
    </tr>
    <tr>
        <td>Enable Hot Spare</td>
        <td>Enabled</td>
    </tr>
    <tr>
        <td>Primary Power Supply Unit</td>
        <td>PSU1</td>
    </tr>
</table>
{{< /rawhtml >}}

> *Required only if you plan to use SCVMM based management of bare-metal server.
