import { _Azure } from "./index.js";

class _Security extends _Azure {
  protected static override _type = "security";
  protected static override _iconDir = "azure/security";
}

export class ApplicationSecurityGroups extends _Security {
  protected static override _icon = "application-security-groups.png";
}

export class AzureADAuthenticationMethods extends _Security {
  protected static override _icon = "azure-ad-authentication-methods.png";
}

export class AzureADIdentityProtection extends _Security {
  protected static override _icon = "azure-ad-identity-protection.png";
}

export class AzureADPrivlegedIdentityManagement extends _Security {
  protected static override _icon = "azure-ad-privleged-identity-management.png";
}

export class AzureADRiskySignins extends _Security {
  protected static override _icon = "azure-ad-risky-signins.png";
}

export class AzureADRiskyUsers extends _Security {
  protected static override _icon = "azure-ad-risky-users.png";
}

export class AzureInformationProtection extends _Security {
  protected static override _icon = "azure-information-protection.png";
}

export class AzureSentinel extends _Security {
  protected static override _icon = "azure-sentinel.png";
}

export class ConditionalAccess extends _Security {
  protected static override _icon = "conditional-access.png";
}

export class Defender extends _Security {
  protected static override _icon = "defender.png";
}

export class Detonation extends _Security {
  protected static override _icon = "detonation.png";
}

export class ExtendedSecurityUpdates extends _Security {
  protected static override _icon = "extended-security-updates.png";
}

export class Extendedsecurityupdates extends _Security {
  protected static override _icon = "extendedsecurityupdates.png";
}

export class IdentitySecureScore extends _Security {
  protected static override _icon = "identity-secure-score.png";
}

export class KeyVaults extends _Security {
  protected static override _icon = "key-vaults.png";
}

export class MicrosoftDefenderEasm extends _Security {
  protected static override _icon = "microsoft-defender-easm.png";
}

export class MicrosoftDefenderForCloud extends _Security {
  protected static override _icon = "microsoft-defender-for-cloud.png";
}

export class MicrosoftDefenderForIot extends _Security {
  protected static override _icon = "microsoft-defender-for-iot.png";
}

export class MultifactorAuthentication extends _Security {
  protected static override _icon = "multifactor-authentication.png";
}

export class SecurityCenter extends _Security {
  protected static override _icon = "security-center.png";
}

export class Sentinel extends _Security {
  protected static override _icon = "sentinel.png";
}

export class UserSettings extends _Security {
  protected static override _icon = "user-settings.png";
}

