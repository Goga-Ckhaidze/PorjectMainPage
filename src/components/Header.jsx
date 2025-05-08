import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section className="HeaderSection">
      <div className="fullbg">
        <div className="container-1500">
          <div className="Header">
            <div className="headerFlex">
              <div className="Logo">
                <Link to="/">
                  <img src="/images/automaxxx.png" className="logoImage" alt="Logo" />
                </Link>
              </div>

              <button className="toggle-menu-btn" onClick={toggleMenu}>
                {menuOpen ? 'Close' : 'Menu'}
              </button>

              <div className={`Text ${menuOpen ? 'show' : ''}`}>
              <div className="l"></div>
                <Link to="/">HomePage</Link>
                <div className="line"></div>
                <div className="l"></div>
                <div className="dropdown">
                  <span className="dropdown-toggle">Industries ▼</span>
                  <div className="dropdown-menu">
                    <a href="#">Page 1</a>
                    <a href="#">Page 2</a>
                    <a href="#">Page 3</a>
                  </div>
                </div>
                <div className="line"></div>
                <div className="l"></div>
                <a href="/">About US</a>
                <div className="line"></div>
                <div className="l"></div>
                <a href="/">Contact US</a>
                <div className="line"></div>
                <div className="l"></div>
                <a href="/">Gallery</a>
                <div className="l"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

