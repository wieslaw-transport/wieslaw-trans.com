import React from 'react';
import '../styles/navbar.css';

type Link = {
  to: string;
  text: string;
};

type Props = {
  title: string;
  links: Link[];
};

export default function Navbar({ title, links }: Props) {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const hideMenu = () => setIsMenuVisible(false);
  const toggleMenuVisibility = () => setIsMenuVisible(prev => !prev);

  return (
    <nav className="navbar">
      <div className="brand-title">{title}</div>
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
          {links.map(({ to, text }) => (
            <li key={text}>
              <a href={to} onClick={hideMenu} className="nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
