import React from 'react';
import Input from './Input';

function InputTelefono(propiedades) {
  return <Input tipoInput="tel" {...propiedades} />;
}

export default InputTelefono;
