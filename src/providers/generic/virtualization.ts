import { _Generic } from "./index.js";

class _Virtualization extends _Generic {
  protected static override _type = "virtualization";
  protected static override _iconDir = "generic/virtualization";
}

export class Qemu extends _Virtualization {
  protected static override _icon = "qemu.png";
}

export class Virtualbox extends _Virtualization {
  protected static override _icon = "virtualbox.png";
}

export class Vmware extends _Virtualization {
  protected static override _icon = "vmware.png";
}

export class XEN extends _Virtualization {
  protected static override _icon = "xen.png";
}

