import { _Generic } from "./index.js";

class _Database extends _Generic {
  protected static override _type = "database";
  protected static override _iconDir = "generic/database";
}

export class SQL extends _Database {
  protected static override _icon = "sql.png";
}

