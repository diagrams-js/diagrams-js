import { _K8s } from "./index.js";

class _Network extends _K8s {
  protected static override _type = "network";
  protected static override _iconDir = "k8s/network";
}

export class Ep extends _Network {
  protected static override _icon = "ep.png";
}

export class Ing extends _Network {
  protected static override _icon = "ing.png";
}

export class Netpol extends _Network {
  protected static override _icon = "netpol.png";
}

export class SVC extends _Network {
  protected static override _icon = "svc.png";
}

// Aliases
export const Endpoint = Ep;
export const Ingress = Ing;
export const NetworkPolicy = Netpol;
export const Service = SVC;

