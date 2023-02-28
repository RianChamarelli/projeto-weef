import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="container">
      <nav id="" className="nav__container">
        <p className="text--slogan">TESTE FRONT</p>
        <div className="nav__list">
          <ul className="nav__itens">
            <li>Como funciona</li>
            <li>Vanatagens</li>
            <li>Depoimentos</li>
            <li>Duvidas</li>
          </ul>
          <div className="nav__phone">
            <p>Icone</p>
            <p>99 9999-9999</p>
          </div>
        </div>
        <button>Lorem ipsum</button>
      </nav>
    </header>
  );
};

export default Header;
