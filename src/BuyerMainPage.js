import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CommerceSearchBar from './Components/SearchBar';
import CommerceNavBar from './Components/NavBar';
import HookSlider from './Components/FeatureComponents/CarouselCompmonent';
import BestBook from './Components/FeatureComponents/BestBookComponent';
import BestCloth from './Components/SearchComponent/BestClothComponent';
import CommerceFooter from './Components/FeatureComponents/CommerceFooter';

import Box from '@mui/material/Box';


export default function BuyerMainPage() {
    const [search, setSearch]=useState("");
    const [searchStaus, setSearchStatus]=useState(false);
    const [searchItem, setSearchItem]=useState([]);


    return (
        <>
            <Box>   
                <CommerceSearchBar />
                <CommerceNavBar />
                <HookSlider />
                <BestBook />
                <BestCloth />
                <CommerceFooter />
            </Box>
            
        </>
    );
}