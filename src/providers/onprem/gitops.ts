import { _Onprem } from "./index.js";

class _Gitops extends _Onprem {
  protected static override _type = "gitops";
  protected static override _iconDir = "onprem/gitops";
}

export class Argocd extends _Gitops {
  protected static override _icon = "argocd.png";
}

export class Flagger extends _Gitops {
  protected static override _icon = "flagger.png";
}

export class Flux extends _Gitops {
  protected static override _icon = "flux.png";
}

// Aliases
export const ArgoCD = Argocd;

