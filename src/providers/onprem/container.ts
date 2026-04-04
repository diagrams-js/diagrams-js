import { _Onprem } from "./index.js";

class _Container extends _Onprem {
  protected static override _type = "container";
  protected static override _iconDir = "onprem/container";
}

export class Containerd extends _Container {
  protected static override _icon = "containerd.png";
}

export class Crio extends _Container {
  protected static override _icon = "crio.png";
}

export class Docker extends _Container {
  protected static override _icon = "docker.png";
}

export class Firecracker extends _Container {
  protected static override _icon = "firecracker.png";
}

export class Gvisor extends _Container {
  protected static override _icon = "gvisor.png";
}

export class K3s extends _Container {
  protected static override _icon = "k3s.png";
}

export class Lxc extends _Container {
  protected static override _icon = "lxc.png";
}

export class Rkt extends _Container {
  protected static override _icon = "rkt.png";
}

// Aliases
export const LXC = Lxc;
export const RKT = Rkt;

