import { _Saas } from "./index.js";

class _Recommendation extends _Saas {
  protected static override _type = "recommendation";
  protected static override _iconDir = "saas/recommendation";
}

export class Recombee extends _Recommendation {
  protected static override _icon = "recombee.png";
}

