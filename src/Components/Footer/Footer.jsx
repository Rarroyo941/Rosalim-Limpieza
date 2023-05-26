import './style.css';
import {  AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../../Imagenes/logo.jpg'
function Footer() {
    return( 
        <footer className='contenedor-footer'>
            <div className='redes'>
                <h4>REDES SOCIALES</h4>
                <ul>
                    <li><a href='https://wa.link/yhopbp' target='_BLANK'><IoLogoWhatsapp className='redes-icon'/> WhatsApp</a></li>
                    <li><a href='https://www.instagram.com/rosalimlimpieza/?hl=es' target='_BLANK'><AiFillInstagram className='redes-icon'/> Instagram</a></li>
                    <li><a href='https://www.facebook.com/profile.php?id=100023430894463&paipv=0&eav=AfYl4W2PxnvyIZo7ZwmeXHV5S_1dnYBIbZSKfKAgBxi5Bjm93ijNfy5JCHRCQIn68Zo' target='_BLANK'><AiFillFacebook className='redes-icon'/> Facebook</a></li>
                </ul>
                <img src={logo} alt="logo"/>
            </div>
            <div className='contacto'>
                <h4>CONTACTO</h4>
                <h5>Dirección</h5>
                <a href="https://www.google.com/maps/place/Rosalim+Limpieza/@-32.9561712,-60.6721106,15z/data=!4m2!3m1!1s0x0:0xabd24170a4172b40?sa=X&ved=2ahUKEwiwo9b8jPb-AhUPQ7gEHbRPDZQQ_BJ6BAhjEAk" target='_BLANK'><p>Avenida Presidente Perón 3298, Rosario.</p></a>
                <h5>Horarios de atención</h5>
                <p>Lunes a viernes de 9 a 13 y de 16 a 19 hs.</p>
                <p>Sábados de 9 a 13 hs.</p>
                <h5>E-mail</h5>
                <a href="mailto:rosalim.limpieza@hotmail.com" target='_BLANK'><p>rosalim.rosario@hotmail.com</p></a>
                <h5>WhatsApp</h5>
                <a href='https://wa.link/yhopbp' target='_BLANK'><p>341-5841451</p></a>
            </div>
            <div className='enlaces'>
                <h4>MAPA DEL SITIO</h4>
                <a href='#inicio'>INICIO</a>
                <a href='#promociones'>PROMOCIONES</a>
                <a href='#'>PRODUCTOS</a>
                <a href='#'>NOSOTROS</a>
                <a href='#'>CONTACTO</a>
            </div>
        </footer>
    )
}
export default Footer