import { PathParameter } from './path-parameter.model';

export interface PathConfig {
    path: string;
    variables?: PathParameter<any>[];
    queries?: PathParameter<any>[];
}
