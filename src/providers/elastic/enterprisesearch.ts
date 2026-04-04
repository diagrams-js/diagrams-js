import { _Elastic } from "./index.js";

class _Enterprisesearch extends _Elastic {
  protected static override _type = "enterprisesearch";
  protected static override _iconDir = "elastic/enterprisesearch";
}

export class AppSearch extends _Enterprisesearch {
  protected static override _icon = "app-search.png";
}

export class Crawler extends _Enterprisesearch {
  protected static override _icon = "crawler.png";
}

export class EnterpriseSearch extends _Enterprisesearch {
  protected static override _icon = "enterprise-search.png";
}

export class SiteSearch extends _Enterprisesearch {
  protected static override _icon = "site-search.png";
}

export class WorkplaceSearch extends _Enterprisesearch {
  protected static override _icon = "workplace-search.png";
}

