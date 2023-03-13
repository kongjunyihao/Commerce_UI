import React, { useState, useEffect } from 'react';

import "./MylistStyle.css";
import { Button } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MyList() {
    const [items, setItems] = useState([])
    const [itemDetails, setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();
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
                if (data) setItems(data.mylists)
            })
    }, []);

    useEffect(() => {
        let details = [];
        if(items) items.forEach((i) => {
            fetch("http://localhost:4000/app/products/" + i.productID)
                .then(res => res.json())
                .then(data => {
                    details.push(data);
                    setDetails([...details]);
                })
        })
    }, [items])

    useEffect(()=>{
        if(itemDetails.length === items.length) setLoading(false);
    },[itemDetails])
    if(loading) return(
        <>
        <div>Loading...</div>
        </>
    )

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
                    {items.length === 0? (
                        <h1 style={{ marginTop: "15%", marginBottom: "15%", marginLeft: "40px" }}>Your list is empty. Add something you like here!</h1>
                    ) : null}
                    {itemDetails.map((item, index) => {
                        return (
                            <div className='list-item' key={index}>
                                <img src={
                                    item.productImage[0] === 'h' ? item.productImage : require("../../../uploads/" + item.productImage.slice(8, item.productImage.length)) //apply online data / mock data
                                } alt=""></img>
                                <p className='productName' onClick={()=>{navigate(`/${item.productID}`)}}>{item.productName}</p>
                                <div className='list-operation'>
                                    <Button onClick={()=>{ //move to cart
                                        fetch("http://localhost:4000/app/mylist/delete",{
                                            method:"POST",
                                            headers:{
                                                'Content-Type':'application/json'
                                            },
                                            body: JSON.stringify({
                                                email: window.localStorage.getItem("email"),
                                                productID: item.productID
                                            })
                                        });
                                        fetch("http://localhost:4000/app/cart/add",{
                                                method:"POST",
                                                headers:{
                                                    'Content-Type':'application/json'
                                                },
                                                body: JSON.stringify({
                                                    email: window.localStorage.getItem("email"),
                                                    productID: item.productID
                                                })
                                            }).then(window.location.reload());
                                    }}>Move to Cart</Button>
                                    <Button onClick={()=>{fetch("http://localhost:4000/app/mylist/delete",{
                                        method:"POST",
                                        headers:{
                                            'Content-Type':'application/json'
                                        },
                                        body: JSON.stringify({
                                            email: window.localStorage.getItem("email"),
                                            productID: item.productID
                                        })
                                    }).then(window.location.reload())}}>Remove From List</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}