import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import oferta1 from '../../Imagenes/bonelo.jpg'
import oferta2 from '../../Imagenes/dogchowadultogrande.jpg'
import oferta3 from '../../Imagenes/gatiadulto.jpg'
function Promociones() {
    return (
        <section className='promociones' id='promociones'>
            <h2>PROMOCIONES</h2>
            <div className='cards-promociones-container'>
                <Card style={{ width: '20rem' }} className='card-promociones'>
                <Card.Img variant="top" src={oferta1} />
                <Card.Body>
                    <Card.Title>oferta1</Card.Title>
                    <Card.Text className='precio-sin-dto'>Precio viejo</Card.Text>
                    <Card.Text className='precio-con-dto'>Precio oferta</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className='card-promociones'>
                <Card.Img variant="top" src={oferta2} />
                <Card.Body>
                    <Card.Title>oferta2</Card.Title>
                    <Card.Text className='precio-sin-dto'>Precio viejo</Card.Text>
                    <Card.Text className='precio-con-dto'>Precio oferta</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className='card-promociones'>
                <Card.Img variant="top" src={oferta3} />
                <Card.Body>
                    <Card.Title>oferta3</Card.Title>
                    <Card.Text className='precio-sin-dto'>Precio viejo</Card.Text>
                    <Card.Text className='precio-con-dto'>Precio oferta</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
            </div>
            </section>
  );
}
export default Promociones