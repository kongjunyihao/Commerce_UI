import React, { useState, useEffect } from 'react';

import "./MylistStyle.css";
import Box from '@mui/material/Box';
import Divider, { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function MyList({ productID }) {
    const [items, setItems] = useState([])
    const [itemDetails, setDetails] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/app/mylist", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: window.localStorage.getItem("email")
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data) setItems(data.products)
            })
    }, []);

    useEffect(() => {
        let details = [];
        items.forEach((i) => {
            fetch("http://localhost:4000/app/products/" + i.productID)
                .then(res => res.json())
                .then(data => {
                    details.push(data);
                    setDetails([...details]);
                })
        })
    }, [items])

    const handleAddToCart = () => { }

    const handleRemove = () => { }

    return (
        <>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    Shopping List
                </Typography>
            </Toolbar>
            <div className='list-container'>
                <div className='list-info'>
                    {items.length === 0 ? (
                        <h1 style={{ marginTop: "15%", marginBottom: "15%", marginLeft: "40px" }}>Your list is empty. Add something you like here!</h1>
                    ) : null}
                    {items.map((item, index) => {
                        let detail = itemDetails.find(i => i.productID === item.productID)
                        if (detail === undefined) {
                            return (
                                <div key={index}>Loading...</div>
                            )
                        }
                        return (
                            <div className='list-item' key={index}>
                                <img src={
                                    detail.productImage[0] === 'h' ? detail.productImage : require("../../../uploads/" + detail.productImage.slice(8, detail.productImage.length)) //apply online data / mock data
                                } alt=""></img>
                                <p>{detail.productName}</p>
                                <div className='list-operation'>
                                    <button onClick={handleAddToCart}>Add to Cart</button>
                                    <button onClick={handleRemove}>Remove From List</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}