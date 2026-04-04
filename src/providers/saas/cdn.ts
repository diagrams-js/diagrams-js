import { _Saas } from "./index.js";

class _Cdn extends _Saas {
  protected static override _type = "cdn";
  protected static override _iconDir = "saas/cdn";
}

export class Akamai extends _Cdn {
  protected static override _icon = "akamai.png";
}

export class Cloudflare extends _Cdn {
  protected static override _icon = "cloudflare.png";
}

export class Fastly extends _Cdn {
  protected static override _icon = "fastly.png";
}

export class Imperva extends _Cdn {
  protected static override _icon = "imperva.png";
}

