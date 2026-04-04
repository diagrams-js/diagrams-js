import { _Digitalocean } from "./index.js";

class _Storage extends _Digitalocean {
  protected static override _type = "storage";
  protected static override _iconDir = "digitalocean/storage";
}

export class Folder extends _Storage {
  protected static override _icon = "folder.png";
}

export class Space extends _Storage {
  protected static override _icon = "space.png";
}

export class VolumeSnapshot extends _Storage {
  protected static override _icon = "volume-snapshot.png";
}

export class Volume extends _Storage {
  protected static override _icon = "volume.png";
}

