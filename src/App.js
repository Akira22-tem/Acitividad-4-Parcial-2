import React, { useState } from 'react';

// Importar los componentes que hice
import Navbar from './components/Navbar';
import Imagen from './components/Imagen';
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Enlace from './components/Enlace';
import Lista from './components/Lista';
import Tabla from './components/Tabla';
import Formulario from './components/Formulario';
import Boton from './components/Boton';
import InputTexto from './components/InputTexto';
import InputContrasena from './components/InputContrasena';
import InputCorreo from './components/InputCorreo';
import InputTelefono from './components/InputTelefono';
import InputURL from './components/InputURL';
import InputBusqueda from './components/InputBusqueda';

function App() {
  // Controlar que pagina mostrar
  const [paginaActual, setPaginaActual] = useState('inicio');

  // Cambiar de pagina
  const irAPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div>
      <Navbar seccionActiva={paginaActual} cambiarSeccion={irAPagina} />

      <div
        className="container py-4"
        style={{ backgroundColor: 'rgb(48, 48, 46)', minHeight: '100vh' }}
      >
        {/* Aquí irán las páginas */}
      </div>
    </div>
  );
}

export default App;
