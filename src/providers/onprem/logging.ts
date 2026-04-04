import { _Onprem } from "./index.js";

class _Logging extends _Onprem {
  protected static override _type = "logging";
  protected static override _iconDir = "onprem/logging";
}

export class Fluentbit extends _Logging {
  protected static override _icon = "fluentbit.png";
}

export class Graylog extends _Logging {
  protected static override _icon = "graylog.png";
}

export class Loki extends _Logging {
  protected static override _icon = "loki.png";
}

export class Rsyslog extends _Logging {
  protected static override _icon = "rsyslog.png";
}

export class SyslogNg extends _Logging {
  protected static override _icon = "syslog-ng.png";
}

// Aliases
export const FluentBit = Fluentbit;
export const RSyslog = Rsyslog;

