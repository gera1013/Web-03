import React, { useState } from 'react';
import { connect } from 'react-redux'

import './styles.css';
import * as actions from '../../actions/baby';
import FilterLink from '../FilterLink'

const AddBabyForm = ({ onSend }) => {
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

export default connect(
    undefined,
    dispatch => ({
        onSend(name, lastName, age){
            if(name && lastName && age) {
                dispatch(actions.addBaby(name, lastName, age));
            }
            else {
                console.log("Incomplete")
            }
        }
    })
)(AddBabyForm);