import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import About from './components/About'
import Result from './components/Result';





function App() {
  
  



  return (
    <>
     <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<HeroSection  />} />
        <Route path="/about" element={<About />} />  
        <Route path="/result" element = {<Result/>}/>
        {/* <Route path="/docs" element = {<Docs/>}/> */}
      </Routes>
      <Footer />
  
    </BrowserRouter>

  

    </>
  )
}

export default App
