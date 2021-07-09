import { useState } from 'react';
import { api } from '../api/api-config';

const initForm = { username: '', password: '' };

const Auth = ({ setUser }) => {
  const [formValue, setFormValue] = useState(initForm);

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormValue((pre) => ({ ...pre, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    api.loginFetch(formValue, setUser);
    setFormValue(initForm);
  };

  return (
    <div className="box">
      <h1>Auth</h1>
      <form onSubmit={submitHandler} onChange={onChangeHandler}>
        <input
          name="username"
          placeholder="username"
          value={formValue.username}
        />
        <input
          name="password"
          placeholder="password"
          value={formValue.password}
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Auth;
