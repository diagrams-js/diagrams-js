import { _Aws } from "./index.js";

class _Enduser extends _Aws {
  protected static override _type = "enduser";
  protected static override _iconDir = "aws/enduser";
}

export class Appstream20 extends _Enduser {
  protected static override _icon = "appstream-2-0.png";
}

export class DesktopAndAppStreaming extends _Enduser {
  protected static override _icon = "desktop-and-app-streaming.png";
}

export class Workdocs extends _Enduser {
  protected static override _icon = "workdocs.png";
}

export class Worklink extends _Enduser {
  protected static override _icon = "worklink.png";
}

export class Workspaces extends _Enduser {
  protected static override _icon = "workspaces.png";
}

