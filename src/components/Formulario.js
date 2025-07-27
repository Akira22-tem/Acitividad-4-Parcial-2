import React from 'react';

function Formulario({ children, alEnviarFormulario, estilosFormulario = '' }) {
  return (
    <form
      onSubmit={alEnviarFormulario}
      className={`needs-validation p-4 bg-white border border-dark rounded ${estilosFormulario}`}
      noValidate
      style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15)', borderWidth: '2px' }}
    >
      {children}
    </form>
  );
}

export default Formulario;
