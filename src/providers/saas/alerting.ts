import { _Saas } from "./index.js";

class _Alerting extends _Saas {
  protected static override _type = "alerting";
  protected static override _iconDir = "saas/alerting";
}

export class Newrelic extends _Alerting {
  protected static override _icon = "newrelic.png";
}

export class Opsgenie extends _Alerting {
  protected static override _icon = "opsgenie.png";
}

export class Pagerduty extends _Alerting {
  protected static override _icon = "pagerduty.png";
}

export class Pushover extends _Alerting {
  protected static override _icon = "pushover.png";
}

export class Xmatters extends _Alerting {
  protected static override _icon = "xmatters.png";
}

