import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ringPrincipal = ReactDOM.createRoot(document.getElementById('root'));
ringPrincipal.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// para medir el rendimiento como un verdadero campeón
reportWebVitals();
