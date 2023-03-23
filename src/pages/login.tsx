import { useState } from 'react';
import axios from 'axios';
import { Stack, Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'

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
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} mt={15}>
      <div>
      <Typography variant="h4">Login</Typography>
        <label htmlFor="email"></label>
        <TextField placeholder="Email" type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <TextField placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} />
      </div>
      <Button type="submit">Login</Button>
      <Typography>Not Signed Up Yet:  <Link href="/" style={{textDecoration: 'none'}}>Sign-Up</Link>!!!</Typography>
      {error && <p>{error}</p>}
      </Stack>

    </form>
  );
};

export default Login;