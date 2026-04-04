import { _Onprem } from "./index.js";

class _Cd extends _Onprem {
  protected static override _type = "cd";
  protected static override _iconDir = "onprem/cd";
}

export class Spinnaker extends _Cd {
  protected static override _icon = "spinnaker.png";
}

export class TektonCli extends _Cd {
  protected static override _icon = "tekton-cli.png";
}

export class Tekton extends _Cd {
  protected static override _icon = "tekton.png";
}

