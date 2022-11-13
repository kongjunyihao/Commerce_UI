import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselData from './CarouselData';

function HookSlider(){
    
    return (
        <Carousel>
            {CarouselData.map(item=>
            <img key={item.id}
             src={item.image} alt={item.title}
             style={{width: '100%', height: '45vh'}} />)}
        </Carousel>
    );
}

export default HookSlider;
