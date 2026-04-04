import { _Programming } from "./index.js";

class _Language extends _Programming {
  protected static override _type = "language";
  protected static override _iconDir = "programming/language";
}

export class Bash extends _Language {
  protected static override _icon = "bash.png";
}

export class C extends _Language {
  protected static override _icon = "c.png";
}

export class Cpp extends _Language {
  protected static override _icon = "cpp.png";
}

export class Csharp extends _Language {
  protected static override _icon = "csharp.png";
}

export class Dart extends _Language {
  protected static override _icon = "dart.png";
}

export class Elixir extends _Language {
  protected static override _icon = "elixir.png";
}

export class Erlang extends _Language {
  protected static override _icon = "erlang.png";
}

export class Go extends _Language {
  protected static override _icon = "go.png";
}

export class Java extends _Language {
  protected static override _icon = "java.png";
}

export class Javascript extends _Language {
  protected static override _icon = "javascript.png";
}

export class Kotlin extends _Language {
  protected static override _icon = "kotlin.png";
}

export class Latex extends _Language {
  protected static override _icon = "latex.png";
}

export class Matlab extends _Language {
  protected static override _icon = "matlab.png";
}

export class Nodejs extends _Language {
  protected static override _icon = "nodejs.png";
}

export class Php extends _Language {
  protected static override _icon = "php.png";
}

export class Python extends _Language {
  protected static override _icon = "python.png";
}

export class R extends _Language {
  protected static override _icon = "r.png";
}

export class Ruby extends _Language {
  protected static override _icon = "ruby.png";
}

export class Rust extends _Language {
  protected static override _icon = "rust.png";
}

export class Scala extends _Language {
  protected static override _icon = "scala.png";
}

export class Sql extends _Language {
  protected static override _icon = "sql.png";
}

export class Swift extends _Language {
  protected static override _icon = "swift.png";
}

export class Typescript extends _Language {
  protected static override _icon = "typescript.png";
}

// Aliases
export const JavaScript = Javascript;
export const NodeJS = Nodejs;
export const PHP = Php;
export const TypeScript = Typescript;

