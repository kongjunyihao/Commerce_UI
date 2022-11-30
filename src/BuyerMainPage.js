import React from 'react';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import CommerceSearchBar from './Components/SearchBar';
import CommerceNavBar from './Components/NavBar';
import HomePageContent from './MainPageContent';
import Cart from './Components/SearchComponent/CartPage';
import CommerceFooter from './Components/FeatureComponents/CommerceFooter';
import BestPage from './Pages/BestPage';

import Box from '@mui/material/Box';
import SignUp from './Components/SignUp';
import SellerMainPage from './SellerComponent/SellerMainPage';


export default function BuyerMainPage() {

    return (
        <>   
            <CommerceSearchBar />
            <CommerceNavBar />
            <Routes>
                <Route path="*" element={<HomePageContent />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="best" element={<BestPage />}></Route>
            </Routes>
            <CommerceFooter />
        </>
    );
}