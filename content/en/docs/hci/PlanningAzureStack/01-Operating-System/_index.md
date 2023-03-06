---
title: "01. Operating System"
linkTitle: "01. Operating System"
weight: 3
Description: >

---

# Planning Operating System

Storage Spaces Direct is technology, that is contained in both Azure Stack HCI OS and Windows Server Datacenter. It enables you to create hyperconverged cluster as there is a software storage bus, that enables every cluster node to access all physical disks in cluster.

![](PPT02.png)

<!-- ## ![Azure Stack HCI](prod-1906-poweredge-r740xd-12x35-azure-stack-hci-980x366.jpg) -->

## Familiar for IT

Both operating systems are easy to use for Windows Server admins that are familiar with failover clustering as both systems are using traditional technologies (Failover Clustering, Hyper-V) while domain joined. Therefore all tools (such as Server Manager, MMC and Windows Admin Center) can be used for management.

![](OSManagement.png)

## Hyper-Converged infrastructure stack

Both Azure Stack HCI and Windows Server are using the same technology that is well known since Windows Server 2016 - Storage Spaces Direct. Storage Spaces Direct enables all servers to see all disks from every node, therefore Storage Spaces stack can define resiliency and place data (slabs) in different fault domains. In this case nodes. Since all is happening in software, devices like high-speed NVMe disks can be used and shared using software stack using high-speed RDMA network adapters.

![](PPT04.png)

## Delivered as an Azure hybrid service

The difference between both products is in way the service is consumed. With Windows Server, it's traditional "buy and forget" model, where you can have operating system that is supported for 5+5 years (main+extended support) and you can pay upfront (OEM License, EA License ...). Azure Stack HCI licensing can be dynamic. Imagine investing into the system where you have 40 cores/node, but you will initially use 16 cores only - you can easily configure number of cores in DELL systems using Openmanage Integration in Windows Admin Center and then pay only for how much you consume.

![](WAC01.png)

![](WAC02.png)

Additionally you can purchase Windows Server licenses as [subscription add-on](https://learn.microsoft.com/en-us/azure-stack/hci/manage/vm-activate#windows-server-subscription)

![](Portal01.png)

## OS Lifecycle

The main difference is the way features are developed for each platform. Windows Server follows traditional development cycle (new version every 2.5-3years), while Azure Stack HCI follows cloud development cycle together with Windows Client OS (new version every year).

As result, [new features](https://learn.microsoft.com/en-us/azure-stack/hci/concepts/compare-windows-server#compare-technical-features) are developed and delivered into Azure Stack HCI OS every year.

![](PPT03.png)

While both Windows Server and Azure Stack HCI operating systems can run on virtualization host, going forward the main focus will be Azure Stack HCI OS for hosts and Windows Server for guest workloads. For more information see the video below.
{{< youtubestart EWv5JUHDR1k 423 >}}

Comparison of Azure Stack HCI and Windows Server is available [in official docs](https://learn.microsoft.com/en-us/azure-stack/hci/concepts/compare-windows-server).

![](PPT01.png)



