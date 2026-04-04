import { _Azure } from "./index.js";

class _Azureecosystem extends _Azure {
  protected static override _type = "azureecosystem";
  protected static override _iconDir = "azure/azureecosystem";
}

export class Applens extends _Azureecosystem {
  protected static override _icon = "applens.png";
}

export class AzureHybridCenter extends _Azureecosystem {
  protected static override _icon = "azure-hybrid-center.png";
}

export class CollaborativeService extends _Azureecosystem {
  protected static override _icon = "collaborative-service.png";
}

