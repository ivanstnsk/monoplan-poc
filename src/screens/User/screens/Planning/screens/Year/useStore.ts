import { useSelector } from 'react-redux';

import { RootState } from '../../../../../../store/store.types';
import { PlanningState, PlanningYear } from '../../../../../../store/planning/planning.types';

type Hook = {
  plan: PlanningYear | undefined;
}

export const useStore = (year: string | undefined): Hook => {
  const numYear = year ? parseInt(year) : NaN;

  const planning = useSelector<RootState, PlanningState>(state => state.planning);

  const plan = planning.plans.find((plan) => plan.year === numYear);

  return {
    plan,
  }
}