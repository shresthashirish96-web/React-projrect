import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Service from './components/Service';
import Work from './components/Work';
import Contact from './components/Contact';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Interior from './components/Interior';
import Additional from './components/Additional';
import Exterior from './components/Exterior';
import Sunroom from './components/Sunroom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/sunroom" element={<Sunroom />} />
      </Routes>
    </Router>
  );
}

export default App;
