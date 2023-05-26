import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Navbar/App';
import Productos from './Components/Productos-cards/Productos';
import Promociones from './Components/Promociones-cards/promociones';
import Compromiso from './Components/Compromiso/Compromiso';
import Categorias from './Components/Categorias-carousel/Categoria';
import Footer from './Components/Footer/Footer';
import Prueba from './Components/Prueba';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Categorias/>
    <Promociones />
    <Productos />
    <Compromiso />
    <Prueba/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

