import React from 'react';

function Titulo({
  textoTitulo,
  nivelImportancia = 1,
  estilosPersonalizados = '',
}) {
  const EtiquetaTitulo = `h${nivelImportancia}`;

  return React.createElement(
    EtiquetaTitulo,
    {
      className: `text-primary ${estilosPersonalizados}`,
    },
    textoTitulo
  );
}

export default Titulo;
