import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import {
  PathParameter,
  BooleanPathParameter,
  NumberPathParameter,
  StringPathParameter
} from 'src/app/shared/routing/models/path-parameter.model';
import { PathConfig } from 'src/app/shared/routing/models/path-config.model';
import { PathParameterMap } from 'src/app/shared/routing/models/path-parameter-map.model';

@Injectable({
  providedIn: 'root'
})
export class RouteParameters {

  public constructor(
    private router: Router
  ) {}

  public get<T extends PathParameterMap<any, any>>(): Observable<T> {
    const activatedRoute = this.getActivatedRoute(this.router);
    return this.extract(activatedRoute);
  }

  private getActivatedRoute(router: Router) {
    let route = router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  public from(route: ActivatedRoute) {
    const context = this;
    return {
      get: function<T extends PathParameterMap<any, any>>(): Observable<T> {
        return context.extract<T>(route);
      }
    }
  }

  private extract<T extends PathParameterMap<any, any>>(route: ActivatedRoute): Observable<T> {
    return combineLatest([
      route.data,
      route.paramMap,
      route.queryParamMap
    ]).pipe(
      filter(([data]) => data.pathConfig),
      map(([data, paramMap, queryMap]) => {
        const variables = this.extractVariables(data.pathConfig, paramMap);
        const queries = this.extractQueries(data.pathConfig, queryMap);
        return <T>{ variables, queries };
      })
    );
  }

  private extractVariables(pathConfig: PathConfig, paramMap: ParamMap) {
    const variables: { [key: string]: PathParameter<any>} = {};
    if (pathConfig.variables) {
      pathConfig.variables.forEach(parameter => {
        const rawValue = paramMap.get(parameter.name);
        variables[parameter.name] = this.lift(parameter, rawValue);
      });
    }
    return variables;
  }

  private extractQueries(pathConfig: PathConfig, queryMap: ParamMap) {
    const queries: { [key: string]: PathParameter<any>} = {};
    if (pathConfig.queries) {
      pathConfig.queries.forEach(query => {
        const rawValue = queryMap.get(query.name);
        queries[query.name] = this.lift(query, rawValue);
      });
    }
    return queries;
  }

  private lift(pathParameter: PathParameter<any>, value: string) {
    if (pathParameter instanceof StringPathParameter) {
      return new StringPathParameter(pathParameter.name, value);
    }
    if (pathParameter instanceof NumberPathParameter) {
      const numberValue = (value != null) ? Number(value) : null;
      return new NumberPathParameter(pathParameter.name, numberValue);
    }
    if (pathParameter instanceof BooleanPathParameter) {
      return new BooleanPathParameter(pathParameter.name, Boolean(value));
    }

    return new StringPathParameter(pathParameter.name, value);
  }

}
