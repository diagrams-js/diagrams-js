import { _Digitalocean } from "./index.js";

class _Compute extends _Digitalocean {
  protected static override _type = "compute";
  protected static override _iconDir = "digitalocean/compute";
}

export class Containers extends _Compute {
  protected static override _icon = "containers.png";
}

export class Docker extends _Compute {
  protected static override _icon = "docker.png";
}

export class DropletConnect extends _Compute {
  protected static override _icon = "droplet-connect.png";
}

export class DropletSnapshot extends _Compute {
  protected static override _icon = "droplet-snapshot.png";
}

export class Droplet extends _Compute {
  protected static override _icon = "droplet.png";
}

export class K8sCluster extends _Compute {
  protected static override _icon = "k8s-cluster.png";
}

export class K8sNodePool extends _Compute {
  protected static override _icon = "k8s-node-pool.png";
}

export class K8sNode extends _Compute {
  protected static override _icon = "k8s-node.png";
}

