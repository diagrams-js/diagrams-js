import { _Onprem } from "./index.js";

class _Tracing extends _Onprem {
  protected static override _type = "tracing";
  protected static override _iconDir = "onprem/tracing";
}

export class Jaeger extends _Tracing {
  protected static override _icon = "jaeger.png";
}

export class Tempo extends _Tracing {
  protected static override _icon = "tempo.png";
}

