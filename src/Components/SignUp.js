import * as React from 'react';
import { useState, useContext } from 'react';
// import { Link as RouteLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CommerceContext } from '../App';

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
import { Alert } from '@mui/material';


const theme = createTheme();

export default function SignUp() {
  // const userdata = useContext(CommerceContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstNameEmpty, setFirstNameEmpty] = useState(true);
  const [lastNameEmpty, setLastNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);
  const [rePasswordEmpty, setRePasswordEmpty] = useState(true);
  const [verify, setVerify] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstNameEmpty === false && lastNameEmpty === false &&
      emailEmpty === false && phoneNumberEmpty === false &&
      passwordEmpty === false && rePasswordEmpty === false) {
      if (password !== rePassword) {
        setVerify(1);
      } else {
        fetch("http://localhost:4000/app/signup", {
          credentials: "omit",
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            password
          })
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
              navigate("/signIn");
            } else {
              alert("Please check your registration information");
            }
          })
        // const data = {
        //   username: email,
        //   password: password
        // };
        // fetch("http://localhost:8080/user_detail",{
        //   credentials: "include",
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     email: email,
        //     name: firstName+" "+lastName,
        //     phone: phone
        //   })
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //   console.log(result)});

        // fetch("http://localhost:8080/users",{
        //   credentials: "include",
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(data)
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //   console.log(result);
        //   if(result.code === 200){
        //     navigate("/signIn");
        //   }else{
        //     alert("Please check your registration information");
        //   }
        // })
      }
    }
  };

  const FirstNameInput = (value) => {
    if (value !== "") {
      setFirstName(value);
      setFirstNameEmpty(false);
    }
  }

  const LastNameInput = (value) => {
    if (value !== "") {
      setLastName(value);
      setLastNameEmpty(false);
    }
  }

  const EmailInput = (value) => {
    if (value !== "") {
      setEmail(value);
      setEmailEmpty(false);
    }
  }

  const PhoneNumberInput = (value) => {
    if (value !== "") {
      setPhone(value);
      setPhoneNumberEmpty(false);
    }
  }

  const PasswordInput = (value) => {
    if (value !== "") {
      setPassword(value);
      setPasswordEmpty(false);
    }
  }

  const ReEnterPassword = (value) => {
    setRePassword(value);
    setRePasswordEmpty(false);
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  autoComplete="given-name"
                  variant="standard"
                  autoFocus
                  onChange={(e) => FirstNameInput(e.target.value)}
                />
                {firstNameEmpty ? <div style={{ color: 'red' }}>First name required!</div> : ''}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  variant="standard"
                  autoFocus
                  onChange={(e) => LastNameInput(e.target.value)}
                />
                {lastNameEmpty ? <div style={{ color: 'red' }}>Last name required!</div> : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  variant="standard"
                  autoFocus
                  onChange={(e) => EmailInput(e.target.value)}
                />
                {emailEmpty ? <div style={{ color: 'red' }}>Email required!</div> : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone number"
                  label="Phone Number"
                  name="phone number"
                  autoComplete="mobile-phone-number"
                  variant="standard"
                  autoFocus
                  onChange={(e) => PhoneNumberInput(e.target.value)}
                />
                {phoneNumberEmpty ? <div style={{ color: 'red' }}>Phone number required!</div> : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  variant="standard"
                  autoFocus
                  onChange={(e) => PasswordInput(e.target.value)}
                />
                {passwordEmpty ? <div style={{ color: 'red' }}>Password required!</div> : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="re-enter-password"
                  name="verify new password"
                  label="Re Enter Password"
                  type="password"
                  autoComplete="verify-new-password"
                  variant="standard"
                  autoFocus
                  onChange={(e) => ReEnterPassword(e.target.value)}
                />
                {verify === 1 && <Alert severity="error">Password do not match</Alert>}
                {rePasswordEmpty ? <div style={{ color: 'red' }}>Re Enter Password required!</div> : ''}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I have already read and agree with the privacy policy."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='signIn' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}