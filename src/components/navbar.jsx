import React from 'react';

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const hide = () => setShow(false);
  const toggle = () => setShow((prev) => !prev);

  return (
    <nav className={`topnav ${show ? 'responsive' : ''}`} id="myTopnav">
      <a href="#start" onClick={hide} className="nav-link">
        Start
      </a>
      <a href="#about-us" onClick={hide} className="nav-link">
        O nas
      </a>
      <a href="#services" onClick={hide} className="nav-link">
        Usługi
      </a>
      <a href="#contact" onClick={hide} className="nav-link">
        Kontakt
      </a>
      <button
        type="button"
        onClick={toggle}
        className="icon"
        id="navigationToggler"
      >
        <svg viewBox="0 0 20 20">
          <path
            d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
              c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
              s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
              c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
          />
        </svg>
      </button>
    </nav>
  );
}
