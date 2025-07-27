import React from 'react';
import Input from './Input';

function InputCorreo(propiedades) {
  return <Input tipoInput="email" {...propiedades} />;
}

export default InputCorreo;
