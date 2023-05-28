import './style.css';
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselLimpieza from '../../Imagenes/carouselLimpieza.jpg';
import carouselAlimento from '../../Imagenes/carouselAlimento.jpg';
import carouselSanteria from '../../Imagenes/carouselSanteria.jpg';
function Categorias() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }
    return (
        <div className='contenedor-hero'>
            <div className='categorias'>
                <a href='#'>CATEGORÍAS</a>
                <a href='#'>QUÍMICOS</a>
                <a href='#'>ACCES. LIMPIEZA</a>
                <a href='#'>ALIM. MASCOTAS</a>
                <a href='#'>PULGUICIDA</a>
                <a href='#'>SANTERÍA</a>
                <a href='#'>JARDINERÍA</a>             
                <a href='#'>PILETAS</a>
            </div>        
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselLimpieza}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>ROSALIM</h2>
                    <h1>LIMPIEZA</h1>
                    <h1>Y DESINFECCIÓN</h1>
                    <p>Todo para el hogar.</p>
                    <button className='carousel-btn'>VER</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselAlimento}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2>ROSALIM</h2>
                    <h1>ALIMENTOS</h1>
                    <h1>BALANCEADOS</h1>
                    <p>Todo para su mascota.</p>
                    <button className='carousel-btn'>VER</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carouselSanteria}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2>ROSALIM</h2>
                    <h1>SANTERÍA</h1>
                    <p>Armonía del hogar.</p>
                    <button className='carousel-btn'>VER</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>     
        </div>
    )
}
export {Categorias};