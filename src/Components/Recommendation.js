import React, { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../App";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import "./SearchComponent/BestClothStyle.css";

export default function ({ categoryVal, productID }) {
    const [cloth, setCloth] = useState([]);
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;
    const navigate = useNavigate();

    const getData = () => {
        fetch("https://fakestoreapi.com/products/category/" + categoryVal + "?limit=5")
            .then(res => res.json())
            .then(
                data => {
                    if (window.sessionStorage.getItem("product")) {
                        setCloth([...JSON.parse(window.sessionStorage.getItem("product")), ...data]);
                    }
                    else {
                        setCloth(data);
                    }
                }
            )
    }
    useEffect(() => {
        getData();
    }, []);

    // useEffect(()=>{
    //     Globalstate.setDetail(cloth);
    // },[cloth]);

    return (
        <>
            <h3 style={{ marginLeft: '50px' }}>Products related to this item</h3>
            <div className="recommend-comp">
                {cloth.map((item, index) => {
                    item.quantity = 1;
                    if (item.id === productID) {
                        return;
                    } else {
                        return (
                            <div className="info" key={index}>
                                <Link to={`${item.id}`} state={item}>
                                    <img id='recommend-img' src={
                                        item.image[0] === 'h' ? item.image : require("../Asset/" + item.image) //apply online data / mock data
                                    } alt={item.title} />
                                </Link>
                                <p>{item.title}</p>
                                <h3>$ {item.price}</h3>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}