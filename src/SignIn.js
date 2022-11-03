import * as React from 'react';
import { useState, useContext } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CommerceContext } from './App';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn() {
  const userdata = useContext(CommerceContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if(emailEmpty === false && passwordEmpty === false){
      console.log(email, password);
      navigate('/');
    }
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const EmailInput = (value) => {
    if(value !== ""){
      setEmailEmpty(false);
      if(value === userdata.user.email){
        setEmail(value);
      }
    }
  }

  const PasswordInput = (value) => {
    if(value !== ""){
      setPasswordEmpty(false);
      if(value === userdata.user.password){
        setPassword(value);
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing = {2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  variant="standard"
                  autoFocus
                  onChange={(e)=>EmailInput(e.target.value)}
                />
                {emailEmpty?<div style={{color: 'red'}}>Email required!</div>:''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  autoFocus
                  onChange={(e)=>PasswordInput(e.target.value)}
                />
                {passwordEmpty?<div style={{color: 'red'}}>Password required!</div>:''}
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link variant="body2">
                  <RouteLink to="/signUp">
                    Don't have an account? Sign Up
                  </RouteLink>
                </Link> */}
                <RouteLink to="/signUp">
                  <div>
                    <Link variant='body2'>Don't have an account? Sign Up</Link>
                  </div>
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}