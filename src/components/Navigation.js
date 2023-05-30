import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ activeSection, handleNavigation }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavigation('about')}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={activeSection === 'portfolio' ? 'active' : ''}
            onClick={() => handleNavigation('portfolio')}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={activeSection === 'resume' ? 'active' : ''}
            onClick={() => handleNavigation('resume')}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
