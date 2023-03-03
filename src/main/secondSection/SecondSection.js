import React from 'react';
import Carousel from './carousel/Carousel';
import './SecondSection.css';

const SecondSection = () => {
  return (
    <section className="depositions">
      <div className="depositions__text">
        <span className="depositions__text--span">DEPOIMENTOS</span>
        <h3 className="deposition Scrollbar,s__text--title">
          Congue viverra quam dui.
        </h3>
        <p className="depositions__text--subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nunc.
        </p>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </section>
  );
};

export default SecondSection;
