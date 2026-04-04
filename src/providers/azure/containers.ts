import { _Azure } from "./index.js";

class _Containers extends _Azure {
  protected static override _type = "containers";
  protected static override _iconDir = "azure/containers";
}

export class AppServices extends _Containers {
  protected static override _icon = "app-services.png";
}

export class AzureRedHatOpenshift extends _Containers {
  protected static override _icon = "azure-red-hat-openshift.png";
}

export class BatchAccounts extends _Containers {
  protected static override _icon = "batch-accounts.png";
}

export class ContainerInstances extends _Containers {
  protected static override _icon = "container-instances.png";
}

export class ContainerRegistries extends _Containers {
  protected static override _icon = "container-registries.png";
}

export class KubernetesServices extends _Containers {
  protected static override _icon = "kubernetes-services.png";
}

export class ServiceFabricClusters extends _Containers {
  protected static override _icon = "service-fabric-clusters.png";
}

