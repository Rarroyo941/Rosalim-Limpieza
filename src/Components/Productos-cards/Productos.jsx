import './style.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import oferta1 from '../../Imagenes/bonelo.jpg'
import oferta2 from '../../Imagenes/dogchowadultogrande.jpg'
import oferta3 from '../../Imagenes/gatiadulto.jpg'
function Productos() {
    return (
        <section className='productos'>
            <h2>PRODUCTOS</h2>
            <div className='cards-productos-container'>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }} className='cards-productos'>
                <Card.Img variant="top" src={oferta1} className='cards-img'/>
                <Card.Body>
                    <Card.Title>producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
                </Card>

                
                
            </div>
            </section>
  );
}
export default Productos