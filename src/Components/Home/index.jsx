import React from 'react';
import {Categorias} from '../Categorias-carousel/index';
import {Promociones} from '../Promociones-cards/index';
import {Productos} from '../Productos-cards/index';
import {Compromiso} from '../Compromiso/index';

const Home =()=> {
    return(
        <>
            <Categorias/>
            <Promociones />
            <Productos />
            <Compromiso />
        </>
    )
}
export {Home}