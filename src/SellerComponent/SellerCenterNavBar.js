import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, Tab } from '@mui/material';
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


export default function SellerCenterNavBar(){
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
                      <Tab label="Catalog" sx={{color: 'black'}} />
                      <Tab label="Inventory" sx={{color: 'black'}} />
                      <Tab label="Product Management" sx={{color: 'black'}} />
                      <Tab label="Pricing" sx={{color: 'black'}} />
                      <Tab label="Orders" sx={{color: 'black'}} />
                      <Tab label="Advertising" sx={{color: 'black'}} />
                      <Tab label="Stores" sx={{color: 'black'}} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    );
}