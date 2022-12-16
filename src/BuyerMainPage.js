import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import CommerceSearchBar from './Components/SearchBar';
import CommerceNavBar from './Components/NavBar';
import HomePageContent from './MainPageContent';
import Cart from './Components/SearchComponent/CartPage';
import CommerceFooter from './Components/FeatureComponents/CommerceFooter';
import SellerMainPage from './SellerComponent/SellerMainPage';
import BestPage from './Pages/BestPage';
import Recommendation from './Components/Recommendation';
import SearchProduct from './Components/SearchComponent/SearchProduct';

import Box from '@mui/material/Box';
import { data } from 'autoprefixer';
import ProductDetail from './Components/ProductDetail';
import { positions } from '@mui/system';


export default function BuyerMainPage() {

    return (
        <>
            <CommerceSearchBar />
            <CommerceNavBar />
            <Routes>
                <Route path="*" element={<HomePageContent />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="best" element={<BestPage />}></Route>
                <Route path="seller" element={<SellerMainPage />}></Route>
                <Route path="/:productId" element={<ProductDetail />}></Route>
                <Route path="/categories/:categoryVal" element={<SearchProduct />}></Route>
            </Routes>
            <CommerceFooter />
        </>
    );
}