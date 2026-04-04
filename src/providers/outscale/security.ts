import { _Outscale } from "./index.js";

class _Security extends _Outscale {
  protected static override _type = "security";
  protected static override _iconDir = "outscale/security";
}

export class Firewall extends _Security {
  protected static override _icon = "firewall.png";
}

export class IdentityAndAccessManagement extends _Security {
  protected static override _icon = "identity-and-access-management.png";
}

