import React from 'react';
import BackArrow from './BackArrow';

const Header = ({ isBackArrow }) => {
  return (
    <header>
      <div>{isBackArrow && <BackArrow />}</div>
      <div>
        <h1>Dictionair</h1>
        <h4>by VoyTech</h4>
      </div>
      <div>
        <button>
          <h1>Statystyki</h1>
          <h4>w</h4>
        </button>
      </div>
    </header>
  );
};

export default Header;
