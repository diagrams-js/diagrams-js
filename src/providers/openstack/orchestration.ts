import { _Openstack } from "./index.js";

class _Orchestration extends _Openstack {
  protected static override _type = "orchestration";
  protected static override _iconDir = "openstack/orchestration";
}

export class Blazar extends _Orchestration {
  protected static override _icon = "blazar.png";
}

export class Heat extends _Orchestration {
  protected static override _icon = "heat.png";
}

export class Mistral extends _Orchestration {
  protected static override _icon = "mistral.png";
}

export class Senlin extends _Orchestration {
  protected static override _icon = "senlin.png";
}

export class Zaqar extends _Orchestration {
  protected static override _icon = "zaqar.png";
}

