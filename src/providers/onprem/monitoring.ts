import { _Onprem } from "./index.js";

class _Monitoring extends _Onprem {
  protected static override _type = "monitoring";
  protected static override _iconDir = "onprem/monitoring";
}

export class Cortex extends _Monitoring {
  protected static override _icon = "cortex.png";
}

export class Datadog extends _Monitoring {
  protected static override _icon = "datadog.png";
}

export class Dynatrace extends _Monitoring {
  protected static override _icon = "dynatrace.png";
}

export class Grafana extends _Monitoring {
  protected static override _icon = "grafana.png";
}

export class Humio extends _Monitoring {
  protected static override _icon = "humio.png";
}

export class Mimir extends _Monitoring {
  protected static override _icon = "mimir.png";
}

export class Nagios extends _Monitoring {
  protected static override _icon = "nagios.png";
}

export class Newrelic extends _Monitoring {
  protected static override _icon = "newrelic.png";
}

export class PrometheusOperator extends _Monitoring {
  protected static override _icon = "prometheus-operator.png";
}

export class Prometheus extends _Monitoring {
  protected static override _icon = "prometheus.png";
}

export class Sentry extends _Monitoring {
  protected static override _icon = "sentry.png";
}

export class Splunk extends _Monitoring {
  protected static override _icon = "splunk.png";
}

export class Thanos extends _Monitoring {
  protected static override _icon = "thanos.png";
}

export class Zabbix extends _Monitoring {
  protected static override _icon = "zabbix.png";
}

