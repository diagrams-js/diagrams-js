import { _Digitalocean } from "./index.js";

class _Network extends _Digitalocean {
  protected static override _type = "network";
  protected static override _iconDir = "digitalocean/network";
}

export class Certificate extends _Network {
  protected static override _icon = "certificate.png";
}

export class DomainRegistration extends _Network {
  protected static override _icon = "domain-registration.png";
}

export class Domain extends _Network {
  protected static override _icon = "domain.png";
}

export class Firewall extends _Network {
  protected static override _icon = "firewall.png";
}

export class FloatingIp extends _Network {
  protected static override _icon = "floating-ip.png";
}

export class InternetGateway extends _Network {
  protected static override _icon = "internet-gateway.png";
}

export class LoadBalancer extends _Network {
  protected static override _icon = "load-balancer.png";
}

export class ManagedVpn extends _Network {
  protected static override _icon = "managed-vpn.png";
}

export class Vpc extends _Network {
  protected static override _icon = "vpc.png";
}

