import { _K8s } from "./index.js";

class _Compute extends _K8s {
  protected static override _type = "compute";
  protected static override _iconDir = "k8s/compute";
}

export class Cronjob extends _Compute {
  protected static override _icon = "cronjob.png";
}

export class Deploy extends _Compute {
  protected static override _icon = "deploy.png";
}

export class DS extends _Compute {
  protected static override _icon = "ds.png";
}

export class Job extends _Compute {
  protected static override _icon = "job.png";
}

export class Pod extends _Compute {
  protected static override _icon = "pod.png";
}

export class RS extends _Compute {
  protected static override _icon = "rs.png";
}

export class STS extends _Compute {
  protected static override _icon = "sts.png";
}

// Aliases
export const Deployment = Deploy;
export const DaemonSet = DS;
export const ReplicaSet = RS;
export const StatefulSet = STS;

