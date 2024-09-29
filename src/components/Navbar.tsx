import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Kiki</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/home" className="nav__link active-link">Home</Link></li>
            <li className="nav__item"><Link to="/about" className="nav__link">About Me</Link></li>
            <li className="nav__item"><Link to="/skills" className="nav__link">Skills</Link></li>
            <li className="nav__item"><Link to="/projects" className="nav__link">Projects</Link></li>
            <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
