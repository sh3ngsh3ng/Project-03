import './App.css';
import FeaturedCarousel from './components/Carousel'
import NavBar from "./components/NavBar"
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  return (
    <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FeaturedCarousel />
          <h1>Product Listings</h1>
          <h1>Reviews</h1>
        </Route>
        <Route exact path="/contact-us">
          <h1>You can contact us here!</h1>
        </Route>
        <Route exact path="/login">
          <h1>You can login here!</h1>
        </Route>
        <Route exact path="/sign-up">
          <h1>You can sign up here!</h1>
        </Route>
      </Switch>
    </React.Fragment>
    </Router>
    
  );
}

export default App;
