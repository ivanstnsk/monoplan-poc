import { useSelector } from 'react-redux';

import { RootState } from '../../../../store/store.types';
import { CategoriesState, Category } from '../../../../store/categories/categories.types';

type Hook = {
  income: Array<Category>;
  expenses: Array<Category>;
}

export const useStore = (): Hook => {
  const categories = useSelector<RootState, CategoriesState>(state => state.categories);
  const { income, expenses } = categories;

  return {
    income,
    expenses,
  }
}