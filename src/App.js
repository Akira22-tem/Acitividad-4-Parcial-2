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

  // Actualizar los datos del form
  const cambiarDato = (campo) => (evento) => {
    setDatosUsuario((prev) => ({
      ...prev,
      [campo]: evento.target.value,
    }));

    if (errores[campo]) {
      setErrores((prev) => ({
        ...prev,
        [campo]: '',
      }));
    }
  };

  // Validar el formulario
  const validarForm = () => {
    const nuevosErrores = {};

    if (!datosUsuario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }

    if (!datosUsuario.email.trim()) {
      nuevosErrores.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(datosUsuario.email)) {
      nuevosErrores.email = 'Email no valido';
    }

    if (!datosUsuario.password.trim()) {
      nuevosErrores.password = 'La contraseña es requerida';
    } else if (datosUsuario.password.length < 6) {
      nuevosErrores.password = 'Minimo 6 caracteres';
    }

    return nuevosErrores;
  };

  // Enviar formulario
  const enviarFormulario = (evento) => {
    evento.preventDefault();
    const erroresForm = validarForm();

    if (Object.keys(erroresForm).length === 0) {
      alert('Formulario enviado correctamente!');
      setDatosUsuario({
        nombre: '',
        email: '',
        password: '',
        telefono: '',
        website: '',
        buscar: '',
      });
    } else {
      setErrores(erroresForm);
    }
  };

  const clickBoton = () => {
    alert('Boton clickeado!');
  };

  return (
    <div>
      <Navbar seccionActiva={paginaActual} cambiarSeccion={irAPagina} />

      <div
        className="container py-4"
        style={{ backgroundColor: 'rgb(48, 48, 46)', minHeight: '100vh' }}
      >
        {/* Pagina de inicio */}
        {paginaActual === 'inicio' && (
          <div className="bg-white p-4 rounded shadow">
            <Titulo
              textoTitulo="KBG (ACADEMIA DE BOXEO)"
              nivelImportancia={1}
            />
            <Parrafo contenidoParrafo="Bienvenido a Kamogawa BOXING GYM, nuestra academia de boxeo. Aqui puedes aprender las mejores tecnicas de combate." />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
