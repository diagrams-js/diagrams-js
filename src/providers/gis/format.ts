import { _Gis } from "./index.js";

class _Format extends _Gis {
  protected static override _type = "format";
  protected static override _iconDir = "gis/format";
}

export class Geopackage extends _Format {
  protected static override _icon = "geopackage.png";
}

export class Geoparquet extends _Format {
  protected static override _icon = "geoparquet.png";
}

