import { _Generic } from "./index.js";

class _Os extends _Generic {
  protected static override _type = "os";
  protected static override _iconDir = "generic/os";
}

export class Android extends _Os {
  protected static override _icon = "android.png";
}

export class Centos extends _Os {
  protected static override _icon = "centos.png";
}

export class Debian extends _Os {
  protected static override _icon = "debian.png";
}

export class IOS extends _Os {
  protected static override _icon = "ios.png";
}

export class LinuxGeneral extends _Os {
  protected static override _icon = "linux-general.png";
}

export class Raspbian extends _Os {
  protected static override _icon = "raspbian.png";
}

export class RedHat extends _Os {
  protected static override _icon = "red-hat.png";
}

export class Suse extends _Os {
  protected static override _icon = "suse.png";
}

export class Ubuntu extends _Os {
  protected static override _icon = "ubuntu.png";
}

export class Windows extends _Os {
  protected static override _icon = "windows.png";
}

