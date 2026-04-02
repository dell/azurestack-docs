---
title: "Azure Local Golden Images (Dell 2603)"
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
   {{< tab header="OS build 26100.1742 (24H2)" lang='en' >}}
       <h3>Azure Local Golden Images for Solution versions 12.2510.1002.* - 12.2603.1002.* with Dell SBE 5.0.2603.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=WJTDD">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2603 drivers, and Dell SBE 5.0.2603.1709 for AX-770, AX-670 | ISO version A00</a></td>
       <td>AX-770<br>AX-670</td>
       <td rowspan='5'>Deploy<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='5'>Use with Azure Local instances running Solution version 12.*.1002.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=W6VT2">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2603 drivers, and Dell SBE 5.0.2603.1641 for AX-760, AX-660, AX-4510c, AX-4520c | ISO version A00</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c<br>APEX MC-760<br>APEX MC-660<br>APEX MC-4510c<br>APEX MC-4520c</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=9MN35">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2603 drivers, and Dell SBE 5.0.2603.1522 for AX-750, AX-650 | ISO version A00</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=8DT7Y">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2603 drivers, and Dell SBE 5.0.2603.1522 for AX-7525, AX-6515 | ISO version A00</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=N2NDW">Azure Stack HCI 24H2 with OS customization 12.2510.0.3165, Dell 2603 drivers, and Dell SBE 5.0.2603.1407 for AX-740xd, AX-640 | ISO version A00</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

   {{< /tab >}}
{{< /tabpane >}}
