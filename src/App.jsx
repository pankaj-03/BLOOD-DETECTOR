import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import About from './components/About'
import AuthModal from './components/Auth';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false); // For controlling modal visibility
  const [startWithLogin, setStartWithLogin] = useState(true); // To determine login or sign-up
  
  const handleAuthOpen = (isLogin) => {
    setStartWithLogin(isLogin); // Set whether to start with login or sign-up
    setShowAuthModal(true); // Show the modal
  };

  const handleModalClose = () => {
    setShowAuthModal(false); // Close the modal
  };

  return (
    <>
     <BrowserRouter>
      <Navbar handleAuthOpen={handleAuthOpen} />
      <Routes>
        <Route path="/" element={<HeroSection  handleAuthOpen={handleAuthOpen}  />} />
        <Route path="/about" element={<About />} />  {/* Add route for About */}
      </Routes>
      <Footer />

      {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={handleModalClose}
            startWithLogin={startWithLogin} // Decide whether it's login or sign-up
          />
        )}
    </BrowserRouter>

    </>
  )
}

export default App
