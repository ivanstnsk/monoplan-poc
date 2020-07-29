import { Action } from 'redux';

import { Category } from './categories.types';

export enum CategoryActions {
  AddCategory = 'Categories/AddCategory',
}

export type CategoryActionScheme = Action<CategoryActions> & {
  type: CategoryActions;
  payload: Category;
}

export const addCategory = (category: Category): CategoryActionScheme => {
  return {
    type: CategoryActions.AddCategory,
    payload: category,
  };
};
