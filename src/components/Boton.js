import React from 'react';

function Boton({
  textoBoton,
  alClickear,
  tipoBoton = 'button',
  estilosBoton = '',
  colorBoton = 'primary',
}) {
  return (
    <button
      type={tipoBoton}
      onClick={alClickear}
      className={`btn btn-${colorBoton} ${estilosBoton}`}
    >
      {textoBoton}
    </button>
  );
}

export default Boton;
