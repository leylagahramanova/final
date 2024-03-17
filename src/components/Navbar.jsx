import React, { useEffect } from 'react';
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    const mobileMenu = () => {
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__menu');
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      document.body.style.overflowX = menu.classList.contains('is-active') ? 'hidden' : 'auto';
    };

    const menu = document.querySelector('#mobile-menu');
    menu.addEventListener('click', mobileMenu);

    return () => {
      menu.removeEventListener('click', mobileMenu);
    };
  }, []);


  return (
    <nav className="navbar">
    <div className="navbar__container">
      <div id="navbar__logo">
        <div className="logo-holder logo-7" id="logo">
          <img className="flower" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar__toggle" id="mobile-menu">
        <span className="bar"></span> <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="navbar__menu">
      <li className='navbar__item'>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/explore_our_beans" activeClassName="active">Explore Our Beans</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/contact_us" activeClassName="active">Contact Us</NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/order_now" activeClassName="active">Order Now</NavLink>
        </li>
 

      </ul>
    </div>
  </nav>
  );
}


export default Navbar;
