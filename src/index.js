import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import ProductDetail from './Components/ProductDetail';
import UploadProduct from './SellerComponent/UploadProduct';
import './index.css';
import SellerMainPage from "./SellerComponent/SellerMainPage";

import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      {/* <SellerMainPage /> */}
      {/* <ProductDetail /> */}
      {/* <UploadProduct /> */}
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
