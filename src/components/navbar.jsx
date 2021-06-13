import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const hideMenu = () => setIsMenuVisible(false);
  const toggleMenuVisibility = () => setIsMenuVisible((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="brand-title">Wiesław Transport</div>
      <button
        type="button"
        className="toggle-button"
        aria-label="toggle navbar"
        onClick={toggleMenuVisibility}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <div
        className={['navbar-links', isMenuVisible ? 'active' : ''].join(' ')}
      >
        <ul>
          <li>
            <a href="#start" onClick={hideMenu} className="nav-link">
              Start
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={hideMenu} className="nav-link">
              O nas
            </a>
          </li>
          <li>
            <a href="#services" onClick={hideMenu} className="nav-link">
              Usługi
            </a>
          </li>
          <li>
            <a href="#contact" onClick={hideMenu} className="nav-link">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
