import { _Aws } from "./index.js";

class _Quantum extends _Aws {
  protected static override _type = "quantum";
  protected static override _iconDir = "aws/quantum";
}

export class Braket extends _Quantum {
  protected static override _icon = "braket.png";
}

export class QuantumTechnologies extends _Quantum {
  protected static override _icon = "quantum-technologies.png";
}

