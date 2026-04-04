import { _Onprem } from "./index.js";

class _Compute extends _Onprem {
  protected static override _type = "compute";
  protected static override _iconDir = "onprem/compute";
}

export class Nomad extends _Compute {
  protected static override _icon = "nomad.png";
}

export class Server extends _Compute {
  protected static override _icon = "server.png";
}

