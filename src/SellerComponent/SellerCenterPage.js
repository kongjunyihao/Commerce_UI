import React from "react";
import Header from "./Header";
import SellerCenterNavBar from "./SellerCenterNavBar";
import SellerFooter from "./SellerFooter";

export default function SellerCenterPage(){
    return (
        <>
            <Header />
            <SellerCenterNavBar/>
            <div style={
                {
                    marginTop:"10%",
                    marginBottom:"10%"
                }
            }>
            <h1 style={{
                    color:"#1976d2",
                    margin:"auto",
                    textAlign:"center"
                }}>Welcome to the seller center!</h1>
            </div>
            <SellerFooter />
        </>
    );
}