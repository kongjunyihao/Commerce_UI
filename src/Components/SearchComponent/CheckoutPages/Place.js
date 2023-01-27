import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import 'PlaceStyle.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider, { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';

export default function Placed() {
    const [items, setItems] = useState([]);
    return (
        <Box className="place-container"
            width='100%' sx={{ flexGrow: 1 }}
            bgcolor="white" color="black">
            <div className='place-complete'>
                <p>Order placed, thanks!</p>
                <p>Confirmation will be sent to your email</p>
            </div>
            <div className='place-items'>
                {
                    items.map((item, id) => {
                        return (
                            <>
                                <div className='items-info'>
                                    <p>{item.name}</p>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <a href=''>Review or edit your recent orders</a>
                            </>
                        )
                    })
                }
            </div>
        </Box>
    );
}