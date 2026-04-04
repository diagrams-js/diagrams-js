import { _Gcp } from "./index.js";

class _Network extends _Gcp {
  protected static override _type = "network";
  protected static override _iconDir = "gcp/network";
}

export class Armor extends _Network {
  protected static override _icon = "armor.png";
}

export class CDN extends _Network {
  protected static override _icon = "cdn.png";
}

export class CloudIDS extends _Network {
  protected static override _icon = "cloud-ids.png";
}

export class DedicatedInterconnect extends _Network {
  protected static override _icon = "dedicated-interconnect.png";
}

export class DNS extends _Network {
  protected static override _icon = "dns.png";
}

export class ExternalIpAddresses extends _Network {
  protected static override _icon = "external-ip-addresses.png";
}

export class FirewallRules extends _Network {
  protected static override _icon = "firewall-rules.png";
}

export class LoadBalancing extends _Network {
  protected static override _icon = "load-balancing.png";
}

export class NAT extends _Network {
  protected static override _icon = "nat.png";
}

export class NetworkConnectivityCenter extends _Network {
  protected static override _icon = "network-connectivity-center.png";
}

export class NetworkIntelligenceCenter extends _Network {
  protected static override _icon = "network-intelligence-center.png";
}

export class NetworkSecurity extends _Network {
  protected static override _icon = "network-security.png";
}

export class NetworkTiers extends _Network {
  protected static override _icon = "network-tiers.png";
}

export class NetworkTopology extends _Network {
  protected static override _icon = "network-topology.png";
}

export class Network extends _Network {
  protected static override _icon = "network.png";
}

export class PartnerInterconnect extends _Network {
  protected static override _icon = "partner-interconnect.png";
}

export class PremiumNetworkTier extends _Network {
  protected static override _icon = "premium-network-tier.png";
}

export class PrivateServiceConnect extends _Network {
  protected static override _icon = "private-service-connect.png";
}

export class Router extends _Network {
  protected static override _icon = "router.png";
}

export class Routes extends _Network {
  protected static override _icon = "routes.png";
}

export class ServiceMesh extends _Network {
  protected static override _icon = "service-mesh.png";
}

export class StandardNetworkTier extends _Network {
  protected static override _icon = "standard-network-tier.png";
}

export class TrafficDirector extends _Network {
  protected static override _icon = "traffic-director.png";
}

export class VirtualPrivateCloud extends _Network {
  protected static override _icon = "virtual-private-cloud.png";
}

export class VPN extends _Network {
  protected static override _icon = "vpn.png";
}

// Aliases
export const IDS = CloudIDS;
export const PSC = PrivateServiceConnect;
export const VPC = VirtualPrivateCloud;

