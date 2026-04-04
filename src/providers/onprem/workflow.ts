import { _Onprem } from "./index.js";

class _Workflow extends _Onprem {
  protected static override _type = "workflow";
  protected static override _iconDir = "onprem/workflow";
}

export class Airflow extends _Workflow {
  protected static override _icon = "airflow.png";
}

export class Digdag extends _Workflow {
  protected static override _icon = "digdag.png";
}

export class Kubeflow extends _Workflow {
  protected static override _icon = "kubeflow.png";
}

export class Nifi extends _Workflow {
  protected static override _icon = "nifi.png";
}

// Aliases
export const KubeFlow = Kubeflow;
export const NiFi = Nifi;

