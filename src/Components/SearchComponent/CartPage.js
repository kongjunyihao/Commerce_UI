import React, { useContext } from 'react';
import { CommerceContext } from "../../App";

import "./CartComponentStyle.css";
import Box from '@mui/material/Box';
import Divider, { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';


export default function Cart() {
    const Globalstate = useContext(CommerceContext);
    const localstate = Globalstate.state;
    const localdispatch = Globalstate.dispatch;

    console.log(Globalstate);

    const total = localstate.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const totalItem = localstate.reduce((total, item) => {
        return total + item.quantity;
    }, 0)

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
                    <Link style={{ textDecoration: "none", color: "black" }} to='/'>
                        <ChevronLeftIcon fontSize='large' />Shop
                    </Link>
                </Typography>
            </Toolbar>
            <Stack className='cart-info'>
                <div className="cart">
                    {localstate.length === 0 ? (
                        <h1>Your cart is empty. Add something you like here!</h1>
                    ) : null}
                    {localstate.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={
                                    item.image[0] === 'h' ? item.image : require("../../Asset/" + item.image) //apply online data / mock data
                                } alt=""></img>
                                <p>{item.title}</p>
                                <p>${(item.quantity * item.price).toFixed(2)}</p>
                                <div className="quantity">
                                    <button id="left"
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                localdispatch({ type: "DECREASE", payload: item });
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                    <p id="middle">{item.quantity}</p>
                                    <button id="right"
                                        onClick={() => localdispatch({ type: "INCREASE", payload: item })}
                                    >
                                        +
                                    </button>
                                </div>
                                <h2 onClick={() => localdispatch({ type: "REMOVE", payload: item })}>
                                    x
                                </h2>
                            </div>
                        );
                    })}
                    {localstate.length > 0 && (
                        <div className="total">
                            <h2>${total.toFixed(2)}</h2>
                        </div>
                    )}
                </div>
                <Stack className='recommend'>
                    <div>
                        <p>Add <span style={{color: "red"}}>$4.15</span> of eligible items to your order to qualify for FREE Shipping.</p>
                        <div style={{fontSize: "18px"}}>
                            Subtotal ({totalItem} {totalItem > 1 ? 'items' : 'item'}): <span id='price'>${total.toFixed(2)}</span>
                        </div>
                        <FormControlLabel
                            control={<Checkbox value="gift" color="primary" />}
                            label="This order contains a gift"
                        />
                        <Button
                            fullWidth variant="contained"
                        // onClick={() => {
                        //     item.quantity = 1;
                        //     dispatch({ type: "ADD", payload: item });
                        // }}
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                    <h3 style={{ marginTop: '1px' }}>Your recently viewed items</h3>
                </Stack>
            </Stack>
        </>
    );
}