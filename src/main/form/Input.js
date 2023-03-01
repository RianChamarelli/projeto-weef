import React from 'react';

const Input = ({ type, placeHolder, name, ...props }) => {
  return (
    <>
      <input type={type} placeHolder={placeHolder} name={name} {...props} />
    </>
  );
};

export default Input;
