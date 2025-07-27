function Lista({ elementosLista, estilosLista = '', tipoListado = 'ul' }) {
  const EtiquetaListado = tipoListado;
  return (
    <EtiquetaListado className={`list-group ${estilosLista}`}>
      {elementosLista.map((elemento, indice) => (
        <li
          key={indice}
          className="list-group-item d-flex align-items-center bg-light border-secondary"
        >
          <span className="badge bg-danger rounded-pill me-2">
            {indice + 1}
          </span>
          <span className="fw-semibold text-dark">🥊 {elemento}</span>
        </li>
      ))}
    </EtiquetaListado>
  );
}

export default Lista;
