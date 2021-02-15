import { PathConfig } from 'src/app/shared/routing/models/path-config.model';
import { NumberPathParameter } from 'src/app/shared/routing/models/path-parameter.model';
import { PathParameterMap } from 'src/app/shared/routing/models/path-parameter-map.model';

const pathVariables = {
    recipeId: new NumberPathParameter('recipeId'),
};

const pathQueries = {};

export type RecipePageParameters = PathParameterMap<
    typeof pathVariables,
    typeof pathQueries
>;

export const RECIPE_PAGE_PATHS = {
    root: <PathConfig>{
        path: 'recipe',
    },
    one: <PathConfig>{
        path: `:${pathVariables.recipeId.name}`,
        variables: [pathVariables.recipeId],
    },
};
