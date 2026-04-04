import { _Azure } from "./index.js";

class _Hybridmulticloud extends _Azure {
  protected static override _type = "hybridmulticloud";
  protected static override _iconDir = "azure/hybridmulticloud";
}

export class AzureOperator5gCore extends _Hybridmulticloud {
  protected static override _icon = "azure-operator-5g-core.png";
}

export class AzureOperatorInsights extends _Hybridmulticloud {
  protected static override _icon = "azure-operator-insights.png";
}

export class AzureOperatorNexus extends _Hybridmulticloud {
  protected static override _icon = "azure-operator-nexus.png";
}

export class AzureOperatorServiceManager extends _Hybridmulticloud {
  protected static override _icon = "azure-operator-service-manager.png";
}

export class AzureProgrammableConnectivity extends _Hybridmulticloud {
  protected static override _icon = "azure-programmable-connectivity.png";
}

