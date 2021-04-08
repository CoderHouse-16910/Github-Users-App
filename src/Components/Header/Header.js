import React from 'react';
import './Header.css';
// Imagen
import image from '../Header/github-logo-white.png';

function Header() {
  return (
    <div className="Header">
      <h2>
        <img src={image} alt="logo-github" width="200px" />
      </h2>
      <h1>API GITHUB</h1>
    </div>
  );
}

export default Header;
