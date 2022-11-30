import React from "react";
import { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../../App";
import "./BestClothStyle.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function BestCloth(){
    const [cloth, setCloth] = useState([]);

    const getData = () => {
        fetch("https://fakestoreapi.com/products/category/women's clothing?limit=5")
        .then(res=>res.json())
        .then(
            data=>{
                setCloth(data)
            }
        )
    }

    useEffect(()=>{
        getData();
    }, []);

    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;


    return (
        <>
            <h2>Best Sellers in Clothes</h2>
            <div className="home">
            {cloth.map((item, index) => {
                item.quantity = 1;
                return (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <h3>$. {item.price}</h3>
                        <Button
                         fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                         onClick={() => dispatch({ type: "ADD", payload: item })}>
                            add to cart
                        </Button>
                    </div>
                    );
                })}
            </div>
        </>
    );
}

export default BestCloth;