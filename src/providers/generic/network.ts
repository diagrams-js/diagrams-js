import { _Generic } from "./index.js";

class _Network extends _Generic {
  protected static override _type = "network";
  protected static override _iconDir = "generic/network";
}

export class Firewall extends _Network {
  protected static override _icon = "firewall.png";
}

export class Router extends _Network {
  protected static override _icon = "router.png";
}

export class Subnet extends _Network {
  protected static override _icon = "subnet.png";
}

export class Switch extends _Network {
  protected static override _icon = "switch.png";
}

export class VPN extends _Network {
  protected static override _icon = "vpn.png";
}

