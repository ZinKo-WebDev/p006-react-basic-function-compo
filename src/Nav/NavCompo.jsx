import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logoimage from '../images/logo.png'
import './NavCompo.css'
const NavCompo = () => {
  return (
    <div className='navDiv'>
      <div className="logo">
        <img className='logoimage' src={logoimage} alt="logoimage" />
      </div>
      <div className="navLi">
        <li><a href="#">Home</a></li>
        <li><a href="#">Contant</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">LogIn</a></li>
        
      </div>
      <div className="burger">
      <GiHamburgerMenu />
      </div>
    </div>
  )
}

export default NavCompo