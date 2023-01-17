import ContainerLayout from 'components/Container/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';
const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handlerSubmitRegister = e => {
    e.preventDefault();

    if (!username || !email || !password) {
      return;
    }

    dispatch(registerUser({ username, email, password }));
    resetForm();
  };

  return (
    <ContainerLayout>
      <form onSubmit={handlerSubmitRegister}>
        <input
          required
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Registration</button>
      </form>
    </ContainerLayout>
  );
};

export default RegistrationPage;
