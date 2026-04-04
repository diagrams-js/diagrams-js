import { _Gcp } from "./index.js";

class _Security extends _Gcp {
  protected static override _type = "security";
  protected static override _iconDir = "gcp/security";
}

export class AccessContextManager extends _Security {
  protected static override _icon = "access-context-manager.png";
}

export class AssuredWorkloads extends _Security {
  protected static override _icon = "assured-workloads.png";
}

export class CertificateAuthorityService extends _Security {
  protected static override _icon = "certificate-authority-service.png";
}

export class CertificateManager extends _Security {
  protected static override _icon = "certificate-manager.png";
}

export class CloudAssetInventory extends _Security {
  protected static override _icon = "cloud-asset-inventory.png";
}

export class Iam extends _Security {
  protected static override _icon = "iam.png";
}

export class IAP extends _Security {
  protected static override _icon = "iap.png";
}

export class KeyManagementService extends _Security {
  protected static override _icon = "key-management-service.png";
}

export class ResourceManager extends _Security {
  protected static override _icon = "resource-manager.png";
}

export class SecretManager extends _Security {
  protected static override _icon = "secret-manager.png";
}

export class SecurityCommandCenter extends _Security {
  protected static override _icon = "security-command-center.png";
}

export class SecurityHealthAdvisor extends _Security {
  protected static override _icon = "security-health-advisor.png";
}

export class SecurityScanner extends _Security {
  protected static override _icon = "security-scanner.png";
}

// Aliases
export const ACM = AccessContextManager;
export const KMS = KeyManagementService;
export const SCC = SecurityCommandCenter;

