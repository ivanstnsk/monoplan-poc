import * as client from './client';

type ResPersonalClientInfo = {
  clientId: string;
  name: string;
  webHookUrl: string;
  accounts: Array<any>;
}

export const getForMonth = async (): Promise<Array<any>> => {
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

  return Promise.resolve([]);
}
