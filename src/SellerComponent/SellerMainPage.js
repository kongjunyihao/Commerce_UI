import React from "react";
import Header from "./Header";
import UploadProduct from "./UploadProduct";
import SellerFooter from "./SellerFooter";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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