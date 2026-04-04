import { _Gcp } from "./index.js";

class _Operations extends _Gcp {
  protected static override _type = "operations";
  protected static override _iconDir = "gcp/operations";
}

export class Logging extends _Operations {
  protected static override _icon = "logging.png";
}

export class Monitoring extends _Operations {
  protected static override _icon = "monitoring.png";
}

