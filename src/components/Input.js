import React from 'react';

function Input({
  tipoInput = 'text',
  placeholderTexto = '',
  valorInput,
  alCambiarInput,
  estilosInput = '',
  esRequerido = false,
  longitudMin,
  longitudMax,
  patronInput,
  nombreInput,
  idInput,
}) {
  return (
    <input
      type={tipoInput}
      placeholder={placeholderTexto}
      value={valorInput}
      onChange={alCambiarInput}
      className={`form-control ${estilosInput}`}
      required={esRequerido}
      minLength={longitudMin}
      maxLength={longitudMax}
      pattern={patronInput}
      name={nombreInput}
      id={idInput}
    />
  );
}

export default Input;
