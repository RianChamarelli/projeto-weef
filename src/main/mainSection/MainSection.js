import React from 'react';
import Form from '../form/Form';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="container">
      <div className="main--section__container">
        <div className="main--section__text">
          <p className="main--section__title">
            Lorem ipsum sit amet dolor lorem ipsum sit amet...
          </p>
          <p className="main--section__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut.
          </p>
          <a className="main--section__link" href="#">
            Saiba mais
          </a>
        </div>
        <div className="main--section__form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
