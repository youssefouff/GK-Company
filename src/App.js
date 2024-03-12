import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Machines from './components/Machines'
import Contact from './components/Contact'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Product4 from './components/Product4'
import Product5 from './components/Product5'
import Product6 from './components/Product6'
import Product7 from './components/Product7'
import Product8 from './components/Product8'
import Product9 from './components/Product9'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
            path="/"
            element={(
              <>
                <Home />
                <About />
                <Machines />
                <Contact />
              </>
            )}
          />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/product7" element={<Product7 />} />
          <Route path="/product8" element={<Product8 />} />
          <Route path="/product9" element={<Product9 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
