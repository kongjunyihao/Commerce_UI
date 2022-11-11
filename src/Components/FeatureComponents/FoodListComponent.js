import React, { useContext } from "react";
import { CommerceContext } from "../../App";

import Box, { Button } from "@mui/material";
import Divider from "@mui/material";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function FoodComponent(props){
    const commerceContext = useContext(CommerceContext);

    return (
        <Box width='12%' bgcolor="white"
         sx={{ flexGrow: 1, border: '1px solid grey', '& > legend': { mt: 2 }, }}
        >
            <img src="" />
            <div>
                <Rating name="read-only"
                 value={props.value} readOnly
                 sx={{marginLeft: 'auto'}} />
                <Typography  component="legend" sx={{marginLeft: '5px'}}>{props.value}</Typography>
            </div>
            <div>
                <p>{props.price}</p>
                <p>{props.title}</p>
            </div>
            <Button>Add to Cart</Button>
        </Box>
    );
}