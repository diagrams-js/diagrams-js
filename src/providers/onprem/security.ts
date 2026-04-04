import { _Onprem } from "./index.js";

class _Security extends _Onprem {
  protected static override _type = "security";
  protected static override _iconDir = "onprem/security";
}

export class Bitwarden extends _Security {
  protected static override _icon = "bitwarden.png";
}

export class Trivy extends _Security {
  protected static override _icon = "trivy.png";
}

export class Vault extends _Security {
  protected static override _icon = "vault.png";
}

