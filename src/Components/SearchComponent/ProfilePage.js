import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ProfilePage() {
    //Initial state
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        location:{
            address:"",
            city:"",
            state:"",
            zip:""
        }
    });
    const navigate = useNavigate();

    const [firstNameEmpty, setFirstNameEmpty] = useState(false);
    const [lastNameEmpty, setLastNameEmpty] = useState(false);
    const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(false);

    const getData = () => {
        fetch("http://localhost:4000/app/profile",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:window.localStorage.getItem("email")
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUser({...data})
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const handleSubmit = (event) => {
    event.preventDefault();
    if( firstNameEmpty === false 
     && lastNameEmpty === false 
     && phoneNumberEmpty === false){
        fetch("http://localhost:4000/app/profile/update",{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:window.localStorage.getItem("email"),
                user: user
            })
        })
        .then(res=>{
            alert("Successfully updated!");
            navigate('/')
        })
    }
    else {
        alert("Please fill in your information!")
    }
  };

  const handleCancel = () => {
    navigate("/");
  }

  const FirstNameInput = (value) => {
    if(value !== ""){
      setUser({...user,firstName:value})
      setFirstNameEmpty(false);
    }else{
        setUser({...user,firstName:value})
        setFirstNameEmpty(true);
    }
  }

  const LastNameInput = (value) => {
    if(value !== ""){
      setUser({...user,lastName:value})
      setLastNameEmpty(false);
    }else{
        setUser({...user,lastName:value})
        setLastNameEmpty(true);
    }
  }


  const PhoneNumberInput = (value) => {
    if(value !== ""){
      setUser({...user,phone:value})
      setPhoneNumberEmpty(false);
    }else{
        setUser({...user,phone:value})
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
                                    value={user.firstName}
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
                                    value={user.lastName}
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
                                    // label={emailEmpty? "Email Address":""}
                                    value={user.email}
                                    autoComplete="email"
                                    variant="standard"
                                    autoFocus
                                    // onChange={(e) => EmailInput(e.target.value)}
                                />
                                {/* {emailEmpty?<div style={{color: 'red'}}>Email required!</div>:''} */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone number"
                                    name="phone number"
                                    label={phoneNumberEmpty? "Phone Number":""}
                                    value={user.phone}
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
                                    value={user.location.address?user.location.address:""}
                                    autoComplete="mailing-address"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setUser({...user,location:{...user.location, address:e.target.value}})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="City"
                                    type="standard"
                                    value={user.location.city?user.location.city:""}
                                    autoComplete="current city"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setUser({...user,location:{...user.location, city:e.target.value}})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="state"
                                    name="state"
                                    label="State"
                                    type="standard"
                                    value={user.location.state?user.location.state:""}
                                    autoComplete="current State"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setUser({...user,location:{...user.location, state:e.target.value}})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="zip"
                                    name="zip"
                                    label="Zip Code"
                                    type="standard"
                                    value={user.location.zip?user.location.zip:""}
                                    autoComplete="Zip code"
                                    variant="standard"
                                    autoFocus
                                    onChange={(e) => setUser({...user,location:{...user.location, zip:e.target.value}})}
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