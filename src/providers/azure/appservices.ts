import { _Azure } from "./index.js";

class _Appservices extends _Azure {
  protected static override _type = "appservices";
  protected static override _iconDir = "azure/appservices";
}

export class AppServiceCertificates extends _Appservices {
  protected static override _icon = "app-service-certificates.png";
}

export class AppServiceDomains extends _Appservices {
  protected static override _icon = "app-service-domains.png";
}

export class AppServiceEnvironments extends _Appservices {
  protected static override _icon = "app-service-environments.png";
}

export class AppServicePlans extends _Appservices {
  protected static override _icon = "app-service-plans.png";
}

export class AppServices extends _Appservices {
  protected static override _icon = "app-services.png";
}

export class CDNProfiles extends _Appservices {
  protected static override _icon = "cdn-profiles.png";
}

export class CognitiveSearch extends _Appservices {
  protected static override _icon = "cognitive-search.png";
}

export class NotificationHubs extends _Appservices {
  protected static override _icon = "notification-hubs.png";
}

