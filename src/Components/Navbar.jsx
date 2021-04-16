import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';
export default function Navbar() {

  const [nav, setnav] = useState();

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav "}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=""/>
      </Link>
      <input type="checkbox" className='menu-btn' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn' >
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='main' smooth={true} duration={2000}>Headeer</Link></li>
        <li><Link to='products' smooth={true} duration={2000}>Products</Link></li>
        <li><Link to='about' smooth={true} duration={2000}>About</Link></li>
        <li><Link to='contact' smooth={true} duration={2000}>Contact</Link></li>
      </ul>
    </nav>
  )
}

