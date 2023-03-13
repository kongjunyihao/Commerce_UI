import React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function CommerceNavBar(){
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <CssBaseline />
            <AppBar
             sx={{ position: "static", background: "#fff" }}>
                <Toolbar>
                    <Tabs
                    textColor="inherit"
                    value={value}
                    onChange={(e, value)=>setValue(value)}
                    indicatorColor='secondary'
                    >
                      <Tab label="Home" onClick={()=>{navigate('/')}} sx={{color: 'black'}} />
                      <Tab label="Beauty & Personal Care" sx={{color: 'black'}} />
                      <Tab label="Pet Supplies" sx={{color: 'black'}} />
                      <Tab label="Todqay's Deals" sx={{color: 'black'}} />
                      <Tab label="TV & Video" sx={{color: 'black'}} />
                      <Tab label="Books" sx={{color: 'black'}} />
                      <Tab label="Music" sx={{color: 'black'}} />
                      <Tab label="Pharmacy" sx={{color: 'black'}} />
                      <Tab label="Household" sx={{color: 'black'}} />
                      <Tab label="Fashion" sx={{color: 'black'}} />
                      <Tab label="Coupons" sx={{color: 'black'}} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    );
}