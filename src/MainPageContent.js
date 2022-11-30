
import React from 'react';
import HookSlider from './Components/FeatureComponents/CarouselCompmonent';
import PopBook from './Components/FeatureComponents/PopBookComponent';
import BestCloth from './Components/SearchComponent/BestClothComponent';

import Box from '@mui/material/Box';

export default function HomePageContent(){
    return (
        <Box>
            <HookSlider />
            <PopBook />
            <BestCloth />
        </Box>
    );
}