import { _Aws } from "./index.js";

class _Blockchain extends _Aws {
  protected static override _type = "blockchain";
  protected static override _iconDir = "aws/blockchain";
}

export class BlockchainResource extends _Blockchain {
  protected static override _icon = "blockchain-resource.png";
}

export class Blockchain extends _Blockchain {
  protected static override _icon = "blockchain.png";
}

export class ManagedBlockchain extends _Blockchain {
  protected static override _icon = "managed-blockchain.png";
}

export class QuantumLedgerDatabaseQldb extends _Blockchain {
  protected static override _icon = "quantum-ledger-database-qldb.png";
}

// Aliases
export const QLDB = QuantumLedgerDatabaseQldb;

