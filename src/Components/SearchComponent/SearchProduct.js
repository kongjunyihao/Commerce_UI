import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import './BestClothStyle.css';

function SearchProduct() {
    const [product,setProduct] = useState([]);
    const {categoryVal} = useParams();
    const navigate = useNavigate();
    const getData = () => {
        fetch("http://107.20.70.11:80/app/search",{
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
                            {window.localStorage.getItem("email")? (
                            <Button
                            fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                            onClick={() => 
                                fetch("http://107.20.70.11:80/app/cart/add",{
                                    method:"POST",
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body: JSON.stringify({
                                        email: window.localStorage.getItem("email"),
                                        productID: item.productID
                                    })
                                })}>
                                add to cart
                            </Button>
                            ):(
                                <Button
                                fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                                onClick={() => 
                                    {
                                        navigate("/signIn")
                                    }}>
                                    Sign in to add
                                </Button>
                            )
                            }
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default SearchProduct;