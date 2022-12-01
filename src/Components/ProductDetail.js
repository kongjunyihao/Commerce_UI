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
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
    const {productId} = useParams();
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;
    const navigate = useNavigate();
    console.log(Globalstate.productWithDetail);
    const item = Globalstate.productWithDetail.find(prod => prod.id === parseInt(productId));
    const addToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "ADD", payload: item });
    }
    return (
        <>
        <Box className="detail"
            width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
            <img className="productDetail__img" src={
                            item.image[0] === 'h'? item.image:require("../Asset/"+item.image) //apply online data / mock data
                            } alt={item.title}/>
            <Stack direction="column" className="product-info">
                <span id="description">{item.title}</span>
                <h4>{item.description}</h4>
                <div className='ProductDetail__price'>
                    <h5>${item.price}</h5>
                </div>
                <div className='ProductDetail__Rateing'>
                    <ProductRating
                        value={item.rating.rate}
                        text={`${item.rating.count} reviews`}
                    />
                </div>
                <Button
                    fullWidth variant="contained"
                    onClick={(e)=>{
                        dispatch({ type: "ADD", payload: item });
                        }}>
                    Add to Cart
                </Button>
            </Stack>
            <Stack className="checkout">
                <h4>Buy new:</h4>
                <Button
                    fullWidth variant="contained"
                    onClick={()=>{navigate("/cart")}}
                >
                    Checkout
                </Button>
            </Stack>
        </Box>
        </>
    );
}