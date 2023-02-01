import React from 'react'
import '../css/boton.css';

function Boton(props) {

    const esOperardor=valor=>
    {
      return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }


    return(
      <div className={`Boton-contenedor ${esOperardor(props.children) ? 'operador' :''}`.trimEnd()} onClick={ () => props.manejarClick(props.children)}>
        {props.children}
      </div>
    );    
}
export default Boton; 