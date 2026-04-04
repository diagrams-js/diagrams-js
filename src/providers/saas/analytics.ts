import { _Saas } from "./index.js";

class _Analytics extends _Saas {
  protected static override _type = "analytics";
  protected static override _iconDir = "saas/analytics";
}

export class Dataform extends _Analytics {
  protected static override _icon = "dataform.png";
}

export class Snowflake extends _Analytics {
  protected static override _icon = "snowflake.png";
}

export class Stitch extends _Analytics {
  protected static override _icon = "stitch.png";
}

