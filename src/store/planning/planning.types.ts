export type CategoryPrognosis = {
  id: string;
  name: string;
  prognosis: number;
  actual: number;
  difference: number;
}

export type PlanningMonth = {
  month: number;
  income: Array<CategoryPrognosis>;
  expenses: Array<CategoryPrognosis>;
}

export type PlanningYear = {
  year: number;
  months: Record<number, PlanningMonth>;
};

export type PlanningState = {
  plans: Record<number, PlanningYear>;
}
