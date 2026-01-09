---
title: "Azure Local Golden Images (Dell 2512)"
linkTitle: "Golden Images"
weight: 15000
Description: >
hide_feedback: false
comment: "Copyright © 2026 Dell Inc."

---

{{< rawhtml >}}
{{< customtable >}}
{{< /rawhtml >}}

{{% alert title="NOTE" color="primary" %}}
SBE package 4.2.2512.xxxx and newer will only support Azure Local solution versions 12.\*.1001.\* or 12.\*.1002.\* (HCI OS 24H2) and newer.

Dell will support the use of SBE package 4.2.2509.xxxx on Azure Local instances running version 11.* (HCI OS 23H2) until April 2026. Dell recommends that instances running version 11.* be upgraded to 12.* as soon as possible to remain in a supported state.
{{% /alert %}}

The Dell Technologies provided operating system golden image for Azure Local instances is for imaging AX servers prior to deploying an Azure Local instance. This image is based on the Azure Stack HCI OS, with Microsoft customization and Dell Technologies customization. This image includes drivers provided by Dell Technologies.

{{< tabpane text=true >}}
   {{% tab header="**Azure Stack HCI OS**:" disabled=true /%}}
   {{< tab header="OS build 26100.xxxx (24H2)" lang='en' >}}
       <h3>Azure Local Golden Images for Solution versions 12.2510.1002.* - 12.2604.1002.* with Dell SBE 4.2.2512.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=RCWKY">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2512 drivers, and Dell SBE 4.2.2512.1616 for AX-760, AX-660, AX-4510c, AX-4520c, APEX MC-760, APEX MC-660, APEX MC-4510c, and APEX MC-4520c</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c<br>APEX MC-760<br>APEX MC-660<br>APEX MC-4510c<br>APEX MC-4520c</td>
       <td rowspan='4'>Deploy<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='4'>Use with Azure Local instances running Solution version 12.*.1002.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=CG6F3">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2512 drivers, and Dell SBE 4.2.2512.1514 for AX-750 and AX-650</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=X6WTW">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2512 drivers, and Dell SBE 4.2.2512.1514 for AX-7525 and AX-6515</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8MXRD">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2512 drivers, and Dell SBE 4.2.2512.1403 for AX-740xd and AX-640</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

   {{< /tab >}}
{{< /tabpane >}}
