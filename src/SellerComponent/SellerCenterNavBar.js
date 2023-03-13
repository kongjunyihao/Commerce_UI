import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Tabs, Tab } from '@mui/material';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
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
    // const theme = useTheme();
    const [value, setValue] = useState(0);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

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