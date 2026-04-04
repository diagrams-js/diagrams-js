import { _Azure } from "./index.js";

class _Mixedreality extends _Azure {
  protected static override _type = "mixedreality";
  protected static override _iconDir = "azure/mixedreality";
}

export class RemoteRendering extends _Mixedreality {
  protected static override _icon = "remote-rendering.png";
}

export class SpatialAnchorAccounts extends _Mixedreality {
  protected static override _icon = "spatial-anchor-accounts.png";
}

