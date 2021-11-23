import './App.css';
import FeaturedCarousel from './components/Carousel'
import NavBar from "./components/NavBar"
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom"


function App() {


  return (
    <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        {/* Start of Main Page */}
        <Route exact path="/">
          <FeaturedCarousel />
          <h1>ProductListings Component</h1>
          <h1>Reviews</h1>
        </Route>
        {/* End of Main Page */}

        {/* Start of Contact Us Page */}
        <Route exact path="/contact-us">
          <h1>You can contact us here!</h1>
        </Route>
        {/* End of Contact us page */}

        {/* Start of Login Page */}
        <Route exact path="/login">
          <h1>You can login here!</h1>
        </Route>
        {/* End of login page */}

        {/* start of Sign up page */}
        <Route exact path="/sign-up">
          <h1>You can sign up here!</h1>
        </Route>
        {/* End of sign up page */}

        {/* Start of Product Display Page + Product Context*/}
        <Route exact path="/products/:product_id">
          <h1>product display here should be compoenent</h1>
          {/* <ProductDisplay/> component */}
        </Route>
        {/* End of product Display Page */}

      </Switch>
    </React.Fragment>
    </Router>
    
  );
}

export default App;
