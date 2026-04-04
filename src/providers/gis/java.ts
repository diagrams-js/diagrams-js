import { _Gis } from "./index.js";

class _Java extends _Gis {
  protected static override _type = "java";
  protected static override _iconDir = "gis/java";
}

export class Geotools extends _Java {
  protected static override _icon = "geotools.png";
}

