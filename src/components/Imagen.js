import React from 'react';

function Imagen({
  fuenteImagen,
  descripcionImagen,
  anchoImagen,
  altoImagen,
  estilosAdicionales = '',
}) {
  return (
    <img
      src={fuenteImagen}
      alt={descripcionImagen}
      width={anchoImagen}
      height={altoImagen}
      className={`img-fluid border border-dark shadow-lg ${estilosAdicionales}`}
      style={{ borderRadius: '8px', borderWidth: '3px' }}
    />
  );
}

export default Imagen;
