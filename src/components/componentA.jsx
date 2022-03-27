import React from "react";
import PropTypes from "prop-types";
import Contacto from "../model/Contacto";
import ComponentB from "./componentB";

const ComponentA = () => {

    const contacto = new Contacto("John", "Doe", "johndoe@gmail.com");
    const contacto2 = new Contacto("Juan", "Perez", "juanperez@gmail.com");

    return(
        <div>
            <h1>Contactos</h1>
            <ComponentB contacto={contacto}></ComponentB>
        </div>
    );

};

ComponentA.propTypes = {

};

export default ComponentA;