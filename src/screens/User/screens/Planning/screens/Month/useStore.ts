import { useSelector } from 'react-redux';

import { RootState } from '../../../../../../store/store.types';
import { PlanningState, Plan } from '../../../../../../store/planning/planning.types';

type Hook = {
  monthPlan: Plan | undefined;
}

export const useStore = (year: string | undefined, month: string | undefined): Hook => {
  const yearKey = year ? parseInt(year) : NaN;
  const monthKey = month || 'invalid';
  console.log(yearKey, monthKey)
  const planning = useSelector<RootState, PlanningState>(state => state.planning);

  let monthPlan;

  const plan = planning.plans.find((plan) => plan.year === yearKey);
  if (plan) {
    monthPlan = plan.months[monthKey];
  }

  return {
    monthPlan,
  }
}