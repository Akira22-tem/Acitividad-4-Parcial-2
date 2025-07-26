import React from 'react';

function Enlace({
  urlDestino,
  textoEnlace,
  estilosEnlace = '',
  ventana = '_self',
}) {
  return (
    <a
      href={urlDestino}
      className={`text-decoration-none fw-bold ${estilosEnlace}`}
      target={ventana}
      style={{
        color: '#dc3545',
        transition: 'all 0.3s ease',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
      }}
      onMouseOver={(e) => (e.target.style.color = '#0d6efd')}
      onMouseOut={(e) => (e.target.style.color = '#dc3545')}
    >
      🔗 {textoEnlace}
    </a>
  );
}

export default Enlace;
