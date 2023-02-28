import React from 'react';

const Footer = () => {
  return (
    <footer className="container">
      <div className="algo__container">
        <p>TESTE FRONT</p>
        <p>Lorem ipsum sit amet</p>
        <div>
          <p>Fale conosco</p>
          <p>99 9999-9999</p>
        </div>
      </div>
      <div className="">
        <p>Teste front@ 2020 | Todos os direitos reservados</p>
        <ul>
          <li>
            <a>Icone Facebook</a>
          </li>
          <li>
            <a>Icone Intagram</a>
          </li>
          <li>
            <a>Icone Youtube</a>
          </li>
          <li>
            <a>Icone Linkedin</a>
          </li>
        </ul>
        <p>Plotica de privacidade | Termos de uso</p>
      </div>
    </footer>
  );
};

export default Footer;
