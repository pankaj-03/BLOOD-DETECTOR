import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { IoEllipseSharp } from 'react-icons/io5';


const Navbar = ({ handleAuthOpen }) => {

  const NavFields = [
    { id: 0, fieldName: "Home", link: "/" },
    { id: 1, fieldName: "About", link: "/about" },
    { id: 2, fieldName: "Services", link: "#" },
    { id: 3, fieldName: "Contact", link: "#" },
    { id: 4, fieldName: "Login", link: "#" },
    { id: 5, fieldName: "SignUp", link: "#" },
  ]
  
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  }

  const navigate = useNavigate();
  function  handleHomeClick(){
    if(location.pathname !== '/'){
      navigate('/');
    }else{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="w-full h-28  sticky top-0  z-50 bg-gradient-to-b from-[#3e0d0d] to-[#801818] md:h-32 shadow-xl">
      <div className="container max-w-full mx-auto  px-6">
        <div className="grid navbar-grid grid-cols-2">

          {/* LOGO */}
          <div className="col-span-1">
            <img src={logo} alt="MY LOGO" className="w-[250px] h-[110px]  object-contain mt-2"></img>
          </div>

          {/* NAV FIELDS */}
          <div className="flex justify-end items-center  md:hidden">
            <button onClick={handleToggle}>
              <GiHamburgerMenu className="h-12 w-10" />
            </button>

          </div>

          <nav className="col-span-1">
            <ul className={`absolute top-25 left-0 w-full md:static md:flex md:flex-row md:justify-center items-center lg:gap-6 md:gap-3  flex-col md:h-full md:bg-transparent  space-y-2 md:space-y-0  bg-red-400 ${showMenu ? "flex" : "hidden"}`}>
              {NavFields.map((item) => (
                <li key={item.id} className={`${item.id === 0 ? "mt-2" : " "} ${item.id === NavFields.length - 1 ? "mb-2" : ""} md:mt-0 md:mb-0`}>
                  
                  {item.fieldName === "Login" ? (
                    <button
                      onClick={() => handleAuthOpen(true)}
                      className="text-lg text-amber-50 font-semibold"
                    >
                      {item.fieldName}
                    </button>
                  ) : item.fieldName === "SignUp" ? (
                    <button
                      onClick={() => handleAuthOpen(false)}
                      className="text-lg text-amber-50 font-semibold"
                    >
                      {item.fieldName}
                    </button>
                  ) : item.fieldName === "Home" ? (
                    <button 
                     onClick = {handleHomeClick}
                     className="text-lg text-amber-50 font-semibold cursor-pointer">
                      {item.fieldName}
                    </button>
                  ): (<Link to={item.link} className="text-lg text-amber-50 font-semibold">{item.fieldName}</Link>)}</li>
              ))}
            </ul>
          </nav>

          {/* MOBILE-MENU */}

        </div>
      </div>
    </header>
  )
}

export default Navbar
