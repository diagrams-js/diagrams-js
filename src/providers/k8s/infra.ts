import { _K8s } from "./index.js";

class _Infra extends _K8s {
  protected static override _type = "infra";
  protected static override _iconDir = "k8s/infra";
}

export class ETCD extends _Infra {
  protected static override _icon = "etcd.png";
}

export class Master extends _Infra {
  protected static override _icon = "master.png";
}

export class Node extends _Infra {
  protected static override _icon = "node.png";
}

