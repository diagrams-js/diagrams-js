import { _Alibabacloud } from "./index.js";

class _Network extends _Alibabacloud {
  protected static override _type = "network";
  protected static override _iconDir = "alibabacloud/network";
}

export class Cdn extends _Network {
  protected static override _icon = "cdn.png";
}

export class CloudEnterpriseNetwork extends _Network {
  protected static override _icon = "cloud-enterprise-network.png";
}

export class ElasticIpAddress extends _Network {
  protected static override _icon = "elastic-ip-address.png";
}

export class ExpressConnect extends _Network {
  protected static override _icon = "express-connect.png";
}

export class NatGateway extends _Network {
  protected static override _icon = "nat-gateway.png";
}

export class ServerLoadBalancer extends _Network {
  protected static override _icon = "server-load-balancer.png";
}

export class SmartAccessGateway extends _Network {
  protected static override _icon = "smart-access-gateway.png";
}

export class VirtualPrivateCloud extends _Network {
  protected static override _icon = "virtual-private-cloud.png";
}

export class VpnGateway extends _Network {
  protected static override _icon = "vpn-gateway.png";
}

// Aliases
export const CEN = CloudEnterpriseNetwork;
export const EIP = ElasticIpAddress;
export const SLB = ServerLoadBalancer;
export const VPC = VirtualPrivateCloud;

