import { _Aws } from "./index.js";

class _Game extends _Aws {
  protected static override _type = "game";
  protected static override _iconDir = "aws/game";
}

export class GameTech extends _Game {
  protected static override _icon = "game-tech.png";
}

export class Gamelift extends _Game {
  protected static override _icon = "gamelift.png";
}

