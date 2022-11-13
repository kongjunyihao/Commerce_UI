import React, { createContext, useReducer } from 'react';
import BuyerMainPage from "./BuyerMainPage";
import redux, { Provider } from "react-redux";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import CommerceSearchBar from './Components/SearchBar';
import CommerceNavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Cart from './Components/SearchComponent/CartPage';
import CommerceFooter from './Components/FeatureComponents/CommerceFooter';

export const CommerceContext = createContext();

function App() {

  const user = {
    firstName: "John",
    lastName: "Alisa",
    email: "123456@gmail.com",
    phoneNumber: "46642156498",
    password: "Xtx461303="
  };

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
    user,
    state,
    dispatch
  }
  
  return (
    <CommerceContext.Provider value={allCommerce}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BuyerMainPage />} />
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </CommerceContext.Provider>
  );
}

export default App;