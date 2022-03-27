import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Contacto from '../model/Contacto'
import "../styles/contact.css"

const ComponentB = ({contacto}) => {
  
const [state, setState] = useState(contacto); 
    
const contactOnLine = () => {
    setState({
        nombre: state.nombre,
        apellido: state.apellido,
        email: state.email,
        conectado: !state.conectado
    })
    
}  

return (
    <div>
        <h1>Contacto: {state.nombre + " " + state.apellido}</h1>
        <p>Email: {state.email}</p>
        <div className='estadoContacto'>
            <p>Estado: <b>{state.conectado ? " Contacto en línea" : "Contacto no disponible"}</b></p>
            <button onClick={contactOnLine}>Cambiar estado</button>
        </div>
    </div>
  )
}

ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponentB