import { _Elastic } from "./index.js";

class _Observability extends _Elastic {
  protected static override _type = "observability";
  protected static override _iconDir = "elastic/observability";
}

export class APM extends _Observability {
  protected static override _icon = "apm.png";
}

export class Logs extends _Observability {
  protected static override _icon = "logs.png";
}

export class Metrics extends _Observability {
  protected static override _icon = "metrics.png";
}

export class Observability extends _Observability {
  protected static override _icon = "observability.png";
}

export class Uptime extends _Observability {
  protected static override _icon = "uptime.png";
}

