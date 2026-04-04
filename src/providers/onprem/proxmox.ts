import { _Onprem } from "./index.js";

class _Proxmox extends _Onprem {
  protected static override _type = "proxmox";
  protected static override _iconDir = "onprem/proxmox";
}

export class Pve extends _Proxmox {
  protected static override _icon = "pve.png";
}

// Aliases
export const ProxmoxVE = Pve;

