import { _Elastic } from "./index.js";

class _Agent extends _Elastic {
  protected static override _type = "agent";
  protected static override _iconDir = "elastic/agent";
}

export class Agent extends _Agent {
  protected static override _icon = "agent.png";
}

export class Endpoint extends _Agent {
  protected static override _icon = "endpoint.png";
}

export class Fleet extends _Agent {
  protected static override _icon = "fleet.png";
}

export class Integrations extends _Agent {
  protected static override _icon = "integrations.png";
}

