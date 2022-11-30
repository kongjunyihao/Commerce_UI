import React from "react";
import Header from "./Header";
import UploadProduct from "./UploadProduct";
import SellerFooter from "./SellerFooter";

export default function SellerMainPage(){
    return (
        <>
            <Header />
            <UploadProduct />
            <SellerFooter />
        </>
    );
}