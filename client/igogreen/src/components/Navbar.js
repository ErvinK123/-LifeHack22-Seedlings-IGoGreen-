import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar2'>
        <Link to='/' className='navbar-logo2' onClick={closeMobileMenu}>
          IGoGreen
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon2' onClick={handleClick}>
          <i className={click ? 'fas fa-times2' : 'fas fa-bars2'} />
        </div>
        <ul className={click ? 'nav-menu2 active2' : 'nav-menu2'}>
          <li className='nav-item2'>
            <Link
              to='/products'
              className='nav-links2'
              onClick={closeMobileMenu}
            >
              Rewards
            </Link>
          </li>
          <li className='nav-item2'>
            <Link
              to='/contact-us'
              className='nav-links2'
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile2'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
