import { _Azure } from "./index.js";

class _Blockchain extends _Azure {
  protected static override _type = "blockchain";
  protected static override _iconDir = "azure/blockchain";
}

export class AbsMember extends _Blockchain {
  protected static override _icon = "abs-member.png";
}

export class AzureBlockchainService extends _Blockchain {
  protected static override _icon = "azure-blockchain-service.png";
}

export class AzureTokenService extends _Blockchain {
  protected static override _icon = "azure-token-service.png";
}

export class BlockchainApplications extends _Blockchain {
  protected static override _icon = "blockchain-applications.png";
}

export class Consortium extends _Blockchain {
  protected static override _icon = "consortium.png";
}

export class OutboundConnection extends _Blockchain {
  protected static override _icon = "outbound-connection.png";
}

