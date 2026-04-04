import { _Elastic } from "./index.js";

class _Beats extends _Elastic {
  protected static override _type = "beats";
  protected static override _iconDir = "elastic/beats";
}

export class APM extends _Beats {
  protected static override _icon = "apm.png";
}

export class Auditbeat extends _Beats {
  protected static override _icon = "auditbeat.png";
}

export class Filebeat extends _Beats {
  protected static override _icon = "filebeat.png";
}

export class Functionbeat extends _Beats {
  protected static override _icon = "functionbeat.png";
}

export class Heartbeat extends _Beats {
  protected static override _icon = "heartbeat.png";
}

export class Metricbeat extends _Beats {
  protected static override _icon = "metricbeat.png";
}

export class Packetbeat extends _Beats {
  protected static override _icon = "packetbeat.png";
}

export class Winlogbeat extends _Beats {
  protected static override _icon = "winlogbeat.png";
}

