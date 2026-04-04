import { _Onprem } from "./index.js";

class _Network extends _Onprem {
  protected static override _type = "network";
  protected static override _iconDir = "onprem/network";
}

export class Ambassador extends _Network {
  protected static override _icon = "ambassador.png";
}

export class Apache extends _Network {
  protected static override _icon = "apache.png";
}

export class Bind9 extends _Network {
  protected static override _icon = "bind-9.png";
}

export class Caddy extends _Network {
  protected static override _icon = "caddy.png";
}

export class CiscoRouter extends _Network {
  protected static override _icon = "cisco-router.png";
}

export class CiscoSwitchL2 extends _Network {
  protected static override _icon = "cisco-switch-l2.png";
}

export class CiscoSwitchL3 extends _Network {
  protected static override _icon = "cisco-switch-l3.png";
}

export class Consul extends _Network {
  protected static override _icon = "consul.png";
}

export class Envoy extends _Network {
  protected static override _icon = "envoy.png";
}

export class Etcd extends _Network {
  protected static override _icon = "etcd.png";
}

export class Glassfish extends _Network {
  protected static override _icon = "glassfish.png";
}

export class Gunicorn extends _Network {
  protected static override _icon = "gunicorn.png";
}

export class Haproxy extends _Network {
  protected static override _icon = "haproxy.png";
}

export class Internet extends _Network {
  protected static override _icon = "internet.png";
}

export class Istio extends _Network {
  protected static override _icon = "istio.png";
}

export class Jbossas extends _Network {
  protected static override _icon = "jbossas.png";
}

export class Jetty extends _Network {
  protected static override _icon = "jetty.png";
}

export class Kong extends _Network {
  protected static override _icon = "kong.png";
}

export class Linkerd extends _Network {
  protected static override _icon = "linkerd.png";
}

export class Mikrotik extends _Network {
  protected static override _icon = "mikrotik.png";
}

export class Nginx extends _Network {
  protected static override _icon = "nginx.png";
}

export class Ocelot extends _Network {
  protected static override _icon = "ocelot.png";
}

export class OpenServiceMesh extends _Network {
  protected static override _icon = "open-service-mesh.png";
}

export class Opnsense extends _Network {
  protected static override _icon = "opnsense.png";
}

export class Pfsense extends _Network {
  protected static override _icon = "pfsense.png";
}

export class Pomerium extends _Network {
  protected static override _icon = "pomerium.png";
}

export class Powerdns extends _Network {
  protected static override _icon = "powerdns.png";
}

export class Tomcat extends _Network {
  protected static override _icon = "tomcat.png";
}

export class Traefik extends _Network {
  protected static override _icon = "traefik.png";
}

export class Tyk extends _Network {
  protected static override _icon = "tyk.png";
}

export class Vyos extends _Network {
  protected static override _icon = "vyos.png";
}

export class Wildfly extends _Network {
  protected static override _icon = "wildfly.png";
}

export class Yarp extends _Network {
  protected static override _icon = "yarp.png";
}

export class Zookeeper extends _Network {
  protected static override _icon = "zookeeper.png";
}

// Aliases
export const ETCD = Etcd;
export const HAProxy = Haproxy;
export const OSM = OpenServiceMesh;
export const OPNSense = Opnsense;
export const PFSense = Pfsense;
export const VyOS = Vyos;

