import React from 'react';
import '../styles/navbar.css';

type Props = {
  title: string;
};

const links = [
  {
    text: 'Start',
    to: '/',
  },
  {
    text: 'Usługi',
    to: 'uslugi',
  },
  {
    text: 'O nas',
    to: 'o-nas',
  },
  {
    text: 'Kontakt',
    to: 'kontakt',
  },
];

export default function Navbar({ title }: Props) {
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
