const apiUrl = 'http://localhost:8080/auth';

const fetchToApi = async ({ method, body } = {}) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (method) {
    options.body = JSON.stringify(body);
  }
  const request = await fetch(apiUrl, options);
  return await request.json();
};

export const api = {
  async loginFetch(body, callbackFoo) {
    const { username } = await fetchToApi({ method: 'POST', body });
    callbackFoo(username);
  },

  async logoutFetch(callbackFoo) {
    const { username } = await fetchToApi({ method: 'DELETE' });
    callbackFoo(username);
  },

  async checkUserFetch(callbackFoo) {
    const { username } = await fetchToApi();
    callbackFoo(username);
  },
};
