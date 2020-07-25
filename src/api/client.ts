type Method = 'get';

const req = (method: Method, url: string) => {
  const token = localStorage.getItem('token');
  const headers = new Headers();
  const fullUrl = `https://api.monobank.ua/${url}`;

  if (token) {
    headers.append('X-Token', token);
  }

  return fetch(fullUrl, {
    method,
    headers,
  })
}

export const get = (url: string) => req('get', url);
