import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar">
    <Link to='/'>
      <div className="navbar-left">
        <img src='/imagens/logo.jpg' alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">Defesa Animal Municipal de São Carlos</span>
      </div>
    </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/Fotos" className="navbar-link">Fotos</Link>
        </li>
        <li className="navbar-item">
          <a href="/Quizz" className="navbar-link">Quero adotar</a>
        </li>
        <li className="navbar-item">
          <a href="#contato" className="navbar-link">Contato</a>
        </li>
        <li className="navbar-item">
          <a href="/AnimalList" className="navbar-link">Animais</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
