import React from "react";
import { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../../App";
import "./BestClothStyle.css";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function BestCloth(){
    const [cloth,setCloth] = useState([]);
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;

    const getData = () => {
        fetch("https://fakestoreapi.com/products/category/women's clothing?limit=5")
        .then(res=>res.json())
        .then(
            data=>{
                if(window.sessionStorage.getItem("product")) {
                    setCloth([...JSON.parse(window.sessionStorage.getItem("product")),...data]);
                }
                else{
                    setCloth(data);
                }
            }
        )
    }
    useEffect(()=>{
        getData();
    }, []);
    useEffect(()=>{
        Globalstate.setDetail(cloth);
    },[cloth]);
    return (
        <>
            <h2>Best Sellers in Clothes</h2>
            <div className="home">
            {cloth.map((item, index) => {
                item.quantity = 1;
                return (
                        <div className="card" key={index}>
                            <Link to={`${item.id}`} state={item}>
                            <img src={
                                item.image[0] === 'h'? item.image:require("../../Asset/"+item.image) //apply online data / mock data
                                } alt={item.title} />
                            </Link>
                            <p>{item.title}</p>
                            <h3>$ {item.price}</h3>
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