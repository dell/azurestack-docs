---
title: "Azure Local Golden Images (2506)"
linkTitle: "Golden Images"
weight: 15000
Description: >
hide_feedback: false

---

{{< rawhtml >}}
{{< customtable >}}
{{< /rawhtml >}}

The Dell Technologies provided operating system golden image for Azure Local instances is for imaging AX servers prior to deploying an Azure Local instance. This image is based on the Azure Stack HCI OS, with Microsoft customization and Dell Technologies customization. This image includes drivers provided by Dell Technologies.

### Azure Local Golden Images for Solution version 12.\*.1001.\*
<table>
<thead>
<tr>
<th>Azure Stack HCI OS Golden Image for Azure Local</th>
<th>Platform</th>
<th>Use</th>
<th>Instance Expansion and Machine Repair Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WJYM9">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and 2506 drivers for AX-760, AX-660, AX-4510c, AX-4520c | ISO version A00</a></td>
<td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
<td rowspan='1'>Deploy*<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
<td rowspan='4'>Use with Azure Local instances running Solution version 12.*.1001.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=FRRHM">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and 2506 drivers for AX-750, AX-650 | ISO version A00</a></td>
<td>AX-750<br>AX-650</td>
<td rowspan='3'>Deploy<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PT7YY">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and 2506 drivers for AX-7525, AX-6515 | ISO version A00</a></td>
<td>AX-7525<br>AX-6515</td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RMCVY">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and 2506 drivers for AX-740xd, AX-640 | ISO version A00</a></td>
<td>AX-640<br>AX-740xd</td>
</tr>
</tbody>
</table>

\* Not supported for imaging severs that have OEM licensing. See [KB000353577](https://www.dell.com/support/kbdoc/en-us/000353577/azure-local-bugcheck-or-recovery-console-during-deployment-on-servers-with-oem-licensing?lang=en) for details.
