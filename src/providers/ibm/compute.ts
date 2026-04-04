import { _Ibm } from "./index.js";

class _Compute extends _Ibm {
  protected static override _type = "compute";
  protected static override _iconDir = "ibm/compute";
}

export class BareMetalServer extends _Compute {
  protected static override _icon = "bare-metal-server.png";
}

export class ImageService extends _Compute {
  protected static override _icon = "image-service.png";
}

export class Instance extends _Compute {
  protected static override _icon = "instance.png";
}

export class Key extends _Compute {
  protected static override _icon = "key.png";
}

export class PowerInstance extends _Compute {
  protected static override _icon = "power-instance.png";
}

