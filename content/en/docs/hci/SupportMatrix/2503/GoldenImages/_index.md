---
title: "Azure Local Golden Images (Dell 2503)"
linkTitle: "Golden Images"
weight: 15000
Description: >
hide_feedback: false
comment: "Copyright © 2026 Dell Inc."

---

{{< rawhtml >}}
{{< customtable >}}
{{< /rawhtml >}}

The Dell Technologies provided operating system golden image for Azure Local instances is for imaging AX servers prior to deploying an Azure Local instance. This image is based on the Azure Stack HCI OS, with Microsoft customization and Dell Technologies customization. This image includes drivers provided by Dell Technologies.

### Azure Local Golden Images for Solution version 10.*
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
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=00F66">Azure Stack HCI OS Version 23H2 with OS customization 10.2503.0.3057 and 2503 drivers for AX-760, AX-660, AX-4510c, AX-4520c | ISO version 25032901</a></td>
<td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
<td rowspan='3'>Instance Deployment<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
<td rowspan='3'>Use with Azure Local instances running Solution version 10.2503.0.*</td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=7R82Y">Azure Stack HCI OS Version 23H2 with OS customization 10.2503.0.3057 and 2503 drivers for 15G, AX-750, AX-650 | ISO version 25033001</a></td>
<td>AX-750<br>AX-650</td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=00Y5P">Azure Stack HCI OS Version 23H2 with OS customization 10.2503.0.3057 and 2503 drivers for 15G, AX-7525, AX-6515 | ISO version 25033001</a></td>
<td>AX-7525<br>AX-6515</td>
</tr>
</tbody>
</table>

### Azure Local Golden Images for Solution version 11.*
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
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NCYPH">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and 2503 drivers for AX-760, AX-660, AX-4510c, AX-4520c | ISO version 25041601</a></td>
<td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
<td rowspan='3'>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
<td rowspan='3'>Use with Azure Local instances running Solution version 11.*.1001.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i><br><br><b>Important: Cannot be used for instance deployment</b></td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=MYK83">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and 2503 drivers for 15G, AX-750, AX-650 | ISO version 25041601</a></td>
<td>AX-750<br>AX-650</td>
</tr>
<tr>
<td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HXMPM">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and 2503 drivers for 15G, AX-7525, AX-6515 | ISO version 25041601</a></td>
<td>AX-7525<br>AX-6515</td>
</tr>
</tbody>
</table>
