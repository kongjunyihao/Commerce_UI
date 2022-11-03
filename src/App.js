import React from 'react';
import './App.css';
import BuyerMainPage from "./BuyerMainPage.js";
import redux, { Provider } from "react-redux";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

export const CommerceContext = React.createContext();

function App() {

  const user = {
    firstName: "John",
    lastName: "Alisa",
    email: "123456@gmail.com",
    phoneNumber: "46642156498",
    password: "Xtx461303="
  };

  const allCommerce = {
    user
  }
  return (
    <CommerceContext.Provider value={allCommerce}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
              {/* <nav className='homeRouterNav'>
                  <Link to="/" className='homeRouterLink'>Home</Link>
                  <Link to="signInOrUp" className='homeRouterLink signIn'>Sign In / Sign Up</Link>
                  <Link to="/" className='homeRouterLink'>Cart</Link>
              </nav> */}
              <Routes>
                  <Route path="/" element={<BuyerMainPage />}>Home</Route>
                  <Route path="signInOrUp" element={<SignIn />}></Route>
                  <Route path="signUp" element={<SignUp />}></Route>
              </Routes>
          </BrowserRouter>
        </header>
      </div>
    </CommerceContext.Provider>
  );
}

export default App;
