import { _Onprem } from "./index.js";

class _Queue extends _Onprem {
  protected static override _type = "queue";
  protected static override _iconDir = "onprem/queue";
}

export class Activemq extends _Queue {
  protected static override _icon = "activemq.png";
}

export class Celery extends _Queue {
  protected static override _icon = "celery.png";
}

export class Emqx extends _Queue {
  protected static override _icon = "emqx.png";
}

export class Kafka extends _Queue {
  protected static override _icon = "kafka.png";
}

export class Nats extends _Queue {
  protected static override _icon = "nats.png";
}

export class Rabbitmq extends _Queue {
  protected static override _icon = "rabbitmq.png";
}

export class Zeromq extends _Queue {
  protected static override _icon = "zeromq.png";
}

// Aliases
export const ActiveMQ = Activemq;
export const EMQX = Emqx;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;

