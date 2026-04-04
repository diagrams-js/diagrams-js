import { _Outscale } from "./index.js";

class _Network extends _Outscale {
  protected static override _type = "network";
  protected static override _iconDir = "outscale/network";
}

export class ClientVpn extends _Network {
  protected static override _icon = "client-vpn.png";
}

export class InternetService extends _Network {
  protected static override _icon = "internet-service.png";
}

export class LoadBalancer extends _Network {
  protected static override _icon = "load-balancer.png";
}

export class NatService extends _Network {
  protected static override _icon = "nat-service.png";
}

export class Net extends _Network {
  protected static override _icon = "net.png";
}

export class SiteToSiteVpng extends _Network {
  protected static override _icon = "site-to-site-vpng.png";
}

