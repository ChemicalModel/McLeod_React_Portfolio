import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <header>
      <h1>Michael McLeod</h1>
      <Navigation activeSection={activeSection} handleNavigation={handleNavigation} />
    </header>
  );
};

export default Header;
