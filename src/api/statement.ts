import * as client from './client';
import { StatementRecord } from '../store/statement/statement.types';

// import { MOCK_STATEMENT } from './mock-data';

type ResPersonalStatement = Array<StatementRecord>;

// const generateEmptyItems = (month: number): Array<StatementRecord> => {
//   const maxDays = new Date(2020, month, 0).getDate();
//   const items: Array<StatementRecord> = [];

//   for (let i = 0; i < maxDays; i += 1) {
//     items.push({
//       time: new Date(`2020.${month}.${i}`).getTime() / 1000,
//       amount: 0,
//       balance: 0,
//     });
//   }

//   return items;
// }

export const getForMonth = async (month: number): Promise<ResPersonalStatement> => {
  const unixStart = new Date(`2020.${month}.01`).getTime() / 1000;
  const unixEnd = new Date(`2020.${month}.${new Date(2020, month, 0).getDate()}`).getTime() / 1000;

  // return Promise.resolve(MOCK_STATEMENT);

  try {
    const res = await client.get(`personal/statement/0/${unixStart}/${unixEnd}`);
    const data = await res.json();

    if (data && data.length > 0) {
      const items = data as any as ResPersonalStatement;

      return items;
    }
  } catch (e) {
    console.log(e);
  }
  return [];
}
