import { _Oci } from "./index.js";

class _Connectivity extends _Oci {
  protected static override _type = "connectivity";
  protected static override _iconDir = "oci/connectivity";
}

export class BackboneWhite extends _Connectivity {
  protected static override _icon = "backbone-white.png";
}

export class Backbone extends _Connectivity {
  protected static override _icon = "backbone.png";
}

export class CDNWhite extends _Connectivity {
  protected static override _icon = "cdn-white.png";
}

export class CDN extends _Connectivity {
  protected static override _icon = "cdn.png";
}

export class CustomerDatacenter extends _Connectivity {
  protected static override _icon = "customer-datacenter.png";
}

export class CustomerDatacntrWhite extends _Connectivity {
  protected static override _icon = "customer-datacntr-white.png";
}

export class CustomerPremisesWhite extends _Connectivity {
  protected static override _icon = "customer-premises-white.png";
}

export class CustomerPremises extends _Connectivity {
  protected static override _icon = "customer-premises.png";
}

export class DisconnectedRegionsWhite extends _Connectivity {
  protected static override _icon = "disconnected-regions-white.png";
}

export class DisconnectedRegions extends _Connectivity {
  protected static override _icon = "disconnected-regions.png";
}

export class DNSWhite extends _Connectivity {
  protected static override _icon = "dns-white.png";
}

export class DNS extends _Connectivity {
  protected static override _icon = "dns.png";
}

export class FastConnectWhite extends _Connectivity {
  protected static override _icon = "fast-connect-white.png";
}

export class FastConnect extends _Connectivity {
  protected static override _icon = "fast-connect.png";
}

export class NATGatewayWhite extends _Connectivity {
  protected static override _icon = "nat-gateway-white.png";
}

export class NATGateway extends _Connectivity {
  protected static override _icon = "nat-gateway.png";
}

export class VPNWhite extends _Connectivity {
  protected static override _icon = "vpn-white.png";
}

export class VPN extends _Connectivity {
  protected static override _icon = "vpn.png";
}

