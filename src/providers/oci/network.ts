import { _Oci } from "./index.js";

class _Network extends _Oci {
  protected static override _type = "network";
  protected static override _iconDir = "oci/network";
}

export class DrgWhite extends _Network {
  protected static override _icon = "drg-white.png";
}

export class Drg extends _Network {
  protected static override _icon = "drg.png";
}

export class FirewallWhite extends _Network {
  protected static override _icon = "firewall-white.png";
}

export class Firewall extends _Network {
  protected static override _icon = "firewall.png";
}

export class InternetGatewayWhite extends _Network {
  protected static override _icon = "internet-gateway-white.png";
}

export class InternetGateway extends _Network {
  protected static override _icon = "internet-gateway.png";
}

export class LoadBalancerWhite extends _Network {
  protected static override _icon = "load-balancer-white.png";
}

export class LoadBalancer extends _Network {
  protected static override _icon = "load-balancer.png";
}

export class RouteTableWhite extends _Network {
  protected static override _icon = "route-table-white.png";
}

export class RouteTable extends _Network {
  protected static override _icon = "route-table.png";
}

export class SecurityListsWhite extends _Network {
  protected static override _icon = "security-lists-white.png";
}

export class SecurityLists extends _Network {
  protected static override _icon = "security-lists.png";
}

export class ServiceGatewayWhite extends _Network {
  protected static override _icon = "service-gateway-white.png";
}

export class ServiceGateway extends _Network {
  protected static override _icon = "service-gateway.png";
}

export class VcnWhite extends _Network {
  protected static override _icon = "vcn-white.png";
}

export class Vcn extends _Network {
  protected static override _icon = "vcn.png";
}

