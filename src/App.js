import './App.css';
import BuyerMainPage from "./BuyerMainPage.js";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <nav className='homeRouterNav'>
                <Link to="home"  className='homeRouterLink'>Home</Link>
                <Link to="signInOrUp" className='homeRouterLink signIn'>Sign In/Sign Up</Link>
                <Link to="Cart" className='homeRouterLink'>Cart</Link>
            </nav>

            <Routes>
                <Route path="home" element={<BuyerMainPage />}></Route>
                <Route path="signInOrUp" element={<SignIn />}></Route>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
