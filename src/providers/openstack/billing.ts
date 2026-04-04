import { _Openstack } from "./index.js";

class _Billing extends _Openstack {
  protected static override _type = "billing";
  protected static override _iconDir = "openstack/billing";
}

export class Cloudkitty extends _Billing {
  protected static override _icon = "cloudkitty.png";
}

// Aliases
export const CloudKitty = Cloudkitty;

