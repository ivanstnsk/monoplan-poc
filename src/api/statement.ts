// import * as client from './client';
import { StatementRecord } from '../store/statement/statement.types';

import { MOCK_STATEMENT } from './mock-data';

type ResPersonalStatement = Array<StatementRecord>;

export const getForMonth = async (): Promise<ResPersonalStatement> => {
  // const unixStart = new Date(`2020.${month}.01`).getTime() / 1000;
  // const unixEnd = new Date(`2020.${month}.${new Date(2020, month, 0).getDate()}`).getTime() / 1000;

  // try {
  //   const res = await client.get('personal/client-info');
  //   const data = await res.json();
  //   const { name } = data as any as ResPersonalClientInfo;

  //   return name;
  // } catch (e) {
  //   console.log(e);
  // }
  // return null;

  return Promise.resolve(MOCK_STATEMENT);
}
