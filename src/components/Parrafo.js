import React from 'react';

function Parrafo({ contenidoParrafo, estilosExtra = '' }) {
  return <p className={estilosExtra}>{contenidoParrafo}</p>;
}

export default Parrafo;
