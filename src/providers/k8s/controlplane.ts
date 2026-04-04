import { _K8s } from "./index.js";

class _Controlplane extends _K8s {
  protected static override _type = "controlplane";
  protected static override _iconDir = "k8s/controlplane";
}

export class API extends _Controlplane {
  protected static override _icon = "api.png";
}

export class CCM extends _Controlplane {
  protected static override _icon = "c-c-m.png";
}

export class CM extends _Controlplane {
  protected static override _icon = "c-m.png";
}

export class KProxy extends _Controlplane {
  protected static override _icon = "k-proxy.png";
}

export class Kubelet extends _Controlplane {
  protected static override _icon = "kubelet.png";
}

export class Sched extends _Controlplane {
  protected static override _icon = "sched.png";
}

// Aliases
export const APIServer = API;
export const ControllerManager = CM;
export const KubeProxy = KProxy;
export const Scheduler = Sched;

