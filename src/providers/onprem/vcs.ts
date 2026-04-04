import { _Onprem } from "./index.js";

class _Vcs extends _Onprem {
  protected static override _type = "vcs";
  protected static override _iconDir = "onprem/vcs";
}

export class Git extends _Vcs {
  protected static override _icon = "git.png";
}

export class Gitea extends _Vcs {
  protected static override _icon = "gitea.png";
}

export class Github extends _Vcs {
  protected static override _icon = "github.png";
}

export class Gitlab extends _Vcs {
  protected static override _icon = "gitlab.png";
}

export class Svn extends _Vcs {
  protected static override _icon = "svn.png";
}

