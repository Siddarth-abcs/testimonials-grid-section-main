import { useState } from 'react';
// import { Navbar } from './Navbar/Navbar';
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
// import { Fourcard } from './four-card-feature-section-master/Fourcard';
import { Testimonialsgrid } from './testimonials-grid-section-main/Testimonialsgrid';


function App() {

  return (
      <Router>
        <Testimonialsgrid/>
      </Router>
  )
}

export default App
