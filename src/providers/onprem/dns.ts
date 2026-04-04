import { _Onprem } from "./index.js";

class _Dns extends _Onprem {
  protected static override _type = "dns";
  protected static override _iconDir = "onprem/dns";
}

export class Coredns extends _Dns {
  protected static override _icon = "coredns.png";
}

export class Powerdns extends _Dns {
  protected static override _icon = "powerdns.png";
}

