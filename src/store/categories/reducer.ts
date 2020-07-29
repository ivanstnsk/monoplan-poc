import { Reducer } from 'redux';

import { CategoriesState, Category } from './categories.types';
import { CategoryActionScheme, CategoryActions } from './actions';

type StatementReducer = Reducer<CategoriesState, CategoryActionScheme>;

const initState: CategoriesState = {
  income: [],
  expenses: [],
};

export const categoriesReducer: StatementReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case CategoryActions.AddCategory:
      const { id, type } = payload as Category;
      const items = state[type].filter(category => category.id !== id);
      items.push(payload);

      return {
        ...state,
        [type]: items,
      }
    default:
      return state;
  }
};