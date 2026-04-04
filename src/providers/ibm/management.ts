import { _Ibm } from "./index.js";

class _Management extends _Ibm {
  protected static override _type = "management";
  protected static override _iconDir = "ibm/management";
}

export class AlertNotification extends _Management {
  protected static override _icon = "alert-notification.png";
}

export class ApiManagement extends _Management {
  protected static override _icon = "api-management.png";
}

export class CloudManagement extends _Management {
  protected static override _icon = "cloud-management.png";
}

export class ClusterManagement extends _Management {
  protected static override _icon = "cluster-management.png";
}

export class ContentManagement extends _Management {
  protected static override _icon = "content-management.png";
}

export class DataServices extends _Management {
  protected static override _icon = "data-services.png";
}

export class DeviceManagement extends _Management {
  protected static override _icon = "device-management.png";
}

export class InformationGovernance extends _Management {
  protected static override _icon = "information-governance.png";
}

export class ItServiceManagement extends _Management {
  protected static override _icon = "it-service-management.png";
}

export class Management extends _Management {
  protected static override _icon = "management.png";
}

export class MonitoringMetrics extends _Management {
  protected static override _icon = "monitoring-metrics.png";
}

export class ProcessManagement extends _Management {
  protected static override _icon = "process-management.png";
}

export class ProviderCloudPortalService extends _Management {
  protected static override _icon = "provider-cloud-portal-service.png";
}

export class PushNotifications extends _Management {
  protected static override _icon = "push-notifications.png";
}

export class ServiceManagementTools extends _Management {
  protected static override _icon = "service-management-tools.png";
}

