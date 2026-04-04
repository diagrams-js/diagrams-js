import { _Gcp } from "./index.js";

class _Devtools extends _Gcp {
  protected static override _type = "devtools";
  protected static override _iconDir = "gcp/devtools";
}

export class Build extends _Devtools {
  protected static override _icon = "build.png";
}

export class CloudShell extends _Devtools {
  protected static override _icon = "cloud-shell.png";
}

export class CodeForIntellij extends _Devtools {
  protected static override _icon = "code-for-intellij.png";
}

export class Code extends _Devtools {
  protected static override _icon = "code.png";
}

export class ContainerRegistry extends _Devtools {
  protected static override _icon = "container-registry.png";
}

export class GradleAppEnginePlugin extends _Devtools {
  protected static override _icon = "gradle-app-engine-plugin.png";
}

export class IdePlugins extends _Devtools {
  protected static override _icon = "ide-plugins.png";
}

export class MavenAppEnginePlugin extends _Devtools {
  protected static override _icon = "maven-app-engine-plugin.png";
}

export class Scheduler extends _Devtools {
  protected static override _icon = "scheduler.png";
}

export class SDK extends _Devtools {
  protected static override _icon = "sdk.png";
}

export class ServiceCatalog extends _Devtools {
  protected static override _icon = "service-catalog.png";
}

export class SourceRepositories extends _Devtools {
  protected static override _icon = "source-repositories.png";
}

export class Tasks extends _Devtools {
  protected static override _icon = "tasks.png";
}

export class TestLab extends _Devtools {
  protected static override _icon = "test-lab.png";
}

export class ToolsForEclipse extends _Devtools {
  protected static override _icon = "tools-for-eclipse.png";
}

export class ToolsForPowershell extends _Devtools {
  protected static override _icon = "tools-for-powershell.png";
}

export class ToolsForVisualStudio extends _Devtools {
  protected static override _icon = "tools-for-visual-studio.png";
}

// Aliases
export const GCR = ContainerRegistry;

