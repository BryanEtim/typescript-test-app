import { useState } from 'react';
import axios from 'axios';

type User = {
  email: string;
  password: string;
};

const Login = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://clarkifre.pythonanywhere.com/auth/login', user);
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;