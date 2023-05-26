import './App.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import {AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import logo from '../../Imagenes/logo.jpg'

function App() {
  return (
    <header className="app-header" id='inicio'>
      <div className="primer-fila">
        <a href='https://wa.link/yhopbp' target='_BLANK'>rosalim.limpieza@hotmail.com | WhatsApp: 341-5841451</a>
        <div className='primer-fila-iconos'>
        <a href='https://www.facebook.com/profile.php?id=100023430894463' target='_BLANK'><FaFacebookF/></a>
        <a href='https://www.instagram.com/rosalimlimpieza/?hl=es' target='_BLANK'><FaInstagram/></a>
        </div>
      </div>
      <div className="segunda-fila">
        <img src={logo} alt='logo'/>
        <div className='login'>
          <a href='#'>INICIAR SESIÓN</a>
          <a href='#'><AiOutlineSearch className='segunda-fila-iconos' /></a>
          <a href='#'><AiOutlineHeart className='segunda-fila-iconos'/></a>
        </div>
      </div>
      <div className="tercer-fila">
        <a href='#inicio'>HOME</a>
        <a href='#'>PRODUCTOS</a>
        <a href='#promociones'>PROMOCIONES</a>
        <a href='#'>NOSOTROS</a>
        <a href='#'>CONTACTO</a>
      </div>
    </header>
  );
}

export default App;
