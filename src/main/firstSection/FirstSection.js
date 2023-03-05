import React from 'react';
import './FirstSection.css';
import Img1 from './Conversation.png';
import { FaCheck } from 'react-icons/fa';

const FirstSection = () => {
  return (
    <section className="vantage">
      <div className="vantage__information">
        <h3 className="vantage__title">
          Urna bibendum posuere urna eu curabitur rhoncus.
        </h3>
        <p className="vantage__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae cursus
          at bibendum mi mi turpis viverra rhoncus.
        </p>
        <ul className="vantage__list">
          <li className="vantage__list--itens">
            <span className="vantage__list__icon">
              <FaCheck />
            </span>
            <p className="vantage__list__text">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </li>
          <li className="vantage__list--itens">
            <span className="vantage__list__icon">
              <FaCheck />
            </span>
            <p className="vantage__list__text">
              adipiscing elit. Proin pellentesque facilisis
            </p>
          </li>
          <li className="vantage__list--itens">
            <span className="vantage__list__icon">
              <FaCheck />
            </span>
            <p className="vantage__list__text">
              id pulvinar eu mi id. Euismod.
            </p>
          </li>
        </ul>
        <button className="vantage__button">id pulvinar eu mi id</button>
      </div>
      <figure className="vantage__img">
        <img src={Img1} alt="Conversa entre duas pessoas" />
      </figure>
    </section>
  );
};

export default FirstSection;
