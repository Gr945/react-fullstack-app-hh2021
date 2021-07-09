const apiUrl = 'http://localhost:8080/auth';

const apiToFetch = ({ method, body }) =>
  fetch(apiUrl, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

export const api = {
  async loginFetch(body, callbackFoo) {
    const request = await apiToFetch({ method: 'POST', body });
    const { username } = await request.json();
    callbackFoo(username);
  },

  async logoutFetch(callbackFoo) {
    const request = await apiToFetch({ method: 'DELETE' });
    const { username } = await request.json();
    callbackFoo(username);
  },

  async checkUserFetch(callbackFoo) {
    const request = await fetch(apiUrl, {
      credentials: 'include',
    });
    const { username } = await request.json();
    callbackFoo(username);
  },
};
