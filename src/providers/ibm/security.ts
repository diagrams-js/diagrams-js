import { _Ibm } from "./index.js";

class _Security extends _Ibm {
  protected static override _type = "security";
  protected static override _iconDir = "ibm/security";
}

export class ApiSecurity extends _Security {
  protected static override _icon = "api-security.png";
}

export class BlockchainSecurityService extends _Security {
  protected static override _icon = "blockchain-security-service.png";
}

export class DataSecurity extends _Security {
  protected static override _icon = "data-security.png";
}

export class Firewall extends _Security {
  protected static override _icon = "firewall.png";
}

export class Gateway extends _Security {
  protected static override _icon = "gateway.png";
}

export class GovernanceRiskCompliance extends _Security {
  protected static override _icon = "governance-risk-compliance.png";
}

export class IdentityAccessManagement extends _Security {
  protected static override _icon = "identity-access-management.png";
}

export class IdentityProvider extends _Security {
  protected static override _icon = "identity-provider.png";
}

export class InfrastructureSecurity extends _Security {
  protected static override _icon = "infrastructure-security.png";
}

export class PhysicalSecurity extends _Security {
  protected static override _icon = "physical-security.png";
}

export class SecurityMonitoringIntelligence extends _Security {
  protected static override _icon = "security-monitoring-intelligence.png";
}

export class SecurityServices extends _Security {
  protected static override _icon = "security-services.png";
}

export class TrustendComputing extends _Security {
  protected static override _icon = "trustend-computing.png";
}

export class Vpn extends _Security {
  protected static override _icon = "vpn.png";
}

