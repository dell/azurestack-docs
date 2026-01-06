---
title: "Azure Local Golden Images (Dell 2509)"
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

{{< tabpane text=true >}}
   {{% tab header="**Azure Stack HCI OS**:" disabled=true /%}}
   {{< tab header="OS build 26100.xxxx (24H2)" lang='en' >}}
       <h3>Azure Local Golden Images for Solution versions 12.2510.1002.* - 12.2604.1002.* with Dell SBE 4.2.2509.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=V77HH">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165 and Dell 2509 drivers and Dell SBE 4.2.2509.1625 for AX-760, AX-660, AX-4510c, AX-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
       <td rowspan='4'>Deploy<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='4'>Use with Azure Local instances running Solution version 12.*.1002.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=814HF">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-750, AX-650</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=PR9NV">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-7525, AX-6515</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=06G2R">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165 and Dell 2509 drivers and Dell SBE 4.2.2509.1411 for AX-740xd, AX-640</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

       <h3>Azure Local Golden Images for Solution versions 12.2504.1001.* - 12.2509.1001.* with Dell SBE 4.2.2509.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8C8KK">Azure Stack HCI 24H2 with OS customization 12.2509.0.3051 and Dell 2509 drivers and Dell SBE 4.2.2509.1625 for AX-760, AX-660, AX-4510c, AX-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
       <td rowspan='5'>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='5'>Use with Azure Local instances running Solution version 12.*.1001.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X988J">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-750, AX-650</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NPM59">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-7525, AX-6515</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=K0MHP">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and Dell 2509 drivers and Dell SBE 4.2.2509.1411 for AX-740xd, AX-640</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8HKX9">Azure Stack HCI 24H2 with OS customization 12.2506.0.3136 and Dell 2509 drivers and Dell SBE 4.2.2509.1625 for AX-760, AX-660, AX-4510c, AX-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
       </tr>
       </tbody>
       </table>

   {{< /tab >}}
   {{< tab header="OS build 25398.xxxx (23H2)" lang='en' >}}
       <h3>Azure Local Golden Images for Solution versions 11.2510.1002.* - 11.2604.1002.* with Dell SBE 4.2.2509.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=H4RK4">Azure Stack HCI 23H2 with OS customization 11.2510.0.3164 and Dell 2509 drivers and Dell SBE 4.2.2509.1625 for AX-760, AX-660, AX-4510c, AX-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
       <td rowspan='4'>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='4'>Use with Azure Local instances running Solution version 11.*.1002.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=5GWGG">Azure Stack HCI 23H2 with OS customization 11.2510.0.3164 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-750, AX-650</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0JYK5">Azure Stack HCI 23H2 with OS customization 11.2510.0.3164 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-7525, AX-6515</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X1XKM">Azure Stack HCI 23H2 with OS customization 11.2510.0.3164 and Dell 2509 drivers and Dell SBE 4.2.2509.1411 for AX-740xd, AX-640</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

       <h3>Azure Local Golden Images for Solution versions 11.2504.1001.* - 11.2509.1001.* with Dell SBE 4.2.2509.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=6PDNC">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and Dell 2509 drivers and Dell SBE 4.2.2509.1625 for AX-760, AX-660, AX-4510c, AX-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c</td>
       <td rowspan='4'>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='4'>Use with Azure Local instances running Solution version 11.*.1001.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=0YKNF">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-750, AX-650</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NMRC5">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and Dell 2509 drivers and Dell SBE 4.2.2509.1516 for AX-7525, AX-6515</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=HPX73">Azure Stack HCI 23H2 with OS customization 11.2504.0.3141 and Dell 2509 drivers and Dell SBE 4.2.2509.1411 for AX-740xd, AX-640</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

   {{< /tab >}}
{{< /tabpane >}}
