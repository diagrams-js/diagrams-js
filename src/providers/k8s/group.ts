import { _K8s } from "./index.js";

class _Group extends _K8s {
  protected static override _type = "group";
  protected static override _iconDir = "k8s/group";
}

export class NS extends _Group {
  protected static override _icon = "ns.png";
}

// Aliases
export const Namespace = NS;

