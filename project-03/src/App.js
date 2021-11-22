import './App.css';
import FeaturedCarousel from './components/Carousel'
import NavBar from "./components/NavBar"
import React from 'react';



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FeaturedCarousel />
      <h1>This is the Body Content</h1>
    </React.Fragment>
    
  );
}

export default App;
