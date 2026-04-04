import { _Onprem } from "./index.js";

class _Search extends _Onprem {
  protected static override _type = "search";
  protected static override _iconDir = "onprem/search";
}

export class Solr extends _Search {
  protected static override _icon = "solr.png";
}

