import { PathConfig } from 'src/app/shared/models/common/path-config.model';
import { PathParameter } from 'src/app/shared/models/common/path-parameter.model';
import { PathParameters } from 'src/app/shared/models/common/path-parameters.model';

const pathVariables = {
  recipeId: <PathParameter>{
    name: 'recipeId',
    type: 'number'
  }
}

const pathQueries = {

}

export type RecipePageParameters = PathParameters<
  typeof pathVariables,
  typeof pathQueries
>;

export const RECIPE_PAGE_PATHS = {
  root: <PathConfig>{
    path: 'recipe'
  },
  one: <PathConfig>{
    path: `:${pathVariables.recipeId.name}`,
    variables: [ pathVariables.recipeId ]
  },
}
