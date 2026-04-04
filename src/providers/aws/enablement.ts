import { _Aws } from "./index.js";

class _Enablement extends _Aws {
  protected static override _type = "enablement";
  protected static override _iconDir = "aws/enablement";
}

export class CustomerEnablement extends _Enablement {
  protected static override _icon = "customer-enablement.png";
}

export class Iq extends _Enablement {
  protected static override _icon = "iq.png";
}

export class ManagedServices extends _Enablement {
  protected static override _icon = "managed-services.png";
}

export class ProfessionalServices extends _Enablement {
  protected static override _icon = "professional-services.png";
}

export class Support extends _Enablement {
  protected static override _icon = "support.png";
}

