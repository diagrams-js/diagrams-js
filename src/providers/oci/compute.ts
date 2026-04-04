import { _Oci } from "./index.js";

class _Compute extends _Oci {
  protected static override _type = "compute";
  protected static override _iconDir = "oci/compute";
}

export class AutoscaleWhite extends _Compute {
  protected static override _icon = "autoscale-white.png";
}

export class Autoscale extends _Compute {
  protected static override _icon = "autoscale.png";
}

export class BMWhite extends _Compute {
  protected static override _icon = "bm-white.png";
}

export class BM extends _Compute {
  protected static override _icon = "bm.png";
}

export class ContainerWhite extends _Compute {
  protected static override _icon = "container-white.png";
}

export class Container extends _Compute {
  protected static override _icon = "container.png";
}

export class FunctionsWhite extends _Compute {
  protected static override _icon = "functions-white.png";
}

export class Functions extends _Compute {
  protected static override _icon = "functions.png";
}

export class InstancePoolsWhite extends _Compute {
  protected static override _icon = "instance-pools-white.png";
}

export class InstancePools extends _Compute {
  protected static override _icon = "instance-pools.png";
}

export class OCIRWhite extends _Compute {
  protected static override _icon = "ocir-white.png";
}

export class OCIR extends _Compute {
  protected static override _icon = "ocir.png";
}

export class OKEWhite extends _Compute {
  protected static override _icon = "oke-white.png";
}

export class OKE extends _Compute {
  protected static override _icon = "oke.png";
}

export class VMWhite extends _Compute {
  protected static override _icon = "vm-white.png";
}

export class VM extends _Compute {
  protected static override _icon = "vm.png";
}

// Aliases
export const VirtualMachine = VM;
export const VirtualMachineWhite = VMWhite;
export const BareMetal = BM;
export const BareMetalWhite = BMWhite;
export const OCIRegistry = OCIR;
export const OCIRegistryWhite = OCIRWhite;
export const ContainerEngine = OKE;
export const ContainerEngineWhite = OKEWhite;

