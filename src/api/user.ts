import * as client from './client';

// import { MOCK_USER_INFO } from './mock-data';

type ResPersonalClientInfo = {
  clientId: string;
  name: string;
  webHookUrl: string;
  accounts: Array<any>;
}

export const getUserInfo = async (): Promise<string | null> => {
  try {
    const res = await client.get('personal/client-info');
    const data = await res.json();
    const { name } = data as any as ResPersonalClientInfo;

    return name;
  } catch (e) {
    console.log(e);
  }
  return null;
  // const { name } = MOCK_USER_INFO;

  // return Promise.resolve(name);
}
