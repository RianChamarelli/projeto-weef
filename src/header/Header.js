import React from 'react';
import { BiPhone } from 'react-icons/bi';
import './Header.css';

const Header = () => {
  return (
    <header className="container">
      <nav id="" className="nav__container">
        <h1 className="text--slogan">TESTE FRONT</h1>
        <div className="nav__options">
          <ul className="nav__list">
            <li className="nav__itens">Como funciona</li>
            <li className="nav__itens">Vantagens</li>
            <li className="nav__itens">Depoimentos</li>
            <li className="nav__itens">Dúvidas</li>
          </ul>
          <div className="nav__phone">
            <p className="nav__icone--phone">
              <BiPhone />
            </p>
            <p className="nav__phone--number">99 9999-9999</p>
          </div>
          <button className="nav__button">Lorem ipsum</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
