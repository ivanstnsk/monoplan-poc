export type CategoryPrognosis = {
  id: string;
  name: string;
  prognosis: number;
  actual: number;
  difference: number;
}

export type Plan = {
  income: Array<CategoryPrognosis>;
  expenses: Array<CategoryPrognosis>;
}

export type PlanningYear = {
  year: number;
  months: {
    1: Plan;
    2: Plan;
    3: Plan;
    4: Plan;
    5: Plan;
    6: Plan;
    7: Plan;
    8: Plan;
    9: Plan;
    10: Plan;
    11: Plan;
    12: Plan;
  }
};

export type PlanningState = {
  plans: Array<PlanningYear>;
}
