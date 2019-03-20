import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => (
  <div>
    <nav className="transparent z-depth-0">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo black-text">Inker.ai</Link>
        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/login" className="black-text">Login</Link></li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><Link to="/login" className="sidenav-close">Login</Link></li>
    </ul>
  </div>
);

export default NavComponent;
