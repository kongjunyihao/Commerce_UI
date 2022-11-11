import React from "react";
import Box from '@mui/material/Box';
import BookData from "./BookData.js";

function BestBook(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2>Best Sellers in Books</h2>
            {BookData.map(item=>
            <img key={item.id}
             src={item.image} alt={item.title}
             style={{width: '20%', height: '32vh'}} />)}
        </Box>
    );
}

export default BestBook;