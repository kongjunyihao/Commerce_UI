import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import AddAddress from './Components/SearchComponent/addressPage';
import AddressList from './Components/SearchComponent/AddressList';

import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      {/* <ProfilePage /> */}
      {/* <AddAddress /> */}
      {/* <AddressList /> */}
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
