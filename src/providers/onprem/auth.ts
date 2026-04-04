import { _Onprem } from "./index.js";

class _Auth extends _Onprem {
  protected static override _type = "auth";
  protected static override _iconDir = "onprem/auth";
}

export class Boundary extends _Auth {
  protected static override _icon = "boundary.png";
}

export class BuzzfeedSso extends _Auth {
  protected static override _icon = "buzzfeed-sso.png";
}

export class Oauth2Proxy extends _Auth {
  protected static override _icon = "oauth2-proxy.png";
}

