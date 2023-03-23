import React, { useState } from 'react';
import axios from 'axios';
import { Stack, Typography } from '@mui/material'
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
    <form onSubmit={handleSignup}>
  
       <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <div>
        <h1>Sign-Up</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={signupData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signupData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Sign up</button>
      <Typography>Already Signed Up <Link href="/login">Sign-In</Link></Typography>
      </Stack>
    </form>
  );
};

export default SignupPage;