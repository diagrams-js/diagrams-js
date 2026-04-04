import { _Openstack } from "./index.js";

class _Monitoring extends _Openstack {
  protected static override _type = "monitoring";
  protected static override _iconDir = "openstack/monitoring";
}

export class Monasca extends _Monitoring {
  protected static override _icon = "monasca.png";
}

export class Telemetry extends _Monitoring {
  protected static override _icon = "telemetry.png";
}

