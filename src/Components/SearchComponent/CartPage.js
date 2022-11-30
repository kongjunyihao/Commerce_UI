import React, { useContext } from 'react';
import { CommerceContext } from "../../App";

import "./CartComponentStyle.css";
import Box from '@mui/material/Box';
import Divider from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';


export default function Cart() {
    const Globalstate = useContext(CommerceContext);
    const localstate = Globalstate.state;
    const localdispatch = Globalstate.dispatch;

    console.log(Globalstate);

    const total = localstate.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

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
                    <Link href='/' sx={{ color: 'black', textDecoration: 'none' }}>
                        <ChevronLeftIcon fontSize='large' />Shop
                    </Link>
                </Typography>
            </Toolbar>
            <div className="cart">
                {localstate.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.image} alt=""></img>
                            <p>{item.title}</p>
                            <p>{item.quantity * item.price}</p>
                            <div className="quantity">
                                <button id="left"
                                    onClick={() => localdispatch({ type: "INCREASE", payload: item })}
                                >
                                    +
                                </button>
                                <p id="middle">{item.quantity}</p>
                                <button id="right"
                                    onClick={() => {
                                        if (item.quantity > 1) {
                                            localdispatch({ type: "DECREASE", payload: item });
                                        }
                                    }}
                                >
                                    -
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
                        <h2>{total}</h2>
                    </div>
                )}
            </div>
        </>
    );
}