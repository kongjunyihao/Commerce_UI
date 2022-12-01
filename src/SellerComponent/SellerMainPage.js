import React from "react";
import Header from "./Header";
import SellerCenterNavBar from "./SellerCenterNavBar";
import UploadProduct from "./UploadProduct";
import SellerFooter from "./SellerFooter";

export default function SellerMainPage(){
    return (
        <>
            <Header />
            <SellerCenterNavBar/>
            <UploadProduct />
            <SellerFooter />
        </>
    );
}