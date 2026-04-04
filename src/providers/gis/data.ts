import { _Gis } from "./index.js";

class _Data extends _Gis {
  protected static override _type = "data";
  protected static override _iconDir = "gis/data";
}

export class BAN extends _Data {
  protected static override _icon = "ban.png";
}

export class Here extends _Data {
  protected static override _icon = "here.png";
}

export class IGN extends _Data {
  protected static override _icon = "ign.png";
}

export class Openstreetmap extends _Data {
  protected static override _icon = "openstreetmap.png";
}

export class Overturemaps extends _Data {
  protected static override _icon = "overturemaps.png";
}

