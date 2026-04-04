import { _Azure } from "./index.js";

class _Monitor extends _Azure {
  protected static override _type = "monitor";
  protected static override _iconDir = "azure/monitor";
}

export class ActivityLog extends _Monitor {
  protected static override _icon = "activity-log.png";
}

export class ApplicationInsights extends _Monitor {
  protected static override _icon = "application-insights.png";
}

export class AutoScale extends _Monitor {
  protected static override _icon = "auto-scale.png";
}

export class AzureMonitorsForSAPSolutions extends _Monitor {
  protected static override _icon = "azure-monitors-for-sap-solutions.png";
}

export class AzureWorkbooks extends _Monitor {
  protected static override _icon = "azure-workbooks.png";
}

export class ChangeAnalysis extends _Monitor {
  protected static override _icon = "change-analysis.png";
}

export class DiagnosticsSettings extends _Monitor {
  protected static override _icon = "diagnostics-settings.png";
}

export class LogAnalyticsWorkspaces extends _Monitor {
  protected static override _icon = "log-analytics-workspaces.png";
}

export class Logs extends _Monitor {
  protected static override _icon = "logs.png";
}

export class Metrics extends _Monitor {
  protected static override _icon = "metrics.png";
}

export class Monitor extends _Monitor {
  protected static override _icon = "monitor.png";
}

export class NetworkWatcher extends _Monitor {
  protected static override _icon = "network-watcher.png";
}

