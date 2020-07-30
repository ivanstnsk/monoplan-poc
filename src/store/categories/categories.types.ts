export type CategoryType =
  | 'income'
  | 'expenses';

export type Category = {
  id: string;
  type: CategoryType;
  name: string;
};

export type CategoriesState = {
  income: Array<Category>;
  expenses: Array<Category>;
}
