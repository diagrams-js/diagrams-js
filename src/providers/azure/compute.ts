import { _Azure } from "./index.js";

class _Compute extends _Azure {
  protected static override _type = "compute";
  protected static override _iconDir = "azure/compute";
}

export class AppServices extends _Compute {
  protected static override _icon = "app-services.png";
}

export class ApplicationGroup extends _Compute {
  protected static override _icon = "application-group.png";
}

export class AutomanagedVM extends _Compute {
  protected static override _icon = "automanaged-vm.png";
}

export class AvailabilitySets extends _Compute {
  protected static override _icon = "availability-sets.png";
}

export class AzureComputeGalleries extends _Compute {
  protected static override _icon = "azure-compute-galleries.png";
}

export class AzureSpringApps extends _Compute {
  protected static override _icon = "azure-spring-apps.png";
}

export class BatchAccounts extends _Compute {
  protected static override _icon = "batch-accounts.png";
}

export class CitrixVirtualDesktopsEssentials extends _Compute {
  protected static override _icon = "citrix-virtual-desktops-essentials.png";
}

export class CloudServicesClassic extends _Compute {
  protected static override _icon = "cloud-services-classic.png";
}

export class CloudServices extends _Compute {
  protected static override _icon = "cloud-services.png";
}

export class CloudsimpleVirtualMachines extends _Compute {
  protected static override _icon = "cloudsimple-virtual-machines.png";
}

export class ContainerApps extends _Compute {
  protected static override _icon = "container-apps.png";
}

export class ContainerInstances extends _Compute {
  protected static override _icon = "container-instances.png";
}

export class ContainerRegistries extends _Compute {
  protected static override _icon = "container-registries.png";
}

export class ContainerServicesDeprecated extends _Compute {
  protected static override _icon = "container-services-deprecated.png";
}

export class DiskEncryptionSets extends _Compute {
  protected static override _icon = "disk-encryption-sets.png";
}

export class DiskSnapshots extends _Compute {
  protected static override _icon = "disk-snapshots.png";
}

export class DisksClassic extends _Compute {
  protected static override _icon = "disks-classic.png";
}

export class DisksSnapshots extends _Compute {
  protected static override _icon = "disks-snapshots.png";
}

export class Disks extends _Compute {
  protected static override _icon = "disks.png";
}

export class FunctionApps extends _Compute {
  protected static override _icon = "function-apps.png";
}

export class HostGroups extends _Compute {
  protected static override _icon = "host-groups.png";
}

export class HostPools extends _Compute {
  protected static override _icon = "host-pools.png";
}

export class Hosts extends _Compute {
  protected static override _icon = "hosts.png";
}

export class ImageDefinitions extends _Compute {
  protected static override _icon = "image-definitions.png";
}

export class ImageTemplates extends _Compute {
  protected static override _icon = "image-templates.png";
}

export class ImageVersions extends _Compute {
  protected static override _icon = "image-versions.png";
}

export class Images extends _Compute {
  protected static override _icon = "images.png";
}

export class KubernetesServices extends _Compute {
  protected static override _icon = "kubernetes-services.png";
}

export class MaintenanceConfiguration extends _Compute {
  protected static override _icon = "maintenance-configuration.png";
}

export class ManagedServiceFabric extends _Compute {
  protected static override _icon = "managed-service-fabric.png";
}

export class MeshApplications extends _Compute {
  protected static override _icon = "mesh-applications.png";
}

export class MetricsAdvisor extends _Compute {
  protected static override _icon = "metrics-advisor.png";
}

export class OsImagesClassic extends _Compute {
  protected static override _icon = "os-images-classic.png";
}

export class OsImages extends _Compute {
  protected static override _icon = "os-images.png";
}

export class RestorePointsCollections extends _Compute {
  protected static override _icon = "restore-points-collections.png";
}

export class RestorePoints extends _Compute {
  protected static override _icon = "restore-points.png";
}

export class SAPHANAOnAzure extends _Compute {
  protected static override _icon = "sap-hana-on-azure.png";
}

export class ServiceFabricClusters extends _Compute {
  protected static override _icon = "service-fabric-clusters.png";
}

export class SharedImageGalleries extends _Compute {
  protected static override _icon = "shared-image-galleries.png";
}

export class SpringCloud extends _Compute {
  protected static override _icon = "spring-cloud.png";
}

export class VirtualMachine extends _Compute {
  protected static override _icon = "virtual-machine.png";
}

export class VirtualMachinesClassic extends _Compute {
  protected static override _icon = "virtual-machines-classic.png";
}

export class VMClassic extends _Compute {
  protected static override _icon = "vm-classic.png";
}

export class VMImagesClassic extends _Compute {
  protected static override _icon = "vm-images-classic.png";
}

export class VMImages extends _Compute {
  protected static override _icon = "vm-images.png";
}

export class VMLinux extends _Compute {
  protected static override _icon = "vm-linux.png";
}

export class VMScaleSet extends _Compute {
  protected static override _icon = "vm-scale-set.png";
}

export class VMScaleSets extends _Compute {
  protected static override _icon = "vm-scale-sets.png";
}

export class VMWindows extends _Compute {
  protected static override _icon = "vm-windows.png";
}

export class VM extends _Compute {
  protected static override _icon = "vm.png";
}

export class Workspaces2 extends _Compute {
  protected static override _icon = "workspaces-2.png";
}

export class Workspaces extends _Compute {
  protected static override _icon = "workspaces.png";
}

// Aliases
export const ACR = ContainerRegistries;
export const AKS = KubernetesServices;
export const VMSS = VMScaleSet;

