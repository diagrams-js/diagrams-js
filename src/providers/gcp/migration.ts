import { _Gcp } from "./index.js";

class _Migration extends _Gcp {
  protected static override _type = "migration";
  protected static override _iconDir = "gcp/migration";
}

export class MigrateComputeEngine extends _Migration {
  protected static override _icon = "migrate-compute-engine.png";
}

export class TransferAppliance extends _Migration {
  protected static override _icon = "transfer-appliance.png";
}

// Aliases
export const CE = MigrateComputeEngine;

