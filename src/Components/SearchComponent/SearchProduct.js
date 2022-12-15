import React, { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../../App";
import { categoryItem } from "./SearchFunction";
import { Link, useParams, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import './BestClothStyle.css';

export default function SearchProduct() {
    const [product,setProduct] = useState([]);
    const {categoryVal} = useParams();
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;
    const navigate = useNavigate();
    const item = Globalstate.productWithDetail.find(prod => prod.category === categoryVal);

    const getData = () => {
        fetch("https://fakestoreapi.com/products/category/"+categoryVal)
            .then(res => res.json())
            .then(
                data => {
                    if (window.sessionStorage.getItem("product")) {
                        setProduct([...JSON.parse(window.sessionStorage.getItem("product")), ...data]);
                    }
                    else {
                        setProduct(data);
                    }
                }
            )
    }
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        Globalstate.setDetail(product);
    }, [product]);

    return (
        <>
            <div className="home">
                {product.map((item, index) => {
                    item.quantity = 1;
                    return (
                        <div className="card" key={index}>
                            <Link to={`${item.id}`} state={item}>
                                <img src={
                                    item.image[0] === 'h' ? item.image : require("../../Asset/" + item.image) //apply online data / mock data
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