import React from 'react';

function Tabla({ encabezados, datosTabla, estiloTabla = '' }) {
  return (
    <div className="table-responsive">
      <table
        className={`table table-striped table-hover border-dark ${estiloTabla}`}
      >
        <thead className="table-dark">
          <tr>
            {encabezados.map((encabezado, indice) => (
              <th key={indice} scope="col" className="text-white fw-bold">
                🏆 {encabezado}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datosTabla.map((fila, indiceFila) => (
            <tr key={indiceFila} className="table-light">
              {fila.map((celda, indiceCelda) => (
                <td key={indiceCelda} className="fw-semibold text-dark">
                  {indiceCelda === 0 ? `🥊 ${celda}` : celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
