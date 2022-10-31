import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import redux, { Provider } from "react-redux";
import './App.css';

import SignIn from './SignIn';
import SignUp from './SignUp';

export const commerceContext = React.createContext();

function App() {
    const [signIn, setSignIn] = useState([]);
    const [signUp, setSignUp] = useState([]);

    const allCommerce = {
        signIn,
        setSignIn,
        signUp,
        setSignUp
    };
    return (
        <commerceContext.Provider vakue = {allCommerce}>
            <SignIn />
            <SignUp />
        </commerceContext.Provider>
    );
}

export default App;
