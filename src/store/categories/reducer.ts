import { Reducer } from 'redux';

import { CategoriesState, Category, CategoryType } from './categories.types';
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
    case CategoryActions.AddCategory: {
      const category = payload as Category;
      const items = state[category.type].filter(cat => cat.id !== category.id);

      const categoriesWithSameName = state[category.type].filter(cat => cat.name === category.name);
      if (categoriesWithSameName.length > 0) {
        return state;
      }

      items.push(category);

      return {
        ...state,
        [category.type]: items,
      }
    }
    case CategoryActions.UpdateCategory: {
      const category = payload as Category;
      const targetIndex = state[category.type].findIndex(cat => cat.id === category.id);

      if (targetIndex < 0) {
        return state;
      }

      const categoriesWithSameName = state[category.type].filter(cat => cat.name === category.name);
      if (categoriesWithSameName.length > 0) {
        return state;
      }

      const items = Array.from(state[category.type]);
      items[targetIndex] = { ...category };
      return {
        ...state,
        [category.type]: items,
      }
    }
    case CategoryActions.DeleteCategory: {
      const { id, type } = payload as { id: string, type: CategoryType };
      const targetIndex = state[type].findIndex(cat => cat.id === id);

      if (targetIndex < 0) {
        return state;
      }

      const items = Array.from(state[type]);
      items.splice(targetIndex, 1);
      return {
        ...state,
        [type]: items,
      }
    }
    default:
      return state;
  }
};