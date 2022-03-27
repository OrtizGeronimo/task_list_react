import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Contacto from '../model/Contacto'
import "../styles/contact.css"

const ComponentB = ({contacto}) => {
  
const [state, setState] = useState(contacto.conectado); 
    
const contactOnLine = () => {
    contacto.conectado = !contacto.conectado;
    setState(!state);
    
}  

return (
    <div>
        <h1>Contacto: {contacto.nombre + " " + contacto.apellido}</h1>
        <p>Email: {contacto.email}</p>
        <div className='estadoContacto'>
            <p>Estado: <b>{contacto.conectado ? " Contacto en línea" : "Contacto no disponible"}</b></p>
            <button onClick={contactOnLine}>Cambiar estado</button>
        </div>
    </div>
  )
}

ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponentB