import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__top">
            <p className="footer__slogan">TESTE FRONT</p>
            <p className="footer__phrase">Lorem ipsum sit amet</p>
            <div className="footer__phone">
              <p className="footer__phone--phrase">Fale conosco</p>
              <p className="footer__phone--number">99 9999-9999</p>
            </div>
          </div>
          <div className="footer__bot">
            <p className="footer__copyright">
              Teste front @ 2020 | Todos os direitos reservados
            </p>
            <ul className="footer__list">
              <li className="footer__list--itens">
                <a>
                  <FaFacebookF />
                </a>
              </li>
              <li className="footer__list--itens">
                <a>
                  <FaInstagram />
                </a>
              </li>
              <li className="footer__list--itens">
                <a>
                  <FaYoutube />
                </a>
              </li>
              <li className="footer__list--itens">
                <a>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p className="footer__privacity">
              Plotica de privacidade | Termos de uso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
