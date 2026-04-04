import { _Saas } from "./index.js";

class _Social extends _Saas {
  protected static override _type = "social";
  protected static override _iconDir = "saas/social";
}

export class Facebook extends _Social {
  protected static override _icon = "facebook.png";
}

export class Twitter extends _Social {
  protected static override _icon = "twitter.png";
}

