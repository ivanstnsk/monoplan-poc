type Method = 'get';

const req = (method: Method, url: string) => {
  const authData = localStorage.getItem('persist:auth');
  const headers = new Headers();
  const fullUrl = `https://api.monobank.ua/${url}`;

  if (authData) {
    const { token } = JSON.parse(authData);
    if (token) {
      headers.append('X-Token', token.substring(1, token.length - 1));
    }
  }

  return fetch(fullUrl, {
    method,
    headers,
  })
}

export const get = (url: string) => req('get', url);
