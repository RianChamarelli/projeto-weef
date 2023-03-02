import React from 'react';
import { BiPhone } from 'react-icons/bi';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="container">
      <div className="nav">
        <h1 className="nav__text--slogan">TESTE FRONT</h1>
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
      </div>
    </nav>
  );
};

export default Nav;
