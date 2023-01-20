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
    const navigate = useNavigate();
    //address info
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    //empty verification
    const [fullNameEmpty, setFullNameEmpty] = useState(true);
    const [phoneEmpty, setPhoneEmpty] = useState(true);
    const [addressEmpty, setAddressEmpty] = useState(true);
    const [cityEmpty, setCityEmpty] = useState(true);
    const [stateEmpty, setStateEmpty] = useState(true);
    const [zipEmpty, setZipEmpty] = useState(true);


    const stateArr = [
        { label: "Alabama" }, { label: "Alaska" }, { label: "American Samoa" }, { label: "Arizona" }, { label: "Arkansas" },
        { label: "Califonia" }, { label: "Colorado" }, { label: "Connecticut" }, { label: "Columbia" }, { label: "Delaware" },
        { label: "District of Columbia" }, { label: "Federated States of Micronesia" }, { label: "Florida" }, { label: "Georgia" }, { label: "Guam" },
        { label: "Hawaii" }, { label: "Idaho" }, { label: "Illinois" }, { label: "Indiana" }, { label: "Iowa" },
        { label: "Kansas" }, { label: "Kentucky" }, { label: "Louisiana" }, { label: "Maine" }, { label: "Marshall Islands" },
        { label: "Maryland" }, { label: "Massachusetts" }, { label: "Michigan" }, { label: "Minnesoda" }, { label: "Mississippi" },
        { label: "Missouri" }, { label: "Montana" }, { label: "Nebraska" }, { label: "Nevada" }, { label: "New Hampshire" },
        { label: "New Jersey" }, { label: "New Mexico" }, { label: "New York" }, { label: "North Carolina" }, { label: "North Dakota" },
        { label: "North Mariana Islands" }, { label: "Ohio" }, { label: "Oklahoma" }, { label: "Oregon" }, { label: "Palau" },
        { label: "Pennsylvania" }, { label: "Puerto Rico" }, { label: "Rhode Island" }, { label: "South Carolina" }, { label: "South Dakota" },
        { label: "Tennessee" }, { label: "Texas" }, { label: "Utah" }, { label: "Vermont" }, { label: "Virgin Islands" },
        { label: "Virginia" }, { label: "Washington" }, { label: "West Virginia" }, { label: "Wisconsin" }, { label: "Wyoming" },
        { label: "Armed Forces - AA" }, { label: "Armed Forces - AE" }, { label: "Armed Forces - AP" }
    ];

    const handleAdd = () => {
        //TODO: Call api to add address!!
        navigate('/address')
    }

    const FullNameInput = (value) => {
        if(value !== ""){
            setFullName(value)
            setFullNameEmpty(false)
        }
    }

    const PhoneInput = (value) => {
        if(value !== ""){
            setPhone(value)
            setPhoneEmpty(false)
        }
    }

    const AddressInput = (value) => {
        if(value !== ""){
            setAddress(value)
            setAddressEmpty(false)
        }
    }

    const CityInput = (value) => {
        if(value !== ""){
            setCity(value)
            setCityEmpty(false)
        }
    }

    const StateInput = (value) => {
        if(value !== "Select"){
            setState(value)
            setStateEmpty(false)
        }
    }

    const ZipInput = (value) => {
        if(value !== ""){
            setZip(value)
            setZipEmpty(false)
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
                        Add a new address
                    </Typography>
                    <Box component="form" onSubmit={handleAdd} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
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
                                    id="address"
                                    name="address"
                                    label="Address"
                                    autoComplete="street address or P.O. Box"
                                    autoFocus
                                    onChange={(e) => AddressInput(e.target.value)}
                                />
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
                                    renderInput={(params) => <TextField {...params} label="Select" />}
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
                        <Button onClick={()=>{navigate("/address")}} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AddAddress;