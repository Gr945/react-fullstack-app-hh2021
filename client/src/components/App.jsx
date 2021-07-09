import Auth from './Auth';
import { useState } from 'react';
import { api } from '../api/api-config';

const App = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <h1>user: {user}</h1>
      <button onClick={() => api.checkUserFetch(setUser)}>
        GET CURRENT USER
      </button>
      <button onClick={() => api.logoutFetch(setUser)}>LOGOUT</button>
      {!user && <Auth setUser={setUser} />}
    </div>
  );
};

export default App;
