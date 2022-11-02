import { Switch } from '@mui/material';
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import redux, { Provider } from "react-redux";
import { Route, Routes, Router, useRoutes } from "react-router-dom";
import './App.css';

import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';

export const commerceContext = React.createContext();

function App() {
    const [signIn, setSignIn] = useState([]);
    const [signUp, setSignUp] = useState([]);

    const user = {
        firstName: "John",
        lastName: "Alisa",
        email: "123456@gmail.com",
        phoneNumber: "46642156498",
        password: "Xtx12345678="
    };

    const allCommerce = {
        user,
        signIn,
        setSignIn,
        signUp,
        setSignUp
    };
    return (
        <commerceContext.Provider value = {allCommerce}>
            {/* <HomePage /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </commerceContext.Provider>
    );
}

export default App;
