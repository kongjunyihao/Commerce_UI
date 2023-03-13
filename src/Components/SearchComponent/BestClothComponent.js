import React from "react";
import { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../../App";
import "./BestClothStyle.css";
import { Link, useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetail";
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function BestCloth(){
    const [cloth,setCloth] = useState([]);
    const [loading,setLoading] = useState(true);
    const Globalstate = useContext(CommerceContext);
    // const dispatch = Globalstate.dispatch;
    const navigate = useNavigate();
    const getData = () => {
        fetch("http://localhost:4000/app/products")
        .then(res=>res.json())
        .then(
            data=>{
                if(window.sessionStorage.getItem("product")) {
                    setCloth([...JSON.parse(window.sessionStorage.getItem("product")), ...data]);
                }
                else{
                    setCloth(data);
                    setLoading(false);
                }
            }
        )
    }
    useEffect(()=>{
        setTimeout(()=>getData(),1000);
    }, []);

    if(loading) return(
        <>
        <div>Loading...</div>
        </>
    )
    return (
        <>
            <h2>Today's Best Sellers</h2>
            <div className="home">
            {cloth.map((item, index) => {
                item.quantity = 1;
                return (
                        <div className="card" key={index}>
                            <Link to={`${item.productID}`} state={item}>
                            <img src={
                                item.productImage[0] === 'h'? item.productImage:require("../../../uploads/"+item.productImage.slice(8,item.productImage.length)) //apply online data / mock data
                                } alt={item.productName} />
                            </Link>
                            <p>{item.productName}</p>
                            <h3>$ {item.price}</h3>
                            {window.localStorage.getItem("email")? (
                            <Button
                            fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
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

export default BestCloth;