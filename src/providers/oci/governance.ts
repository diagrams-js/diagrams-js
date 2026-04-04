import { _Oci } from "./index.js";

class _Governance extends _Oci {
  protected static override _type = "governance";
  protected static override _iconDir = "oci/governance";
}

export class AuditWhite extends _Governance {
  protected static override _icon = "audit-white.png";
}

export class Audit extends _Governance {
  protected static override _icon = "audit.png";
}

export class CompartmentsWhite extends _Governance {
  protected static override _icon = "compartments-white.png";
}

export class Compartments extends _Governance {
  protected static override _icon = "compartments.png";
}

export class GroupsWhite extends _Governance {
  protected static override _icon = "groups-white.png";
}

export class Groups extends _Governance {
  protected static override _icon = "groups.png";
}

export class LoggingWhite extends _Governance {
  protected static override _icon = "logging-white.png";
}

export class Logging extends _Governance {
  protected static override _icon = "logging.png";
}

export class OCIDWhite extends _Governance {
  protected static override _icon = "ocid-white.png";
}

export class OCID extends _Governance {
  protected static override _icon = "ocid.png";
}

export class PoliciesWhite extends _Governance {
  protected static override _icon = "policies-white.png";
}

export class Policies extends _Governance {
  protected static override _icon = "policies.png";
}

export class TaggingWhite extends _Governance {
  protected static override _icon = "tagging-white.png";
}

export class Tagging extends _Governance {
  protected static override _icon = "tagging.png";
}

