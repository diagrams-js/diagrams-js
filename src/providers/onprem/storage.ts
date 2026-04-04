import { _Onprem } from "./index.js";

class _Storage extends _Onprem {
  protected static override _type = "storage";
  protected static override _iconDir = "onprem/storage";
}

export class CephOsd extends _Storage {
  protected static override _icon = "ceph-osd.png";
}

export class Ceph extends _Storage {
  protected static override _icon = "ceph.png";
}

export class Glusterfs extends _Storage {
  protected static override _icon = "glusterfs.png";
}

export class Portworx extends _Storage {
  protected static override _icon = "portworx.png";
}

// Aliases
export const CEPH = Ceph;
export const CEPH_OSD = CephOsd;

