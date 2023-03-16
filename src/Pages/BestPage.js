import { useContext, useEffect } from "react";
import products from "./data";
import BestProduct from "./BestSellerComponent";
import { CommerceContext } from "../App";
import "./BestPageStyle.css";

export default function BestPage(){
    const Globalstate = useContext(CommerceContext);
    useEffect(()=>{
        Globalstate.setDetail(products);
    },[])
    return (
        <>
        <div>
            <img style={{width: '100%'}} src="https://slimages.macysassets.com/is/image/McomMedia/media/111222PROMOBLKFRIPRVSATHOMEPAGE10101_1485297.jpg?scl=1&fmt=webp&wid=1440" />
            <h2>Best Sellers in Electronics</h2>
            <div className='products__wrapper'>
                {products.map((product) => (
                    <BestProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
}