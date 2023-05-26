import './style.css';
import React from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { MdRecycling } from 'react-icons/md';
import { FaShippingFast} from 'react-icons/fa';
function Compromiso() {
    return (
        <section className='compromiso'>
            <h2>¿Por qué elegir nuestros productos?</h2>
            <div className='contenedor-compromisos'>
                <div className='calidad'>
                    <AiOutlineSafety className='compromiso-iconos' />
                    <h5>SEGURIDAD Y CALIDAD GARANTIZADA</h5>
                    <p>Cumplimos con los requerimientos y expectativas de nuestros clientes.</p>
                </div>
                <div className='reciclado'>
                    <MdRecycling className='compromiso-iconos'/>
                    <h5>COMPROMISO AMBIENTAL</h5>
                    <p>Buenas prácticas para el cuidado del medio ambiente.</p>
                </div>
                <div className='envios'>
                    <FaShippingFast className='compromiso-iconos'/>
                    <h5>ENVÍOS A DOMICILIO</h5>
                </div>
            </div>
        </section>
    )
    }
export default Compromiso