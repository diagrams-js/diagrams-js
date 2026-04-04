import { _Aws } from "./index.js";

class _Network extends _Aws {
  protected static override _type = "network";
  protected static override _iconDir = "aws/network";
}

export class APIGatewayEndpoint extends _Network {
  protected static override _icon = "api-gateway-endpoint.png";
}

export class APIGateway extends _Network {
  protected static override _icon = "api-gateway.png";
}

export class AppMesh extends _Network {
  protected static override _icon = "app-mesh.png";
}

export class ClientVpn extends _Network {
  protected static override _icon = "client-vpn.png";
}

export class CloudMap extends _Network {
  protected static override _icon = "cloud-map.png";
}

export class CloudFrontDownloadDistribution extends _Network {
  protected static override _icon = "cloudfront-download-distribution.png";
}

export class CloudFrontEdgeLocation extends _Network {
  protected static override _icon = "cloudfront-edge-location.png";
}

export class CloudFrontStreamingDistribution extends _Network {
  protected static override _icon = "cloudfront-streaming-distribution.png";
}

export class CloudFront extends _Network {
  protected static override _icon = "cloudfront.png";
}

export class DirectConnect extends _Network {
  protected static override _icon = "direct-connect.png";
}

export class ElasticLoadBalancing extends _Network {
  protected static override _icon = "elastic-load-balancing.png";
}

export class ElbApplicationLoadBalancer extends _Network {
  protected static override _icon = "elb-application-load-balancer.png";
}

export class ElbClassicLoadBalancer extends _Network {
  protected static override _icon = "elb-classic-load-balancer.png";
}

export class ElbNetworkLoadBalancer extends _Network {
  protected static override _icon = "elb-network-load-balancer.png";
}

export class Endpoint extends _Network {
  protected static override _icon = "endpoint.png";
}

export class GlobalAccelerator extends _Network {
  protected static override _icon = "global-accelerator.png";
}

export class InternetGateway extends _Network {
  protected static override _icon = "internet-gateway.png";
}

export class Nacl extends _Network {
  protected static override _icon = "nacl.png";
}

export class NATGateway extends _Network {
  protected static override _icon = "nat-gateway.png";
}

export class NetworkFirewall extends _Network {
  protected static override _icon = "network-firewall.png";
}

export class NetworkingAndContentDelivery extends _Network {
  protected static override _icon = "networking-and-content-delivery.png";
}

export class PrivateSubnet extends _Network {
  protected static override _icon = "private-subnet.png";
}

export class Privatelink extends _Network {
  protected static override _icon = "privatelink.png";
}

export class PublicSubnet extends _Network {
  protected static override _icon = "public-subnet.png";
}

export class Route53HostedZone extends _Network {
  protected static override _icon = "route-53-hosted-zone.png";
}

export class Route53 extends _Network {
  protected static override _icon = "route-53.png";
}

export class RouteTable extends _Network {
  protected static override _icon = "route-table.png";
}

export class SiteToSiteVpn extends _Network {
  protected static override _icon = "site-to-site-vpn.png";
}

export class TransitGatewayAttachment extends _Network {
  protected static override _icon = "transit-gateway-attachment.png";
}

export class TransitGateway extends _Network {
  protected static override _icon = "transit-gateway.png";
}

export class VPCCustomerGateway extends _Network {
  protected static override _icon = "vpc-customer-gateway.png";
}

export class VPCElasticNetworkAdapter extends _Network {
  protected static override _icon = "vpc-elastic-network-adapter.png";
}

export class VPCElasticNetworkInterface extends _Network {
  protected static override _icon = "vpc-elastic-network-interface.png";
}

export class VPCFlowLogs extends _Network {
  protected static override _icon = "vpc-flow-logs.png";
}

export class VPCPeering extends _Network {
  protected static override _icon = "vpc-peering.png";
}

export class VPCRouter extends _Network {
  protected static override _icon = "vpc-router.png";
}

export class VPCTrafficMirroring extends _Network {
  protected static override _icon = "vpc-traffic-mirroring.png";
}

export class VPC extends _Network {
  protected static override _icon = "vpc.png";
}

export class VpnConnection extends _Network {
  protected static override _icon = "vpn-connection.png";
}

export class VpnGateway extends _Network {
  protected static override _icon = "vpn-gateway.png";
}

// Aliases
export const CF = CloudFront;
export const ELB = ElasticLoadBalancing;
export const ALB = ElbApplicationLoadBalancer;
export const CLB = ElbClassicLoadBalancer;
export const NLB = ElbNetworkLoadBalancer;
export const GAX = GlobalAccelerator;
export const IGW = InternetGateway;
export const TGW = TransitGateway;
export const TGWAttach = TransitGatewayAttachment;

