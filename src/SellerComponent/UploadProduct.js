import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CommerceContext } from "../App";

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

export default function UploadProduct(){
    const productdata = useContext(CommerceContext);

    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [views, setViews] = useState("");
    const [description, setDescription] = useState("");

    const typeArr = [
        {label: "GTIN"},
        {label: "EAN"},
        {label: "GCID"},
        {label: "UPC"},
        {label: "ASIN"},
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("username", email);
    //     formData.append("password", password);
    //     console.log(formData.get("username"));
    //     console.log(formData.get("password"));
    
    //     fetch("http://localhost:8080/login", {
    //     credentials: "include",
    //     method: "POST",
    //     body: formData,
    //   })
    //   .then(res=>res.json())
    //   .then(result=>{
    //     if(result.code === 200){
    //       navigate("/");
    //     }else{
    //       console.log(result.message);
    //     }
    //   })
    };

    const handleImage = (event) => {
        console.log(event.target.files);
        setFile(event.target.files[0]);
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
                        Add New Product
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing = {2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                 autoComplete="given-name"
                                 id="productID"
                                 name="productID"
                                 required
                                 fullWidth
                                 label="Product ID"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Autocomplete
                             disablePortal
                             id="type"
                             options={typeArr}
                             renderInput={(params) => <TextField {...params} label="ID Type" />}
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="name"
                                 name="name"
                                 label="Product Name"
                                 autoComplete="product name"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="price"
                                 name="price"
                                 label="Product Price"
                                 autoComplete="product price"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="category"
                                 name="category"
                                 label="Product Category"
                                 autoComplete="product category"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="rating"
                                 name="rating"
                                 label="Product Rating"
                                 autoComplete="product rating"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="views"
                                 name="views"
                                 label="Views"
                                 autoComplete="views"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="description"
                                 name="description"
                                 label="Product description"
                                 autoComplete="product description"
                                 autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                 margin="normal"
                                 required
                                 fullWidth
                                 id="file"
                                 name="file"
                                 type="file"
                                 onChange={handleImage}
                                />
                            </Grid>
                        </Grid>
                        <Button
                         type="submit"
                         fullWidth
                         variant="contained"
                         sx={{ mt: 3, mb: 2 }}
                        >
                        Add Product
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}