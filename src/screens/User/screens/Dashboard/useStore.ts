import { useSelector } from 'react-redux';

import { RootState } from '../../../../store/store.types';
import { StatementState } from '../../../../store/statement/statement.types';

type StatementGroupedByDay = {
  day: string;
  minus: number;
  plus: number;
  balance: number;
}

type Hook = {
  statementGroupedByDay: Array<StatementGroupedByDay>;
}

export const useStore = (): Hook => {
  const statement = useSelector<RootState, StatementState>(state => state.statement);

  const dates = new Map<string, StatementGroupedByDay>();

  statement.items.forEach(({ time, amount, balance }) => {
    const m = amount / 100;
    const entry: StatementGroupedByDay = {
      day: `${new Date(time * 1000).getDate()}`,
      minus: m < 0 ? m : 0,
      plus: m > 0 ? m : 0,
      balance: balance / 100,
    };
    const item = dates.get(entry.day);
    entry.minus += item ? item.minus : 0;
    entry.plus += item ? item.plus : 0;
    dates.set(entry.day, entry);
  });

  const statementGroupedByDay: Array<StatementGroupedByDay> = [];
  dates.forEach((value) => {
    statementGroupedByDay.unshift({
      ...value,
      minus: value.minus * -1,
    });
  });

  return {
    statementGroupedByDay,
  }
}