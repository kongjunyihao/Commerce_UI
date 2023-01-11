import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "./CartComponentStyle.css";
import Box from '@mui/material/Box';
import Divider, { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


function AddressList(){
    return (
        <>
            <Toolbar>
            <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    Your Addresses
                </Typography>
            </Toolbar>
            <div></div>
        </>
    );
}

export default AddressList;