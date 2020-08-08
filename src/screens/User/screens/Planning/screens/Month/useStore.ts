import { useSelector } from 'react-redux';

import { RootState } from '../../../../../../store/store.types';
import { PlanningState, PlanningMonth, CategoryPrognosis } from '../../../../../../store/planning/planning.types';

export type Balance = {
  prognosis: number;
  actual: number;
}

type Hook = {
  income: {
    balance: Balance;
    categories: Array<CategoryPrognosis>;
  }
  expenses: {
    balance: Balance;
    categories: Array<CategoryPrognosis>;
  }
}

export const useStore = (year: string | undefined, month: string | undefined): Hook => {
  const yearKey = year ? parseInt(year) : NaN;
  const monthKey = month ? parseInt(month) : NaN;

  const planning = useSelector<RootState, PlanningState>(state => state.planning);
  // const categories = useSelector<RootState, CategoriesState>(state => state.categories);
  // const { income, expenses } = categories;

  let monthPlan: PlanningMonth = {
    month: monthKey,
    income: [],
    expenses: [],
  };

  const plan = planning.plans[yearKey]
  if (plan) {
    monthPlan = plan.months[monthKey];
  }

  const { income, expenses } = monthPlan;

  // const incomePrognosis = income.map((category) => {
  //   const prognosis = 100;
  //   const actual = 50;
  //   const difference = prognosis - actual;

  //   return {
  //     id: category.id,
  //     name: category.name,
  //     prognosis,
  //     actual,
  //     difference,
  //   }
  // });

  // const expensesPrognosis = income.map((category) => {
  //   const prognosis = 100;
  //   const actual = 50;
  //   const difference = prognosis - actual;

  //   return {
  //     id: category.id,
  //     name: category.name,
  //     prognosis,
  //     actual,
  //     difference,
  //   }
  // });

  const incomeBalance = {
    prognosis: income.reduce((acc, category) => {
      return acc += category.prognosis;
    }, 0),
    actual: income.reduce((acc, category) => {
      return acc += category.actual;
    }, 0),
  }

  const expensesBalance = {
    prognosis: expenses.reduce((acc, category) => {
      return acc += category.prognosis;
    }, 0),
    actual: expenses.reduce((acc, category) => {
      return acc += category.actual;
    }, 0),
  }

  return {
    income: {
      balance: incomeBalance,
      categories: income
    },
    expenses: {
      balance: expensesBalance,
      categories: expenses
    }
  }
}