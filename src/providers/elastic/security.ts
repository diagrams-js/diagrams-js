import { _Elastic } from "./index.js";

class _Security extends _Elastic {
  protected static override _type = "security";
  protected static override _iconDir = "elastic/security";
}

export class Endpoint extends _Security {
  protected static override _icon = "endpoint.png";
}

export class Security extends _Security {
  protected static override _icon = "security.png";
}

export class SIEM extends _Security {
  protected static override _icon = "siem.png";
}

export class Xdr extends _Security {
  protected static override _icon = "xdr.png";
}

