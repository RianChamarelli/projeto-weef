import React from 'react';

const Input = ({ type, placeHolder, name, ...props }) => {
  return (
    <>
      <input type={type} placeholder={placeHolder} name={name} {...props} />
    </>
  );
};

export default Input;
