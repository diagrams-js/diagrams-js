import { _Aws } from "./index.js";

class _Security extends _Aws {
  protected static override _type = "security";
  protected static override _iconDir = "aws/security";
}

export class AdConnector extends _Security {
  protected static override _icon = "ad-connector.png";
}

export class Artifact extends _Security {
  protected static override _icon = "artifact.png";
}

export class CertificateAuthority extends _Security {
  protected static override _icon = "certificate-authority.png";
}

export class CertificateManager extends _Security {
  protected static override _icon = "certificate-manager.png";
}

export class CloudDirectory extends _Security {
  protected static override _icon = "cloud-directory.png";
}

export class Cloudhsm extends _Security {
  protected static override _icon = "cloudhsm.png";
}

export class Cognito extends _Security {
  protected static override _icon = "cognito.png";
}

export class Detective extends _Security {
  protected static override _icon = "detective.png";
}

export class DirectoryService extends _Security {
  protected static override _icon = "directory-service.png";
}

export class FirewallManager extends _Security {
  protected static override _icon = "firewall-manager.png";
}

export class Guardduty extends _Security {
  protected static override _icon = "guardduty.png";
}

export class IdentityAndAccessManagementIamAccessAnalyzer extends _Security {
  protected static override _icon = "identity-and-access-management-iam-access-analyzer.png";
}

export class IdentityAndAccessManagementIamAddOn extends _Security {
  protected static override _icon = "identity-and-access-management-iam-add-on.png";
}

export class IdentityAndAccessManagementIamAWSStsAlternate extends _Security {
  protected static override _icon = "identity-and-access-management-iam-aws-sts-alternate.png";
}

export class IdentityAndAccessManagementIamAWSSts extends _Security {
  protected static override _icon = "identity-and-access-management-iam-aws-sts.png";
}

export class IdentityAndAccessManagementIamDataEncryptionKey extends _Security {
  protected static override _icon = "identity-and-access-management-iam-data-encryption-key.png";
}

export class IdentityAndAccessManagementIamEncryptedData extends _Security {
  protected static override _icon = "identity-and-access-management-iam-encrypted-data.png";
}

export class IdentityAndAccessManagementIamLongTermSecurityCredential extends _Security {
  protected static override _icon = "identity-and-access-management-iam-long-term-security-credential.png";
}

export class IdentityAndAccessManagementIamMfaToken extends _Security {
  protected static override _icon = "identity-and-access-management-iam-mfa-token.png";
}

export class IdentityAndAccessManagementIamPermissions extends _Security {
  protected static override _icon = "identity-and-access-management-iam-permissions.png";
}

export class IdentityAndAccessManagementIamRole extends _Security {
  protected static override _icon = "identity-and-access-management-iam-role.png";
}

export class IdentityAndAccessManagementIamTemporarySecurityCredential extends _Security {
  protected static override _icon = "identity-and-access-management-iam-temporary-security-credential.png";
}

export class IdentityAndAccessManagementIam extends _Security {
  protected static override _icon = "identity-and-access-management-iam.png";
}

export class InspectorAgent extends _Security {
  protected static override _icon = "inspector-agent.png";
}

export class Inspector extends _Security {
  protected static override _icon = "inspector.png";
}

export class KeyManagementService extends _Security {
  protected static override _icon = "key-management-service.png";
}

export class Macie extends _Security {
  protected static override _icon = "macie.png";
}

export class ManagedMicrosoftAd extends _Security {
  protected static override _icon = "managed-microsoft-ad.png";
}

export class ResourceAccessManager extends _Security {
  protected static override _icon = "resource-access-manager.png";
}

export class SecretsManager extends _Security {
  protected static override _icon = "secrets-manager.png";
}

export class SecurityHubFinding extends _Security {
  protected static override _icon = "security-hub-finding.png";
}

export class SecurityHub extends _Security {
  protected static override _icon = "security-hub.png";
}

export class SecurityIdentityAndCompliance extends _Security {
  protected static override _icon = "security-identity-and-compliance.png";
}

export class SecurityLake extends _Security {
  protected static override _icon = "security-lake.png";
}

export class ShieldAdvanced extends _Security {
  protected static override _icon = "shield-advanced.png";
}

export class Shield extends _Security {
  protected static override _icon = "shield.png";
}

export class SimpleAd extends _Security {
  protected static override _icon = "simple-ad.png";
}

export class SingleSignOn extends _Security {
  protected static override _icon = "single-sign-on.png";
}

export class WAFFilteringRule extends _Security {
  protected static override _icon = "waf-filtering-rule.png";
}

export class WAF extends _Security {
  protected static override _icon = "waf.png";
}

// Aliases
export const ACM = CertificateManager;
export const CloudHSM = Cloudhsm;
export const DS = DirectoryService;
export const FMS = FirewallManager;
export const IAMAccessAnalyzer = IdentityAndAccessManagementIamAccessAnalyzer;
export const IAMAWSSts = IdentityAndAccessManagementIamAWSSts;
export const IAMPermissions = IdentityAndAccessManagementIamPermissions;
export const IAMRole = IdentityAndAccessManagementIamRole;
export const IAM = IdentityAndAccessManagementIam;
export const KMS = KeyManagementService;
export const RAM = ResourceAccessManager;

