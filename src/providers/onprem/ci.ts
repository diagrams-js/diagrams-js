import { _Onprem } from "./index.js";

class _Ci extends _Onprem {
  protected static override _type = "ci";
  protected static override _iconDir = "onprem/ci";
}

export class Circleci extends _Ci {
  protected static override _icon = "circleci.png";
}

export class Concourseci extends _Ci {
  protected static override _icon = "concourseci.png";
}

export class Droneci extends _Ci {
  protected static override _icon = "droneci.png";
}

export class GithubActions extends _Ci {
  protected static override _icon = "github-actions.png";
}

export class Gitlabci extends _Ci {
  protected static override _icon = "gitlabci.png";
}

export class Jenkins extends _Ci {
  protected static override _icon = "jenkins.png";
}

export class Teamcity extends _Ci {
  protected static override _icon = "teamcity.png";
}

export class Travisci extends _Ci {
  protected static override _icon = "travisci.png";
}

export class Zuulci extends _Ci {
  protected static override _icon = "zuulci.png";
}

// Aliases
export const CircleCI = Circleci;
export const ConcourseCI = Concourseci;
export const DroneCI = Droneci;
export const GitlabCI = Gitlabci;
export const TravisCI = Travisci;
export const TC = Teamcity;
export const ZuulCI = Zuulci;

