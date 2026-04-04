import { _Saas } from "./index.js";

class _Identity extends _Saas {
  protected static override _type = "identity";
  protected static override _iconDir = "saas/identity";
}

export class Auth0 extends _Identity {
  protected static override _icon = "auth0.png";
}

export class Okta extends _Identity {
  protected static override _icon = "okta.png";
}

