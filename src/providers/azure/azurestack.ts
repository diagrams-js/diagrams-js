import { _Azure } from "./index.js";

class _Azurestack extends _Azure {
  protected static override _type = "azurestack";
  protected static override _iconDir = "azure/azurestack";
}

export class Capacity extends _Azurestack {
  protected static override _icon = "capacity.png";
}

export class InfrastructureBackup extends _Azurestack {
  protected static override _icon = "infrastructure-backup.png";
}

export class MultiTenancy extends _Azurestack {
  protected static override _icon = "multi-tenancy.png";
}

export class Offers extends _Azurestack {
  protected static override _icon = "offers.png";
}

export class Plans extends _Azurestack {
  protected static override _icon = "plans.png";
}

export class Updates extends _Azurestack {
  protected static override _icon = "updates.png";
}

export class UserSubscriptions extends _Azurestack {
  protected static override _icon = "user-subscriptions.png";
}

