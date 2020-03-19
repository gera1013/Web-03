import React, { useState } from 'react';
import { connect } from 'react-redux'

import './styles.css';
import * as actions from '../../actions/baby';
import FilterLink from '../FilterLink'

// Dummy component que recibe unicamente onSend como parametro
const AddBabyForm = ({ onSend }) => {
    // Se utiliza el useState para para los valores de los campos de entrada
    const [name, changeName] = useState('');
    const [lastName, changeLastName] = useState('');
    const [age, changeAge] = useState('');
    return (
        <div className="back">
            <div className="wrapper">
                <h1 className="header">
                    Agregar Bebé
                </h1>
                <input
                    className="input"
                    type="text" 
                    placeholder="Nombres" 
                    value={name}
                    onChange={e => changeName(e.target.value)}
                />
                <input
                    className="input"
                    type="text" 
                    placeholder="Apellidos" 
                    value={lastName}
                    onChange={e => changeLastName(e.target.value)}
                />
                <input 
                    className="input"
                    type="text" 
                    placeholder="Edad" 
                    value={age}
                    onChange={e => changeAge(e.target.value)}
                />
                <button className="button" type="submit" onClick={() => onSend(name, lastName, age)}>
                    <FilterLink filter={name && lastName && age ? '/select' : ''}>{'Agregar'}</FilterLink>
                </button>
            </div>
        </div>
    );
}

// Funcion connect para el dummy component, especifica el metodo onSend
// onSend recibe la informacion de los campos para pasarla al dispatch
// Dispatch recibe la informacion de los campos, crea un nuevo bebe y lo agrega al estado
export default connect(
    undefined,
    dispatch => ({
        onSend(name, lastName, age){
            if(name && lastName && age) {
                dispatch(actions.addBaby(name, lastName, age));
            }
            else {
                alert("Debe llenar todos los campos")
            }
        }
    })
)(AddBabyForm);