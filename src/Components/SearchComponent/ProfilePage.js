import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CommerceContext } from "../../App";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ProfilePage() {
    const productContext = useContext(CommerceContext);
    console.log(productContext.user);
    const navigate = useNavigate();

    //Initial state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();
    if(firstNameEmpty === false && lastNameEmpty === false &&
       emailEmpty === false && phoneNumberEmpty === false){
        // if(password !== rePassword){
        //   setVerify(1);
        // }else{
        //   const data = {
        //     username: email,
        //     password: password
        //   };
        //   fetch("http://localhost:8080/user_detail",{
        //     credentials: "include",
        //     method: "POST",
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: email,
        //       name: firstName+" "+lastName,
        //       phone: phone
        //     })
        //   })
        //   .then(res=>res.json())
        //   .then(result=>{
        //     console.log(result)});

        //   fetch("http://localhost:8080/users",{
        //     credentials: "include",
        //     method: "POST",
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   })
        //   .then(res=>res.json())
        //   .then(result=>{
        //     console.log(result);
        //     if(result.code === 200){
        //       navigate("/signIn");
        //     }else{
        //       alert("Please check your registration information");
        //     }
        //   })
        // }
    }
  };

  const handleCancel = () => {
    navigate("/");
  }

  const FirstNameInput = (value) => {
    if(value !== ""){
      setFirstName(value);
      setFirstNameEmpty(false);
    }else{
        setFirstNameEmpty(true);
    }
  }

  const LastNameInput = (value) => {
    if(value !== ""){
      setLastName(value);
      setLastNameEmpty(false);
    }else{
        setLastNameEmpty(true);
    }
  }

  const EmailInput = (value) => {
    if(value !== ""){
      setEmail(value);
      setEmailEmpty(false);
    }else{
        setEmailEmpty(true);
    }
  }

  const PhoneNumberInput = (value) => {
    if(value !== ""){
      setPhone(value);
      setPhoneNumberEmpty(false);
    }else{
        setPhoneNumberEmpty(true);
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
                    <Typography component="h1" variant="h5">
                        Change your Personal Information
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
                                    label={firstNameEmpty? "First Name":""}
                                    defaultValue={productContext.user.firstName}
                                    autoComplete="given-name"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => FirstNameInput(e.target.value)}
                                />
                                {firstNameEmpty?<div style={{color: 'red'}}>First name required!</div>:''}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    label={lastNameEmpty? "Last Name":""}
                                    defaultValue={productContext.user.lastName}
                                    autoComplete="family-name"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => LastNameInput(e.target.value)}
                                />
                                {lastNameEmpty?<div style={{color: 'red'}}>Last name required!</div>:''}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label={emailEmpty? "Email Address":""}
                                    defaultValue={productContext.user.email}
                                    autoComplete="email"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => EmailInput(e.target.value)}
                                />
                                {emailEmpty?<div style={{color: 'red'}}>Email required!</div>:''}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone number"
                                    name="phone number"
                                    label={phoneNumberEmpty? "Phone Number":""}
                                    defaultValue={productContext.user.phoneNumber}
                                    autoComplete="mobile-phone-number"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => PhoneNumberInput(e.target.value)}
                                />
                                {phoneNumberEmpty?<div style={{color: 'red'}}>Phone number required!</div>:''}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="address"
                                    name="address"
                                    label="Address"
                                    type="standard"
                                    autoComplete="mailing-address"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="City"
                                    type="standard"
                                    autoComplete="current city"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="state"
                                    name="state"
                                    label="State"
                                    type="standard"
                                    autoComplete="current State"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="zip"
                                    name="zip"
                                    label="Zip Code"
                                    type="standard"
                                    autoComplete="Zip code"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setZip(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Save
                        </Button>
                        <Button onClick={handleCancel} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}