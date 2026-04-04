import { _Ibm } from "./index.js";

class _Blockchain extends _Ibm {
  protected static override _type = "blockchain";
  protected static override _iconDir = "ibm/blockchain";
}

export class BlockchainDeveloper extends _Blockchain {
  protected static override _icon = "blockchain-developer.png";
}

export class Blockchain extends _Blockchain {
  protected static override _icon = "blockchain.png";
}

export class CertificateAuthority extends _Blockchain {
  protected static override _icon = "certificate-authority.png";
}

export class ClientApplication extends _Blockchain {
  protected static override _icon = "client-application.png";
}

export class Communication extends _Blockchain {
  protected static override _icon = "communication.png";
}

export class Consensus extends _Blockchain {
  protected static override _icon = "consensus.png";
}

export class EventListener extends _Blockchain {
  protected static override _icon = "event-listener.png";
}

export class Event extends _Blockchain {
  protected static override _icon = "event.png";
}

export class ExistingEnterpriseSystems extends _Blockchain {
  protected static override _icon = "existing-enterprise-systems.png";
}

export class HyperledgerFabric extends _Blockchain {
  protected static override _icon = "hyperledger-fabric.png";
}

export class KeyManagement extends _Blockchain {
  protected static override _icon = "key-management.png";
}

export class Ledger extends _Blockchain {
  protected static override _icon = "ledger.png";
}

export class MembershipServicesProviderApi extends _Blockchain {
  protected static override _icon = "membership-services-provider-api.png";
}

export class Membership extends _Blockchain {
  protected static override _icon = "membership.png";
}

export class MessageBus extends _Blockchain {
  protected static override _icon = "message-bus.png";
}

export class Node extends _Blockchain {
  protected static override _icon = "node.png";
}

export class Services extends _Blockchain {
  protected static override _icon = "services.png";
}

export class SmartContract extends _Blockchain {
  protected static override _icon = "smart-contract.png";
}

export class TransactionManager extends _Blockchain {
  protected static override _icon = "transaction-manager.png";
}

export class Wallet extends _Blockchain {
  protected static override _icon = "wallet.png";
}

