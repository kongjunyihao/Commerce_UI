import React, { useState, useContext, useEffect } from 'react';
import { CommerceContext } from '../App';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const URL = "http://107.20.70.11:80/app";

export default function UploadProduct() {
    const productContext = useContext(CommerceContext);
    const product = productContext.product;

    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [file, setFile] = useState({});
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [views, setViews] = useState("");
    const [description, setDescription] = useState("");

    const [IDEmpty, setIDEmpty] = useState(true);
    const [typeEmpty, setTypeEmpty] = useState("ID Type");
    const [nameEmpty, setNameEmpty] = useState(true);
    const [priceEmpty, setPriceEmpty] = useState(true);
    const [categoryEmpty, setCategoryEmpty] = useState(true);
    const [ratingEmpty, setRatingEmpty] = useState(true);
    const [viewEMpty, setViewEmpty] = useState(true);
    const [descriptioinEmpty, setDescriptionEmpty] = useState(true);


    const typeArr = [
        { label: "GTIN" },
        { label: "EAN" },
        { label: "GCID" },
        { label: "UPC" },
        { label: "ASIN" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productID && name && type && file && price && category && rating && views && description) { //What if we add same products??
            let formData = new FormData();
            formData.append("productID", productID)
            formData.append("productType", type)
            formData.append("productName", name)
            formData.append("productImage", file)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("rating", rating)
            formData.append("view", views)
            formData.append("description", description)

            fetch(URL+"/upload", {
                method: "POST",
                body: formData
            })
            .then(res => {
                res.json()
                if (res.status === 200) {
                    alert("Upload Successfully!");
                    window.location.reload();
                } else {
                    alert("Please provide correct product information");
                }
            })
            .then(result => {
                console.log(result)
            })
        };
    }


    useEffect(() => {
        console.log(product);
        if (product.length > 0) window.sessionStorage.setItem("product", JSON.stringify(product));
    }, [product]);

    const IDInput = (value) => {
        if (value !== "") {
            setProductID(value);
            setIDEmpty(false);
        }
    }

    const NameInput = (value) => {
        if (value !== "") {
            setName(value);
            setNameEmpty(false);
        }
    }

    const TypeInput = (value) => {
        if (value !== 'Type ID') {
            setType(value);
            setTypeEmpty(false);
            console.log(value);
        }
    }

    const PriceInput = (value) => {
        if (value !== "") {
            setPrice(value);
            setPriceEmpty(false);
        }
    }

    const CategoryInput = (value) => {
        if (value !== "") {
            setCategory(value);
            setCategoryEmpty(false);
        }
    }

    const RatingInput = (value) => {
        if (value !== "") {
            setRating(value);
            setRatingEmpty(false);
        }
    }

    const ViewInput = (value) => {
        if (value !== "") {
            setViews(value);
            setViewEmpty(false);
        }
    }

    const DescriptionInput = (value) => {
        if (value !== "") {
            setDescription(value);
            setDescriptionEmpty(false);
        }
    }

    const handleImage = (event) => {
        setFile(event.target.files[0]);
        console.log(file);
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
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={IDEmpty}
                                    autoComplete="given-name"
                                    id="productID"
                                    name="productID"
                                    required
                                    fullWidth
                                    label="Product ID"
                                    onChange={(e) => IDInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    disablePortal
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    id="type"
                                    name="type"
                                    options={typeArr}
                                    renderInput={(params) => <TextField {...params} label="ID Type" />}
                                    onChange={(event, value) => TypeInput(value.label)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={nameEmpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Product Name"
                                    autoComplete="product name"
                                    onChange={(e) => NameInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={priceEmpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="price"
                                    name="price"
                                    label="Product Price"
                                    autoComplete="product price"
                                    onChange={(e) => PriceInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={categoryEmpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="category"
                                    name="category"
                                    label="Product Category"
                                    autoComplete="product category"
                                    onChange={(e) => CategoryInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={ratingEmpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="rating"
                                    name="rating"
                                    label="Product Rating"
                                    autoComplete="product rating"
                                    onChange={(e) => RatingInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={viewEMpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="views"
                                    name="views"
                                    label="Views"
                                    autoComplete="views"
                                    onChange={(e) => ViewInput(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={descriptioinEmpty}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="description"
                                    name="description"
                                    label="Product description"
                                    autoComplete="product description"
                                    onChange={(e) => DescriptionInput(e.target.value)}
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