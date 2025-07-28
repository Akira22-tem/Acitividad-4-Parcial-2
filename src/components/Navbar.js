import React from 'react';

function Navbar({ seccionActiva, cambiarSeccion }) {
  const paginas = [
    { id: 'inicio', nombre: 'Inicio' },
    { id: 'espiritu', nombre: 'Espiritu' },
    { id: 'tecnicas', nombre: 'Tecnicas' },
    { id: 'ranking', nombre: 'Ranking' },
    { id: 'inscripcion', nombre: 'Inscripcion' },
    { id: 'entrenamiento', nombre: 'Entrenamiento' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => cambiarSeccion('inicio')}
          style={{ color: '#ffffff', border: 'none' }}
        >
          KBG-ACADEMIA DE BOXEO
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {paginas.slice(1).map((pagina) => (
              <li key={pagina.id} className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => cambiarSeccion(pagina.id)}
                  style={{
                    color: seccionActiva === pagina.id ? '#ffc107' : '#ffffff',
                    border: 'none',
                  }}
                >
                  {pagina.nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
