import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { combineLatest, EMPTY, Observable } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { PathConfig } from 'src/app/shared/routing/models/path-config.model';
import { PathParameterMap } from 'src/app/shared/routing/models/path-parameter-map.model';
import {
  BooleanPathParameter,
  NumberPathParameter,
  PathParameter,
  StringPathParameter
} from 'src/app/shared/routing/models/path-parameter.model';

@Injectable({
    providedIn: 'root',
})
export class RouteParameters {
    public constructor(private router: Router, private location: Location) {}

    // ------------------------------------------------------------------------

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
            get: function <T extends PathParameterMap<any, any>>(): Observable<T> {
                return context.extract<T>(route);
            },
        };
    }

    private extract<T extends PathParameterMap<any, any>>(
        route: ActivatedRoute
    ): Observable<T> {
        return combineLatest([route.data, route.paramMap, route.queryParamMap]).pipe(
            filter(([data]) => data.pathConfig),
            map(([data, paramMap, queryMap]) => {
                const variables = this.extractVariables(data.pathConfig, paramMap);
                const queries = this.extractQueries(data.pathConfig, queryMap);
                return <T>{ variables, queries };
            })
        );
    }

    private extractVariables(pathConfig: PathConfig, paramMap: ParamMap) {
        const variables: { [key: string]: PathParameter<any> } = {};
        if (pathConfig.variables) {
            pathConfig.variables.forEach((parameter) => {
                const rawValue = paramMap.get(parameter.name);
                variables[parameter.name] = this.lift(parameter, rawValue);
            });
        }
        return variables;
    }

    private extractQueries(pathConfig: PathConfig, queryMap: ParamMap) {
        const queries: { [key: string]: PathParameter<any> } = {};
        if (pathConfig.queries) {
            pathConfig.queries.forEach((query) => {
                const rawValue = queryMap.get(query.name);
                queries[query.name] = this.lift(query, rawValue);
            });
        }
        return queries;
    }

    private lift(pathParameter: PathParameter<any>, value: string | null) {
        if (pathParameter instanceof StringPathParameter) {
            return new StringPathParameter(pathParameter.name, value);
        }
        if (pathParameter instanceof NumberPathParameter) {
            const numberValue = value != null ? Number(value) : null;
            return new NumberPathParameter(pathParameter.name, numberValue);
        }
        if (pathParameter instanceof BooleanPathParameter) {
            return new BooleanPathParameter(pathParameter.name, Boolean(value));
        }

        return new StringPathParameter(pathParameter.name, value);
    }

    // ------------------------------------------------------------------------

    /**
     * Pushes a new URl to the platform's history
     * Important: This method causes no ActivatedRoute events!
     * @param pathVariables New path variable values
     * @param pathQueries New path query values
     * @param fragment New fragment value
     */
    public pushUrl(
        pathVariables?: PathParameter<any>[],
        pathQueries?: PathParameter<any>[],
        fragment?: string
    ) {
        this.constructUrl(pathVariables, pathQueries, fragment).subscribe((url) =>
            this.location.go(url.toString())
        );
    }

    /**
     * Replaces the top item of the platform's history by the new URl
     * Important: This method causes no ActivatedRoute events!
     * @param pathVariables New path variable values
     * @param pathQueries New path query values
     * @param fragment New fragment value
     */
    public replaceUrl(
        pathVariables?: PathParameter<any>[],
        pathQueries?: PathParameter<any>[],
        fragment?: string
    ) {
        this.constructUrl(pathVariables, pathQueries, fragment).subscribe((url) =>
            this.location.replaceState(url.toString())
        );
    }

    // TODO: Get it done
    //  1. Get path config, current route and replacements
    //  2. Iterate over path config parts and check for placeholder
    //  3. Exists replacement for placeholder use the replacement value, else value from the current route
    private constructUrl(
        pathVariables?: PathParameter<any>[],
        pathQueries?: PathParameter<any>[],
        fragment?: string
    ) {
        if (!(pathVariables && pathQueries && fragment)) {
            return EMPTY;
        }
        const currentUrl = this.router.url;
        return this.getActivatedRoute(this.router).data.pipe(
            pluck('pathConfig'),
            map((pathConfig: PathConfig) =>
                this.constructTargetUrl(
                    pathConfig.path,
                    currentUrl,
                    pathVariables,
                    pathQueries,
                    fragment
                )
            )
        );
    }

    private constructTargetUrl(
        rawUrl: string,
        currentUrl: string,
        variableReplacements: PathParameter<any>[],
        queryReplacements?: PathParameter<any>[],
        fragment?: string
    ) {
        const [rawPath, rawQueries = ''] = rawUrl.split('?');
        const rawPathSegments = rawPath.split('/');
        const rawQuerySegments = rawQueries.split('&');

        const [currentPath, currentQueries = ''] = currentUrl.split('?');
        const currentPathSegments = currentPath.split('/');
        const currentQuerySegments = currentQueries.split('&');

        const path = this.constructPath(
            rawPathSegments,
            currentPathSegments,
            variableReplacements
        );

        //this.router.parseUrl('/ba/bli/blub');

        return fragment != null ? `${path}#${fragment}` : path;
    }

    private constructPath(
        rawPathSegments: string[],
        currentPathSegments: string[],
        replacements: PathParameter<any>[]
    ) {
        const pathSegments: string[] = [];

        const offset = currentPathSegments.length - rawPathSegments.length;
        for (let i = 0; i < currentPathSegments.length; i++) {
            const segmentKey: string | undefined = rawPathSegments[i - offset];
            const replacement = segmentKey
                ? this.findReplacement(segmentKey, replacements)
                : null;
            const segmentValue = replacement ? replacement.value : currentPathSegments[i];

            pathSegments.push(segmentValue);
        }

        return pathSegments.join('/');
    }

    private constructQueries() {
        // TODO
    }

    private findReplacement(searchKey: string, values: PathParameter<any>[]) {
        return values.find((v) => `:${v.name}` === searchKey);
    }
}
