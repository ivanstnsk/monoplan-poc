import { CategoriesState } from '../categories/categories.types';

import { PlanningYear, Plan } from './planning.types';

export const createEmptyPlanningYear = (year: number, categoriesState: CategoriesState): PlanningYear => {
  const months = {};
  for (let i = 0; i < 12; i += 1) {
    months[i] = {
      income: categoriesState.income.map(category => {
        const prognosis = 100;
        const actual = 50;
        const difference = prognosis - actual;

        return {
          id: category.id,
          name: category.name,
          prognosis,
          actual,
          difference,
        }
      }),
      expenses: categoriesState.expenses.map(category => {
        const prognosis = 100;
        const actual = 50;
        const difference = prognosis - actual;

        return {
          id: category.id,
          name: category.name,
          prognosis,
          actual,
          difference,
        }
      }),
    } as Plan;
  }
  const planningYear: PlanningYear = {
    year,
    months: months as PlanningYear['months'],
  }

  return planningYear;
}