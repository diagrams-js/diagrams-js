import { _K8s } from "./index.js";

class _Storage extends _K8s {
  protected static override _type = "storage";
  protected static override _iconDir = "k8s/storage";
}

export class PV extends _Storage {
  protected static override _icon = "pv.png";
}

export class PVC extends _Storage {
  protected static override _icon = "pvc.png";
}

export class SC extends _Storage {
  protected static override _icon = "sc.png";
}

export class Vol extends _Storage {
  protected static override _icon = "vol.png";
}

// Aliases
export const PersistentVolume = PV;
export const PersistentVolumeClaim = PVC;
export const StorageClass = SC;
export const Volume = Vol;

