import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { CommerceContext } from '../App';
import ProductRating from "../Pages/Rating";
import Recommendation from "./Recommendation";

import "./DetailStyle.css";
import "./RecommendationStyle.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider, { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';


export default function ProductDetail() {
    const {productId} = useParams();
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;
    const navigate = useNavigate();
    const item = Globalstate.productWithDetail.find(prod => prod.id === parseInt(productId));
    let categoryItem = item.category;

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
                    onClick={()=>{
                        item.quantity = 1;
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
                    Go to Cart
                </Button>
            </Stack>
            
        </Box>
        <Recommendation categoryVal={categoryItem} productID={productId}/>
        </>
    );
}