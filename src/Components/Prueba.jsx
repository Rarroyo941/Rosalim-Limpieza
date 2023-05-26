import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './prueba.css';

const Prueba = () => {
         
  //https://rickandmortyapi.com/api/character
  const [personajes, setPersonajes] = useState([])

  useEffect(()=>{
    const obtenerPersonajes = async() => {  
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      const data = response.data.results
      setPersonajes(data)
      
    }
    obtenerPersonajes()
  },[])
  console.log(personajes)
  return (
      <div className='api'>
        {personajes.map((elemento)=>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={elemento.image} />
        <Card.Body>
          <Card.Title>{elemento.name}</Card.Title>
          <Card.Text>
            {elemento.gender}
          </Card.Text>
        </Card.Body>
      </Card>)}
      </div>
  );
};
        
export default Prueba;