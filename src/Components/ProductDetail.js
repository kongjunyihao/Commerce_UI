import React, { useState, useEffect, useContext } from "react";
import { CommerceContext } from '../App';
import ProductRating from "../Pages/Rating";

import "./DetailStyle.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider, { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';

export default function ProductDetail() {
    return (
        <Box className="detail"
            width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
            <img className="productDetail__img" />
            <Stack direction="column" className="product-info">
                <span id="description">fhroifjhroijojkfhrkfjbkrfjvbkjvbfkjvbkvjrbvjrknorvbovrboub</span>
                <h4>iphone 14 pro</h4>
                <div className='ProductDetail__price'>
                    <h5>1049.99$</h5>
                </div>
                <div className='ProductDetail__Rateing'>
                    <ProductRating
                        value={4.6}
                        text={`${125} reviews`}
                    />
                </div>
                <Button
                    fullWidth variant="contained"
                // onClick={() => dispatch({ type: "ADD", payload: product })}
                >
                    Add to Cart
                </Button>
            </Stack>
            <Stack className="checkout">
                <h4>Buy new:</h4>
                <Button
                    fullWidth variant="contained"
                >
                    Checkout
                </Button>
            </Stack>
        </Box>
    );
}