import React, { useState, useEffect, useContext } from "react";
import { CommerceContext } from "../App";
import { useNavigate } from "react-router-dom";

import "./SearchComponent/BestClothStyle.css";

export default function Recommendation({ categoryVal, productID }) {
    const [cloth, setCloth] = useState([]);
    const Globalstate = useContext(CommerceContext);
    // const dispatch = Globalstate.dispatch;
    // const navigate = useNavigate();

    const getData = () => {
        fetch("http://localhost:4000/app/products/category/"+categoryVal)
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
    if(!cloth) return(
        <>
        <div>Loading...</div>
        </>
    )
    return (
        <>
            <h3 style={{ marginLeft: '50px' }}>Products related to this item</h3>
            <div className="recommend-comp">
                {cloth.map((item, index) => {
                    item.quantity = 1;
                    if (item.productID === productID) {
                        return;
                    } else {
                        return (
                            <div className="info" key={index}>
                                <a href={`/${item.productID}`} state={item}>
                                    <img id='recommend-img' src={
                                        item.productImage[0] === 'h' ? item.productImage : require("../../uploads/" + item.productImage.slice(8,item.productImage.length)) //apply online data / mock data
                                    } alt={item.productName} />
                                </a>
                                <p>{item.productName}</p>
                                <h3>$ {item.price}</h3>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}