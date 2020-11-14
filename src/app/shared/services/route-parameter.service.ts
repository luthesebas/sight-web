import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PathConfig } from 'src/app/shared/models/common/path-config.model';
import { PathParameter } from 'src/app/shared/models/common/path-parameter.model';
import { PathParameters } from 'src/app/shared/models/common/path-parameters.model';

@Injectable({
  providedIn: 'root'
})
export class RouteParameters {

  public from(source: ActivatedRoute) {
    const context = this;
    return {
      to: function<T extends PathParameters<any, any>>(target?: T) {
        return context.extract<T>(source, target);
      }
    }
  }

  private extract<T extends PathParameters<any, any>>(source: ActivatedRoute, target?: T) {
    return combineLatest([source.data, source.paramMap, source.queryParamMap]).pipe(
      map(routeDetails => {
        const pathConfig: PathConfig = routeDetails[0].pathConfig;
        const paramMap = routeDetails[1];
        const queryMap = routeDetails[2];

        const parameters: T = this.valueOrEmptyObject(target);
        parameters.variables = this.valueOrEmptyObject(parameters.variables);
        parameters.queries = this.valueOrEmptyObject(parameters.queries);

        if (pathConfig.variables) {
          pathConfig.variables.forEach(parameter => {
            const rawValue = paramMap.get(parameter.name);
            parameters.variables[parameter.name] = this.lift(parameter, rawValue);
          });
        }

        if (pathConfig.queries) {
          pathConfig.queries.forEach(query => {
            const rawValue = queryMap.get(query.name);
            parameters.queries[query.name] = this.lift(query, rawValue);
          });
        }

        return parameters;
      })
    );
  }

  private valueOrEmptyObject(value: any) {
    return value || {};
  }

  private lift(pathParameter: PathParameter, value: string) {
    const parameter = { ...pathParameter };

    switch (parameter.type) {
      case 'string': {
        parameter.value = value;
        break;
      }
      case 'number': {
        parameter.value = (value !== null) ? Number(value) : null;
        break;
      }
      case 'boolean': {
        parameter.value = Boolean(value);
        break;
      }
      case 'date': {
        parameter.value = new Date(value);
        break;
      }
      default: {};
    }
    return parameter;
  }

}
