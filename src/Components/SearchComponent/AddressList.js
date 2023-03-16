import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Host } from '../../Frontend_Network';

import "./AddressStyle.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function AddressList() {
    const [address, setAddress] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAddress();
    }, [])

    const getAddress = () => {
        fetch(Host+"/app/address",{
            method: "POST",
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                    email: window.localStorage.getItem('email')
                })
        })
        .then(res=>res.json())
        .then(data=>{setAddress(data)})
    }

    return (
        <>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '8px' }}
                >
                    {`Your Addresses`}
                </Typography>
            </Toolbar>
            <Box className="address-container"
                width='100%' sx={{ flexGrow: 1 }}
                bgcolor="white" color="black">
                <Stack className='add-container'>
                    <div className="add-icon"
                        onClick={() => {
                            navigate('add')
                        }}
                    >
                        <span>+</span>
                        <h2 style={{ align: 'center' }}>Add Address</h2>
                    </div>
                </Stack>
                <Stack className='list-container'>
                    {address && (address.map((item, index)=>{
                        return (
                            <div className='list-content' key={index}>
                                <p>{item.fullName}</p>
                                <p>{item.street}</p>
                                <div className='location'>
                                    <div>{item.city}</div>,&nbsp;
                                    <div>{item.state}</div>&nbsp;
                                    <div>{item.zip}</div>
                                </div>
                                <p>
                                    Phone number: {item.phone}
                                </p>
                                <div>
                                    <a href=''>Edit</a> | <a href=''>Remove</a>
                                </div>
                            </div>
                        );
                    }))}
                </Stack>
            </Box>
        </>
    );
}

export default AddressList;