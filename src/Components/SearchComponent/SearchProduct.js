import React, { useState, useEffect, useContext } from "react";
import { categoryItem } from "./SearchFunction";
import { Link, useParams, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import './BestClothStyle.css';

function SearchProduct() {
    const [product,setProduct] = useState([]);
    const {categoryVal} = useParams();

    const getData = () => {
        fetch("http://localhost:4000/app/search",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({payload: categoryVal})
        })
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

    return (
        <>
            <div className="home">
                {product.map((item, index) => {
                    item.quantity = 1;
                    return (
                        <div className="card" key={index}>
                            <Link to={`/${item.productID}`} state={item}>
                                <img src={
                                    item.productImage[0] === 'h' ? item.productImage : require("../../../uploads/" + item.productImage.slice(8,item.productImage.length)) //apply online data / mock data
                                } alt={item.productName} />
                            </Link>
                            <p>{item.productName}</p>
                            <h3>$ {item.price}</h3>
                            <Button
                                fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                                >
                                add to cart
                            </Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default SearchProduct;