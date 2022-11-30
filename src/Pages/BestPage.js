import BestProduct from "./BestSellerComponent";
import BestCloth from "../Components/SearchComponent/BestClothComponent";

import "./BestPageStyle.css";

export default function BestPage(){

    return (
        <>
            <img style={{width: '100%'}} src="https://slimages.macysassets.com/is/image/McomMedia/media/111222PROMOBLKFRIPRVSATHOMEPAGE10101_1485297.jpg?scl=1&fmt=webp&wid=1440" alt="" />
            <h2>Best Sellers in Devices</h2>
            <div className="products__wrapper">
                <BestProduct />
            </div>
            <BestCloth />
        </>
    );
}