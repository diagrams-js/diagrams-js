import { _Onprem } from "./index.js";

class _Mlops extends _Onprem {
  protected static override _type = "mlops";
  protected static override _iconDir = "onprem/mlops";
}

export class Mlflow extends _Mlops {
  protected static override _icon = "mlflow.png";
}

export class Polyaxon extends _Mlops {
  protected static override _icon = "polyaxon.png";
}

