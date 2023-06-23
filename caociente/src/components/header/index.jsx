import React from 'react';
import './style.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src='/imagens/logo.jpg' alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">Defesa Animal Municipal de São Carlos</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Fotos</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Quero adotar</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contato</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Animais</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
