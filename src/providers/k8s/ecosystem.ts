import { _K8s } from "./index.js";

class _Ecosystem extends _K8s {
  protected static override _type = "ecosystem";
  protected static override _iconDir = "k8s/ecosystem";
}

export class ExternalDns extends _Ecosystem {
  protected static override _icon = "external-dns.png";
}

export class Helm extends _Ecosystem {
  protected static override _icon = "helm.png";
}

export class Krew extends _Ecosystem {
  protected static override _icon = "krew.png";
}

export class Kustomize extends _Ecosystem {
  protected static override _icon = "kustomize.png";
}

