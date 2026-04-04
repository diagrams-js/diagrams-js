import { _Ibm } from "./index.js";

class _Network extends _Ibm {
  protected static override _type = "network";
  protected static override _iconDir = "ibm/network";
}

export class Bridge extends _Network {
  protected static override _icon = "bridge.png";
}

export class DirectLink extends _Network {
  protected static override _icon = "direct-link.png";
}

export class Enterprise extends _Network {
  protected static override _icon = "enterprise.png";
}

export class Firewall extends _Network {
  protected static override _icon = "firewall.png";
}

export class FloatingIp extends _Network {
  protected static override _icon = "floating-ip.png";
}

export class Gateway extends _Network {
  protected static override _icon = "gateway.png";
}

export class InternetServices extends _Network {
  protected static override _icon = "internet-services.png";
}

export class LoadBalancerListener extends _Network {
  protected static override _icon = "load-balancer-listener.png";
}

export class LoadBalancerPool extends _Network {
  protected static override _icon = "load-balancer-pool.png";
}

export class LoadBalancer extends _Network {
  protected static override _icon = "load-balancer.png";
}

export class LoadBalancingRouting extends _Network {
  protected static override _icon = "load-balancing-routing.png";
}

export class PublicGateway extends _Network {
  protected static override _icon = "public-gateway.png";
}

export class Region extends _Network {
  protected static override _icon = "region.png";
}

export class Router extends _Network {
  protected static override _icon = "router.png";
}

export class Rules extends _Network {
  protected static override _icon = "rules.png";
}

export class Subnet extends _Network {
  protected static override _icon = "subnet.png";
}

export class TransitGateway extends _Network {
  protected static override _icon = "transit-gateway.png";
}

export class Vpc extends _Network {
  protected static override _icon = "vpc.png";
}

export class VpnConnection extends _Network {
  protected static override _icon = "vpn-connection.png";
}

export class VpnGateway extends _Network {
  protected static override _icon = "vpn-gateway.png";
}

export class VpnPolicy extends _Network {
  protected static override _icon = "vpn-policy.png";
}

