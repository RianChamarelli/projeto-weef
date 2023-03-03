import React from 'react';
import Form from './form/Form';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__text">
            <h2 className="header__title">
              Lorem ipsum sit amet dolor lorem ipsum sit amet...
            </h2>
            <p className="header__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut.
            </p>
            <a className="header__link" href="#">
              Saiba mais
            </a>
          </div>
          <div className="header__form">
            <Form />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
