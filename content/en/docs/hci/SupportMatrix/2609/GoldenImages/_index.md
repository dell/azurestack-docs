---
title: "Azure Local Golden Images (Dell 2609)"
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
PowerEdge branded servers can only be deployed with Azure Local when enabled with Dell Private Cloud.
{{% /alert %}}

The Dell Technologies provided operating system golden image for Azure Local instances is for imaging servers prior to deploying an Azure Local instance. This image is based on the Azure Stack HCI OS, with Microsoft customization and Dell Technologies customization. This image includes drivers provided by Dell Technologies.

{{< tabpane text=true >}}
   {{% tab header="**Azure Stack HCI OS**:" disabled=true /%}}
   {{< tab header="OS build 26100.32230 (24H2)" lang='en' >}}
       <h3>Azure Local Golden Images for Solution versions 12.2610.1004.* - 12.2703.1004.* with Dell SBE 5.0.2609.*</h3>
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
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=JHDTC">Azure Stack HCI 24H2 with OS customization 12.2610.0.3098, Dell 2609 drivers, and Dell SBE 5.0.2609.1715 for AX-670, AX-770, PowerEdge R670, and PowerEdge R770 | ISO version A00</a></td>
       <td>AX-770<br>AX-670<br>PowerEdge R770<br>PowerEdge R670</td>
       <td rowspan='5'>Deploy<br><br>Instance Expansion (Add-Server)<br><br>Machine Repair</td>
       <td rowspan='5'>Use with Azure Local instances running Solution version 12.*.1004.*<br><br>Specify Azure Local instance Solution version when running Arc registration using:<br><i>Invoke-AzStackHciArcInitialization -TargetSolutionVersion [Solution Version]</i></td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=YCF3T">Azure Stack HCI 24H2 with OS customization 12.2610.0.3098, Dell 2609 drivers, and Dell SBE 5.0.2609.1611 for AX-660, AX-760, AX-4510c, AX-4520c, PowerEdge R660, and PowerEdge R760 | ISO version A00</a></td>
       <td>AX-760<br>AX-660<br>AX-4510c<br>AX-4520c<br>APEX MC-760<br>APEX MC-660<br>APEX MC-4510c<br>APEX MC-4520c<br>PowerEdge R760<br>PowerEdge R660</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=NFYC4">Azure Stack HCI 24H2 with OS customization 12.2610.0.3098, Dell 2609 drivers, and Dell SBE 5.0.2609.1511 for AX-650, and AX-750 | ISO version A00</a></td>
       <td>AX-750<br>AX-650</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=F32YP">Azure Stack HCI 24H2 with OS customization 12.2610.0.3098, Dell 2609 drivers, and Dell SBE 5.0.2609.1511 for AX-6515, and AX-7525 | ISO version A00</a></td>
       <td>AX-7525<br>AX-6515</td>
       </tr>
       <tr>
       <td><a href="https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=212R6">The Dell provided operating system golden image for Azure Local instances is for imaging servers prior to deploying an Azure Local instance. This image is based on the Azure Stack HCI 24H2 OS, with Microsoft customization 12.2610.0.3098 and Dell A00 customization. This image includes September 2026 (2609) drivers and SBE 5.0.2609.1409 provided by Dell.</a></td>
       <td>AX-640<br>AX-740xd</td>
       </tr>
       </tbody>
       </table>

   {{< /tab >}}
{{< /tabpane >}}
