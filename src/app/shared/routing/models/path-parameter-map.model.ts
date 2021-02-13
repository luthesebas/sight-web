import { PathParameter } from './path-parameter.model';

export interface PathParameterMap<
    V extends { [key: string]: PathParameter<any> },
    Q extends { [key: string]: PathParameter<any> }
> {
    variables: V;
    queries: Q;
}
