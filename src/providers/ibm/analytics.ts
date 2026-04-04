import { _Ibm } from "./index.js";

class _Analytics extends _Ibm {
  protected static override _type = "analytics";
  protected static override _iconDir = "ibm/analytics";
}

export class Analytics extends _Analytics {
  protected static override _icon = "analytics.png";
}

export class DataIntegration extends _Analytics {
  protected static override _icon = "data-integration.png";
}

export class DataRepositories extends _Analytics {
  protected static override _icon = "data-repositories.png";
}

export class DeviceAnalytics extends _Analytics {
  protected static override _icon = "device-analytics.png";
}

export class StreamingComputing extends _Analytics {
  protected static override _icon = "streaming-computing.png";
}

