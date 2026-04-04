import { _Onprem } from "./index.js";

class _Inmemory extends _Onprem {
  protected static override _type = "inmemory";
  protected static override _iconDir = "onprem/inmemory";
}

export class Aerospike extends _Inmemory {
  protected static override _icon = "aerospike.png";
}

export class Hazelcast extends _Inmemory {
  protected static override _icon = "hazelcast.png";
}

export class Memcached extends _Inmemory {
  protected static override _icon = "memcached.png";
}

export class Redis extends _Inmemory {
  protected static override _icon = "redis.png";
}

