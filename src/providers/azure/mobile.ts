import { _Azure } from "./index.js";

class _Mobile extends _Azure {
  protected static override _type = "mobile";
  protected static override _iconDir = "azure/mobile";
}

export class AppServiceMobile extends _Mobile {
  protected static override _icon = "app-service-mobile.png";
}

export class AppServices extends _Mobile {
  protected static override _icon = "app-services.png";
}

export class MobileEngagement extends _Mobile {
  protected static override _icon = "mobile-engagement.png";
}

export class NotificationHubs extends _Mobile {
  protected static override _icon = "notification-hubs.png";
}

export class PowerPlatform extends _Mobile {
  protected static override _icon = "power-platform.png";
}

