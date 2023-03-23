import React, { useState } from 'react';
import axios from 'axios';
import { Stack, Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'

interface SignupData {

  email: string;
  password: string;
}

const SignupPage = () => {
  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    password: '',
  });

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('https://clarkifre.pythonanywhere.com/auth/signup', signupData);
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSignup} >
  
       <Stack direction="column" alignItems="center" justifyContent="center" spacing={3} mt={15}>
      <div>
        <Typography variant="h4">Sign-Up</Typography>
        <label htmlFor="email"></label>
        <TextField
        placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={signupData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <TextField
        placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={signupData.password}
          onChange={handleInputChange}
        />
      </div>
      <Button type="submit">Sign up</Button>
      <Typography>Already Signed Up:  <Link href="/login" style={{textDecoration: 'none'}}>Sign-In</Link>!!!</Typography>
      </Stack>
    </form>
  );
};

export default SignupPage;