import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { styled, alpha, useTheme } from '@mui/material/styles';
import { Tabs, Button, Tab } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { CheckOutlined } from '@mui/icons-material';

import AccountMenus from './SearchComponent/AccountMenu';
import SearchFunction from './SearchComponent/SearchFunction';


const drawerWidth = 360;

const digit = ['Prime Video', 'Music', 'Echo & Alexa',
  'Fire Tablets', 'Fire TV', 'Kindle E-readers & Books',
  'Audible Books & Originals', 'Photos', 'Appstore'];

const department = ['Clothing, Shoes Jewelry & Watches', 'Books',
  'Movies, Music & Games', 'Electronics'];

const programFeature = ['Whole Foods Market', 'Pharmacy', 'Physucal Stores', 'Subscribe & Save'];

const helpSetting = [];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '40%',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CommerceSearchBar() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [productdata, setProductdata] = useState([]);

  const getData = () => {
    fetch("http://localhost:4000/app/products")
      .then(res => res.json())
      .then(data => {
        setProductdata(data);
      })
  }

  useEffect(() => {
    getData()
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCart = () => { }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              All
            </Typography>
          </IconButton>
          <Typography variant="h5"
            sx={{ display: { xs: 'none', sm: 'block', marginLeft: '100px', marginRight: '10px' } }}>
            LOGO
          </Typography>
          <SearchFunction data={productdata} />
          <AccountMenus sx={{ display: { marginLeft: 'auto' } }} />
          <Button variant="h6"
            sx={{ display: { marginLeft: 'auto' } }}
          >
            <Link to='cart' style={{ color: 'white', textDecoration: 'none' }}>
            <ShoppingCartCheckoutIcon
              fontSize='medium'
              sx={{ marginRight: 'auto' }} />&nbsp;Cart
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader>
          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bolder' } }}>
            Trending
          </Typography>
          <ListItem disablePadding sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ListItemButton>
              <Link to='best' style={{ color: 'black', textDecoration: 'none' }}>
                <ListItemText href='best' primary={'Best Sellers'} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={'New Releases'} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={'Movers & Shakers'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bolder' } }}>
            Digital Content & Devices
          </Typography>
          {digit.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bolder' } }}>
            Shop By Department
          </Typography>
          {department.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bolder' } }}>
            Programs & Features
          </Typography>
          {programFeature.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}