import React, { createContext, useReducer, useState } from 'react';
import BuyerMainPage from "./BuyerMainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import SellerMainPage from './SellerComponent/SellerMainPage';
import SellerCenterPage from './SellerComponent/SellerCenterPage';
import UploadProduct from './SellerComponent/UploadProduct';
import ProfilePage from './Components/SearchComponent/ProfilePage';
import AddressList from './Components/SearchComponent/AddressList';
import AddAddress from './Components/SearchComponent/addressPage';
import MyList from './Components/SearchComponent/MyList';
import CommerceSearchBar from './Components/SearchBar';
import CommerceNavBar from './Components/NavBar';
import CommerceFooter from './Components/FeatureComponents/CommerceFooter';
import MyList from './Components/SearchComponent/MyList';
export const CommerceContext = createContext();

function App() {

  const checkout_info = {
    firstName: "John",
    lastName: "Alisa",
    email: "123456@gmail.com",
    phoneNumber: "46642156498",
    password: "Xtx461303="
  };

  const [productWithDetail,setDetail] = useState([]);
  const [product, setProduct] = useState([]);

  const reducer  = (state, action) => {
    switch(action.type){
      case "ADD":
        const tempState = state.filter((item)=>action.payload.id === item.id);
        if(tempState.length > 0){
          return state;
        }else{
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempState1 = state.map(item=>{
          if(item.id === action.payload.id){
            return {...item, quantity: item.quantity + 1};
          }else{
            return item;
          }
        });
        return tempState1;
      case "DECREASE":
        const tempState2 = state.map(item=>{
          if(item.id === action.payload.id){
            return {...item, quantity: item.quantity - 1};
          }else{
            return item;
          }
        });
        return tempState2;
      case "REMOVE":
        const tempState3 = state.filter(
          item => item.id !== action.payload.id
        );
        return tempState3;
      default:
        return state;
    };
  };

  const [state, dispatch] = useReducer(reducer, []);

  const allCommerce = {
    checkout_info,
    product,
    setProduct,
    state,
    dispatch,
    productWithDetail,
    setDetail
  }
  
  return (
    <CommerceContext.Provider value={allCommerce}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BuyerMainPage />} />
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="addProduct" element={<SellerMainPage/>}></Route>
          <Route path="sellerCenter" element={<SellerCenterPage/>}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="mylist" element={<><CommerceSearchBar/><CommerceNavBar/><MyList /><CommerceFooter/></>}></Route>
          <Route path="address" element={<><CommerceSearchBar/><CommerceNavBar/><AddressList /><CommerceFooter/></>}></Route>
          <Route path="address/add" element={<AddAddress/>}></Route>
          <Route path="myList" element={<MyList />}></Route>
        </Routes>
      </BrowserRouter>
    </CommerceContext.Provider>
  );
}

export default App;