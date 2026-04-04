import { _Saas } from "./index.js";

class _Security extends _Saas {
  protected static override _type = "security";
  protected static override _iconDir = "saas/security";
}

export class Crowdstrike extends _Security {
  protected static override _icon = "crowdstrike.png";
}

export class Sonarqube extends _Security {
  protected static override _icon = "sonarqube.png";
}

