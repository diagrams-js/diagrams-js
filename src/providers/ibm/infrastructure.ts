import { _Ibm } from "./index.js";

class _Infrastructure extends _Ibm {
  protected static override _type = "infrastructure";
  protected static override _iconDir = "ibm/infrastructure";
}

export class Channels extends _Infrastructure {
  protected static override _icon = "channels.png";
}

export class CloudMessaging extends _Infrastructure {
  protected static override _icon = "cloud-messaging.png";
}

export class Dashboard extends _Infrastructure {
  protected static override _icon = "dashboard.png";
}

export class Diagnostics extends _Infrastructure {
  protected static override _icon = "diagnostics.png";
}

export class EdgeServices extends _Infrastructure {
  protected static override _icon = "edge-services.png";
}

export class EnterpriseMessaging extends _Infrastructure {
  protected static override _icon = "enterprise-messaging.png";
}

export class EventFeed extends _Infrastructure {
  protected static override _icon = "event-feed.png";
}

export class InfrastructureServices extends _Infrastructure {
  protected static override _icon = "infrastructure-services.png";
}

export class InterserviceCommunication extends _Infrastructure {
  protected static override _icon = "interservice-communication.png";
}

export class LoadBalancingRouting extends _Infrastructure {
  protected static override _icon = "load-balancing-routing.png";
}

export class MicroservicesMesh extends _Infrastructure {
  protected static override _icon = "microservices-mesh.png";
}

export class MobileBackend extends _Infrastructure {
  protected static override _icon = "mobile-backend.png";
}

export class MobileProviderNetwork extends _Infrastructure {
  protected static override _icon = "mobile-provider-network.png";
}

export class MonitoringLogging extends _Infrastructure {
  protected static override _icon = "monitoring-logging.png";
}

export class Monitoring extends _Infrastructure {
  protected static override _icon = "monitoring.png";
}

export class PeerServices extends _Infrastructure {
  protected static override _icon = "peer-services.png";
}

export class ServiceDiscoveryConfiguration extends _Infrastructure {
  protected static override _icon = "service-discovery-configuration.png";
}

export class TransformationConnectivity extends _Infrastructure {
  protected static override _icon = "transformation-connectivity.png";
}

