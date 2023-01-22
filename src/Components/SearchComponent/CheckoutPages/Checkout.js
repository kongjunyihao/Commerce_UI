import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./DetailStyle.css";
import "./RecommendationStyle.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider, { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';

export default function Checkout() {
    //Product info from cart
    const [items, setItems] = useState([])

    let shippingfee = 5.99;

    const navigate = useNavigate();

    //Place order
    const handlePlace = () => {
        navigate('/place');
    }

    return (
        <Box className="detail"
            width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    logo
                </Typography>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    Checkout({items.length} {items.length > 1 ? 'items' : 'item'} )
                </Typography>
            </Toolbar>
            <Stack direction='column'>
                <div>
                    <p>1 Shipping Address</p>
                    <div></div>
                    <a href=''>Change</a>
                </div>
                <div>
                    <p>2 Payment method</p>
                    <div></div>
                    <a href=''>Change</a>
                </div>
                <div>
                    4 Review items and Shipping
                    {items.map((item, id) => {
                        return (
                            <div key={id} className=''></div>
                        );
                    })}
                </div>
                <div>
                    <Button>Place your order</Button>
                    <div></div>
                </div>
            </Stack>
            <Stack direction='column'>
                <Button onClick={handlePlace}>Place your order</Button>
                <p>By placing your order, you agree to Amazon's privacy policy and condition of use</p>
                <h5>Order Summary</h5>
                <CssBaseline />
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <CssBaseline />
                <div>
                    <h4>Order Total:</h4>
                </div>
            </Stack>
        </Box>
    );
}