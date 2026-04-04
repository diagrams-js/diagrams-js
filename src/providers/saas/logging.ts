import { _Saas } from "./index.js";

class _Logging extends _Saas {
  protected static override _type = "logging";
  protected static override _iconDir = "saas/logging";
}

export class Datadog extends _Logging {
  protected static override _icon = "datadog.png";
}

export class Newrelic extends _Logging {
  protected static override _icon = "newrelic.png";
}

export class Papertrail extends _Logging {
  protected static override _icon = "papertrail.png";
}

// Aliases
export const DataDog = Datadog;
export const NewRelic = Newrelic;

