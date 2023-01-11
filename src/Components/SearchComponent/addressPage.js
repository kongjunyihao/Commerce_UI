import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function AddAddress() {
    //address info
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    //empty verification
    const [fullNameEmpty, setFullNameEmpty] = useState();
    const [phoneEmpty, setPhoneEmpty] = useState("");
    const [address1Empty, setAddress1Empty] = useState("");
    const [address2Empty, setAddress2Empty] = useState("");
    const [cityEmpty, setCityEmpty] = useState("");
    const [stateEmpty, setStateEmpty] = useState("");
    const [zipEmpty, setZipEmpty] = useState("");

    const countryArr = [
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" },
    ];

    const stateArr = [
        { label: "" }, { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }, { label: "" }, { label: "" }, { label: "" }, { label: "" },
        { label: "" }
    ];

    const handleAdd = () => {}

    const CountryInput = () => {}

    const FullNameInput = () => {}

    const PhoneInput = () => {}

    const Address1Input = () => {}

    const Address2Input = () => {}

    const CityInput = () => {}

    const StateInput = () => {}

    const ZipInput = () => {}

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
                        Add a new address
                    </Typography>
                    <Box component="form" onSubmit={handleAdd} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={18}>
                                <Autocomplete
                                    disablePortal
                                    fullWidth
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    id="country"
                                    name="country"
                                    options={countryArr}
                                    renderInput={(params) => <TextField {...params} />}
                                    onChange={(event, value) => CountryInput(value.label)}
                                />
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    name="fullname"
                                    label="Full name (First and Last name)"
                                    autoComplete="full name"
                                    autoFocus
                                    onChange={(e) => FullNameInput(e.target.value)}
                                />
                                {fullNameEmpty ? <div style={{ color: 'red' }}>Please enter a name</div> : ''}
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone number"
                                    autoComplete="phone number"
                                    autoFocus
                                    onChange={(e) => PhoneInput(e.target.value)}
                                />
                                {phoneEmpty ? <div style={{ color: 'red' }}>Please enter a phone number</div> : ''}
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="address1"
                                    name="address1"
                                    label="Address"
                                    autoComplete="street address ot P.O. Box"
                                    autoFocus
                                    onChange={(e) => Address1Input(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="address2"
                                    name="address2"
                                    autoComplete="Apt, suite, unit, building, floor, etc"
                                    autoFocus
                                    onChange={(e) => Address2Input(e.target.value)}
                                />
                                {fullNameEmpty ? <div style={{ color: 'red' }}>Please enter an address</div> : ''}
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    autoComplete="city name"
                                    autoFocus
                                    onChange={(e) => CityInput(e.target.value)}
                                />
                                {cityEmpty ? <div style={{ color: 'red' }}>Please enter a city name</div> : ''}
                            </Grid>
                            <Grid item xs={18}>
                                <Autocomplete
                                    disablePortal
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    id="state"
                                    name="state"
                                    options={stateArr}
                                    renderInput={(params) => <TextField {...params} label="ID Type" />}
                                    onChange={(event, value) => StateInput(value.label)}
                                />
                            </Grid>
                            <Grid item xs={18}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="zip"
                                    name="zip"
                                    label="Zip Code"
                                    autoComplete="zip code"
                                    autoFocus
                                    onChange={(e) => ZipInput(e.target.value)}
                                />
                                {fullNameEmpty ? <div style={{ color: 'red' }}>Please enter a ZIP or postal code</div> : ''}
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add address
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AddAddress;