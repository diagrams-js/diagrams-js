import { _Oci } from "./index.js";

class _Database extends _Oci {
  protected static override _type = "database";
  protected static override _iconDir = "oci/database";
}

export class AutonomousWhite extends _Database {
  protected static override _icon = "autonomous-white.png";
}

export class Autonomous extends _Database {
  protected static override _icon = "autonomous.png";
}

export class BigdataServiceWhite extends _Database {
  protected static override _icon = "bigdata-service-white.png";
}

export class BigdataService extends _Database {
  protected static override _icon = "bigdata-service.png";
}

export class DatabaseServiceWhite extends _Database {
  protected static override _icon = "database-service-white.png";
}

export class DatabaseService extends _Database {
  protected static override _icon = "database-service.png";
}

export class DataflowApacheWhite extends _Database {
  protected static override _icon = "dataflow-apache-white.png";
}

export class DataflowApache extends _Database {
  protected static override _icon = "dataflow-apache.png";
}

export class DcatWhite extends _Database {
  protected static override _icon = "dcat-white.png";
}

export class Dcat extends _Database {
  protected static override _icon = "dcat.png";
}

export class DisWhite extends _Database {
  protected static override _icon = "dis-white.png";
}

export class Dis extends _Database {
  protected static override _icon = "dis.png";
}

export class DMSWhite extends _Database {
  protected static override _icon = "dms-white.png";
}

export class DMS extends _Database {
  protected static override _icon = "dms.png";
}

export class ScienceWhite extends _Database {
  protected static override _icon = "science-white.png";
}

export class Science extends _Database {
  protected static override _icon = "science.png";
}

export class StreamWhite extends _Database {
  protected static override _icon = "stream-white.png";
}

export class Stream extends _Database {
  protected static override _icon = "stream.png";
}

// Aliases
export const ADB = Autonomous;
export const ADBWhite = AutonomousWhite;
export const DBService = DatabaseService;
export const DBServiceWhite = DatabaseServiceWhite;

