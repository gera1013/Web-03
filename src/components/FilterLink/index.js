import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente FilterLink que implementa el NavLink de react-router-dom
// Se pasa a elementos que hacen posible el cambio de pantalla
const FilterLink = ({ filter, children }) => (
    <NavLink
        to={filter}
    >
        {children}
    </NavLink>
);

// Se exporta para poder ser usado por otros componentes
export default FilterLink;