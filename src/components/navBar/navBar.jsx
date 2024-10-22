import { useState } from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburguerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='Header'>
      <header>
        <nav className={`nav ${isActive ? 'active' : ''}`}>
          <Link to='/' >
            <img className="logo" src="/logoC.png" alt="Logo" />
          </Link>
          <button className="hamburguer" onClick={handleHamburguerClick}></button>
          <ul className="nav-list">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutUS'>About Us</Link></li>
            <li><Link to='/ourServices'>Our Services</Link></li>
            <li><Link to='/contactUS'>Contat Us</Link></li>
            <li><Link to='/joinOurTeam'>Join Our Team</Link></li>
            <li><Link to='/privacyPolicy'>Privacy Policy</Link></li>
            <li><Link to='/1234'>Login Adm</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;