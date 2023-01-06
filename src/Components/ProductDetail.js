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
    // const item = Globalstate.productWithDetail.find(prod => prod.id === parseInt(productId));
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryItem, setCategory] = useState("");
    const getData = () => {
        fetch("http://localhost:4000/app/products/" + productId)
        .then(res=>res.json())
        .then(
            item => {
                // let item = Array.from(res).find(i => parseInt(i.productID) === parseInt(productId))
                setItem(item)
                setLoading(false)
                setCategory(item.category)
            }
        )
    }
    useEffect(()=>{
        getData();
    },[]);
    if(loading) return (
        <>
        <div>Loading the details...</div>
        </>
    )
    return (
        <>
        <Box className="detail"
            width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
            <img className="productDetail__img" src={
                            item.productImage[0] === 'h'? item.productImage:require("../../uploads/"+item.productImage.slice(8,item.productImage.length)) //apply online data / mock data
                            } alt={item.productName}/>
            <Stack direction="column" className="product-info">
                <span id="description">{item.productName}</span>
                <h4>{item.description}</h4>
                <div className='ProductDetail__price'>
                    <h5>${item.price}</h5>
                </div>
                <div className='ProductDetail__Rateing'>
                    <ProductRating
                        value={parseFloat(item.rating)}
                        text={`${item.view} reviews`}
                    />
                </div>
                {window.localStorage.getItem("email")? (
                            <Button
                            fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                            onClick={() => 
                                fetch("http://localhost:4000/app/cart/add",{
                                    method:"POST",
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body: JSON.stringify({
                                        email: window.localStorage.getItem("email"),
                                        productID: item.productID
                                    })
                                })}>
                                add to cart
                            </Button>
                            ):(
                                <Button
                                fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                                onClick={() => 
                                    {
                                        navigate("/signIn")
                                    }}>
                                    Sign in to add
                                </Button>
                            )
                            }
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