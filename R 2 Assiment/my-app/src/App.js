import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import Animation from './components/Animation/Animation'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App