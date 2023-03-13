import React, { useEffect,useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import { CommerceContext } from "../../App";

import "./CartComponentStyle.css";
// import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



export default function Cart() {
    const [items,setItems] = useState([])
    const [itemDetails, setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    let total = 0
    useEffect(() => {
            fetch("http://localhost:4000/app/cart",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: window.localStorage.getItem("email")
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data) setItems(data.products)
            })
    },[]);

    useEffect(()=>{
        let details = [];
        items.forEach((i)=>{
            fetch("http://localhost:4000/app/products/" + i.productID)
            .then(res=>res.json())
            .then(data=>{
                details.push(data);
                setDetails([...details]);})
            })
    },[items])
    
    useEffect(()=>{
        if(itemDetails.length === items.length) setLoading(false);
    },[itemDetails])
    
    if(loading) return(
        <>
        <div>Loading...</div>
        </>
    )

    const handleCheckout = () => {
        Navigate('/checkout')
    }

    return (
        <>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    Shopping Cart
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '7px', marginLeft: '50px' }}
                >
                    <Link className='backButton' style={{ textDecoration: "none", color: "black" }} to='/'>
                        <ChevronLeftIcon fontSize='large' /><span>Shop</span>
                    </Link>
                </Typography>
            </Toolbar>
            <div className='cart-info'>
                <div className="cart">
                    {items.length === 0? (
                        <h1 style={{marginTop: "15%", marginBottom: "15%", marginLeft:"40px"}}>Your cart is empty. Add something you like here!</h1>
                    ) : null}
                    {items.map((item, index) => {
                        let detail = itemDetails.find(i => i.productID === item.productID)
                        if(detail === undefined) {
                            return(
                            <div key={index}>Loading...</div>
                        )
                        }
                        total += item.quantity * detail.price
                        return (
                            <div className="card" key={index}>
                                <img src={
                                    detail.productImage[0] === 'h' ? detail.productImage : require("../../../uploads/" + detail.productImage.slice(8,detail.productImage.length)) //apply online data / mock data
                                } alt=""></img>
                                <p>{detail.productName}</p>
                                <p>${(item.quantity * detail.price).toFixed(2)}</p>
                                <Button id="saveForLater" onClick={()=>{
                                        fetch("http://localhost:4000/app/cart/delete",{
                                            method:"POST",
                                            headers:{
                                                'Content-Type':'application/json'
                                            },
                                            body: JSON.stringify({
                                                email: window.localStorage.getItem("email"),
                                                productID: item.productID
                                            })
                                        });
                                        fetch("http://localhost:4000/app/mylist/add",{
                                                method:"POST",
                                                headers:{
                                                    'Content-Type':'application/json'
                                                },
                                                body: JSON.stringify({
                                                    email: window.localStorage.getItem("email"),
                                                    productID: item.productID
                                                })
                                            }).then(window.location.reload());
                                    }}>
                                        Save for later
                                    </Button>
                                <div className="quantity">
                                    <button id="left"
                                         onClick={() => 
                                            fetch("http://localhost:4000/app/cart/minus",{
                                                method:"POST",
                                                headers:{
                                                    'Content-Type':'application/json'
                                                },
                                                body: JSON.stringify({
                                                    email: window.localStorage.getItem("email"),
                                                    productID: item.productID
                                                })
                                            }).then(window.location.reload())}
                                    >
                                        -
                                    </button>
                                    <p id="middle">{item.quantity}</p>
                                    <button id="right"
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
                                            }).then(window.location.reload())}
                                    >
                                        +
                                    </button>
                                </div>
                                <h2 style={{marginRight:"10px"}} onClick={() => 
                                            fetch("http://localhost:4000/app/cart/delete",{
                                                method:"POST",
                                                headers:{
                                                    'Content-Type':'application/json'
                                                },
                                                body: JSON.stringify({
                                                    email: window.localStorage.getItem("email"),
                                                    productID: item.productID
                                                })
                                            }).then(window.location.reload())}>
                                    x
                                </h2>
                            </div>
                        );
                    })}
                    {items && (
                        <div className="total">
                            <h2>${total.toFixed(2)}</h2>
                        </div>
                    )}
                </div>
                {items.length === 0 ? "":
                <Stack className='recommend'>
                    <div>
                        <p>Add <span style={{ color: "red" }}>$4.15</span> of eligible items to your order to qualify for FREE Shipping.</p>
                        <div style={{ fontSize: "18px" }}>
                            Subtotal ({items.length} {items.length > 1 ? 'items' : 'item'}): <span id='price'>${total.toFixed(2)}</span>
                        </div>
                        <FormControlLabel
                            control={<Checkbox value="gift" color="primary" />}
                            label="This order contains a gift"
                        />
                        <Button
                            fullWidth variant="contained"
                            onClick={handleCheckout}
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                    <h3 style={{ marginTop: '1px' }}>Your recently viewed items</h3>
                </Stack>
                }
            </div>
        </>
    );
}