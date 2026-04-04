import { _Firebase } from "./index.js";

class _Quality extends _Firebase {
  protected static override _type = "quality";
  protected static override _iconDir = "firebase/quality";
}

export class AppDistribution extends _Quality {
  protected static override _icon = "app-distribution.png";
}

export class CrashReporting extends _Quality {
  protected static override _icon = "crash-reporting.png";
}

export class Crashlytics extends _Quality {
  protected static override _icon = "crashlytics.png";
}

export class PerformanceMonitoring extends _Quality {
  protected static override _icon = "performance-monitoring.png";
}

export class TestLab extends _Quality {
  protected static override _icon = "test-lab.png";
}

