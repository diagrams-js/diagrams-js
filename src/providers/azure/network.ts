import { _Azure } from "./index.js";

class _Network extends _Azure {
  protected static override _type = "network";
  protected static override _iconDir = "azure/network";
}

export class ApplicationGateway extends _Network {
  protected static override _icon = "application-gateway.png";
}

export class ApplicationSecurityGroups extends _Network {
  protected static override _icon = "application-security-groups.png";
}

export class CDNProfiles extends _Network {
  protected static override _icon = "cdn-profiles.png";
}

export class Connections extends _Network {
  protected static override _icon = "connections.png";
}

export class DDOSProtectionPlans extends _Network {
  protected static override _icon = "ddos-protection-plans.png";
}

export class DNSPrivateZones extends _Network {
  protected static override _icon = "dns-private-zones.png";
}

export class DNSZones extends _Network {
  protected static override _icon = "dns-zones.png";
}

export class ExpressrouteCircuits extends _Network {
  protected static override _icon = "expressroute-circuits.png";
}

export class Firewall extends _Network {
  protected static override _icon = "firewall.png";
}

export class FrontDoors extends _Network {
  protected static override _icon = "front-doors.png";
}

export class LoadBalancers extends _Network {
  protected static override _icon = "load-balancers.png";
}

export class LocalNetworkGateways extends _Network {
  protected static override _icon = "local-network-gateways.png";
}

export class NetworkInterfaces extends _Network {
  protected static override _icon = "network-interfaces.png";
}

export class NetworkSecurityGroupsClassic extends _Network {
  protected static override _icon = "network-security-groups-classic.png";
}

export class NetworkWatcher extends _Network {
  protected static override _icon = "network-watcher.png";
}

export class OnPremisesDataGateways extends _Network {
  protected static override _icon = "on-premises-data-gateways.png";
}

export class PrivateEndpoint extends _Network {
  protected static override _icon = "private-endpoint.png";
}

export class PublicIpAddresses extends _Network {
  protected static override _icon = "public-ip-addresses.png";
}

export class ReservedIpAddressesClassic extends _Network {
  protected static override _icon = "reserved-ip-addresses-classic.png";
}

export class RouteFilters extends _Network {
  protected static override _icon = "route-filters.png";
}

export class RouteTables extends _Network {
  protected static override _icon = "route-tables.png";
}

export class ServiceEndpointPolicies extends _Network {
  protected static override _icon = "service-endpoint-policies.png";
}

export class Subnets extends _Network {
  protected static override _icon = "subnets.png";
}

export class TrafficManagerProfiles extends _Network {
  protected static override _icon = "traffic-manager-profiles.png";
}

export class VirtualNetworkClassic extends _Network {
  protected static override _icon = "virtual-network-classic.png";
}

export class VirtualNetworkGateways extends _Network {
  protected static override _icon = "virtual-network-gateways.png";
}

export class VirtualNetworks extends _Network {
  protected static override _icon = "virtual-networks.png";
}

export class VirtualWans extends _Network {
  protected static override _icon = "virtual-wans.png";
}

