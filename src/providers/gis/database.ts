import { _Gis } from "./index.js";

class _Database extends _Gis {
  protected static override _type = "database";
  protected static override _iconDir = "gis/database";
}

export class Postgis extends _Database {
  protected static override _icon = "postgis.png";
}

