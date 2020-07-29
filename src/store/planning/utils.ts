import { PlanningYear, Plan } from './planning.types';

export const createEmptyPlanningYear = (year: number): PlanningYear => {
  const months = {};
  for (let i = 0; i < 12; i += 1) {
    months[i] = {
      prognosis: {
        income: i * 10,
        expenses: i * 11,
      },
      actual: {
        income: i * 12,
        expenses: i * 13,
      }
    } as Plan;
  }
  const planningYear: PlanningYear = {
    year,
    months: months as PlanningYear['months'],
  }

  return planningYear;
}