import { _Saas } from "./index.js";

class _Chat extends _Saas {
  protected static override _type = "chat";
  protected static override _iconDir = "saas/chat";
}

export class Discord extends _Chat {
  protected static override _icon = "discord.png";
}

export class Line extends _Chat {
  protected static override _icon = "line.png";
}

export class Mattermost extends _Chat {
  protected static override _icon = "mattermost.png";
}

export class Messenger extends _Chat {
  protected static override _icon = "messenger.png";
}

export class RocketChat extends _Chat {
  protected static override _icon = "rocket-chat.png";
}

export class Slack extends _Chat {
  protected static override _icon = "slack.png";
}

export class Teams extends _Chat {
  protected static override _icon = "teams.png";
}

export class Telegram extends _Chat {
  protected static override _icon = "telegram.png";
}

