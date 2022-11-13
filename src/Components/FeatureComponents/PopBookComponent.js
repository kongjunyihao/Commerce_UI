import React from "react";
import Box from '@mui/material/Box';
import BookData from "./BookData.js";

function PopBook(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2>Popular Books in Store</h2>
            {BookData.map(item=>
            <img key={item.id}
             src={item.image} alt={item.title}
             style={{width: '20%', height: '32vh'}} />)}
        </Box>
    );
}

export default PopBook;