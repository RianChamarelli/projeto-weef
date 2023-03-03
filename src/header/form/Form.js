import React from 'react';
import Input from './Input';
import './Form.css';

const Form = () => {
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formSelect, setFormSelect] = React.useState('');
  const [formArea, setFormArea] = React.useState('');

  return (
    <div className="form__main">
      <p className="form__title">Ornare ante sapien risus nulla.</p>
      <form className="form">
        <Input
          className="form__input"
          type="text"
          placeHolder="Nome"
          name="name"
          value={formName}
          onChange={(event) => setFormName(event.target.value)}
        />

        <Input
          className="form__input"
          type="email"
          placeHolder="E-mail"
          name="e-mail"
          value={formEmail}
          onChange={(event) => setFormEmail(event.target.value)}
        />

        <select
          className="form__input"
          name="select"
          value={formSelect}
          onChange={(event) => setFormSelect(event.target.value)}
        ></select>

        <textarea
          className="form__input"
          name="message"
          rows="4"
          placeholder="Mensagem"
          value={formArea}
          onChange={(event) => setFormArea(event.target.value)}
        ></textarea>
      </form>
      <button className="form__button">Enviar</button>
      <p className="form__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        pellentesque facilisis id pulvinar eu mi id. Euismod.
      </p>
    </div>
  );
};

export default Form;
