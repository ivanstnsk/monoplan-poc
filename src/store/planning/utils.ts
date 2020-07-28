import { PlanningYear, Plan } from './planning.types';

export const createEmptyPlanningYear = (year: number): PlanningYear => {
  const months = {};
  for (let i = 1; i < 13; i += 1) {
    months[i] = {
      prognosis: {
        income: 0,
        expenses: 0,
      },
      actual: {
        income: 0,
        expenses: 0,
      }
    } as Plan;
  }
  const planningYear: PlanningYear = {
    year,
    months: months as PlanningYear['months'],
  }

  return planningYear;
}