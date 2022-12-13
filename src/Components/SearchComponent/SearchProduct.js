import React, { useState, useEffect} from "react";

export default function SearchProduct(){

    const getData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductdata(data);
            })
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <>
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