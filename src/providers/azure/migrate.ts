import { _Azure } from "./index.js";

class _Migrate extends _Azure {
  protected static override _type = "migrate";
  protected static override _iconDir = "azure/migrate";
}

export class AzureDataboxGateway extends _Migrate {
  protected static override _icon = "azure-databox-gateway.png";
}

export class AzureMigrate extends _Migrate {
  protected static override _icon = "azure-migrate.png";
}

export class AzureStackEdge extends _Migrate {
  protected static override _icon = "azure-stack-edge.png";
}

export class CostManagementAndBilling extends _Migrate {
  protected static override _icon = "cost-management-and-billing.png";
}

export class DataBox extends _Migrate {
  protected static override _icon = "data-box.png";
}

export class RecoveryServicesVaults extends _Migrate {
  protected static override _icon = "recovery-services-vaults.png";
}

