import { useSelector } from 'react-redux';

import { RootState } from '../../../../../../store/store.types';
import { PlanningState, Plan } from '../../../../../../store/planning/planning.types';
import { CategoriesState } from '../../../../../../store/categories/categories.types';

export type CategoryPrognosis = {
  id: string;
  name: string;
  prognosis: number;
  actual: number;
  difference: number;
}

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
  const monthKey = month || 'invalid';

  const planning = useSelector<RootState, PlanningState>(state => state.planning);
  // const categories = useSelector<RootState, CategoriesState>(state => state.categories);
  // const { income, expenses } = categories;

  let monthPlan: Plan = {
    income: [],
    expenses: [],
  };

  const plan = planning.plans.find((plan) => plan.year === yearKey);
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