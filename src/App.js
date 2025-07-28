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

  // Datos para el formulario
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    website: '',
    buscar: '',
  });

  const [errores, setErrores] = useState({});

  // Info de la tabla
  const columnas = ['ID', 'Nombre', 'Email', 'Puntos'];
  const filas = [
    [1, 'Ippo Makunouchi', 'ippo@boxeo.com', 89],
    [2, 'Takamura Mamoru', 'takamura@boxeo.com', 156],
    [3, 'Miyata Ichiro', 'miyata@boxeo.com', 67],
    [4, 'Sendo Takeshi', 'sendo@boxeo.com', 78],
  ];

  const listaTecnicas = [
    'Jab directo',
    'Cross de poder',
    'Hook lateral',
    'Uppercut',
    'Esquiva lateral',
    'Bloqueo alto',
  ];

  return (
    <div>
      <p>App en construcción...</p>
    </div>
  );
}

export default App;
