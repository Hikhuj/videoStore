import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import swal from 'sweetalert';
import './Login.css';

// Call USER JWT
async function loginUser(credentials) {
  return fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('token' in response) {
      swal("Success", "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = '/profile';
      });
    } else {
      swal("Failed", "error");
    }
  }

  return (
    <>
      <div className="login-wrapper">
        <h1>Log In</h1>
        <Stack spacing={2}>
          <TextField id="email" name="email" label="Email" variant="standard" onChange={e => setEmail(e.target.value)}/>
          <TextField id="password" name="password" label="Password" variant="standard" type="password" onChange={e => setPassword(e.target.value)}/>
          <Button variant="contained" type="submit" onClick={handleSubmit}>Go</Button>
        </Stack>
      </div>
    </>
  )
}

export default Login;