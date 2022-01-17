import './App.css';
import NavBar from "./components/NavBar"
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import SignUpPage from './pages/SignUpPage';
import LoginPage from "./pages/LoginPage"
import CartPage from './pages/CartPage'
import MainPage from "./pages/MainPage"
import ProductInfoPage from "./pages/ProductInfoPage"


function App() {

  return (
    <React.Fragment>
      <div className="container">
      <Router>
        
        <Switch>
          {/* Start of Main Page */}
            <Route exact path="/">
              <MainPage />
            </Route>
          {/* End of Main Page */}

          {/* Start of Contact Us Page */}
          {/* <Route exact path="/contact-us">
            <h1>You can contact us here!</h1>
          </Route> */}
          {/* End of Contact us page */}

          {/* Start of Login Page */}
          
          <Route exact path="/login">
              <LoginPage />
          </Route>
          
          {/* End of login page */}

          {/* start of Sign up page */}
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          {/* End of sign up page */}

          <Route exact path="/cart/:userId">
            <CartPage />
          </Route>


          {/* Start of Product Display Page*/}
          <Route exact path="/products/:product_id">
            <ProductInfoPage />
          </Route>
          {/* End of product Display Page */}

        </Switch>

      </Router>
      </div>
    </React.Fragment>
    
    
  );
}

export default App;
