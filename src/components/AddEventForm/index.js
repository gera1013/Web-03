import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/event';
import * as selectors from '../../reducers';
import moment from 'moment'

// Dummy component para agregar un evento 
// Recibe el bebé seleccionado en ese momento y el método onCreate 
const AddEventForm = ({ onCreate, selectedBaby}) => {
    // Se utiliza useState para las variables de los campos de entrada de texto
    const [type, changeType] = useState('');
    const [date, changeDate] = useState('');
    const [comments, changeComments] = useState('');
    return(
        <div className="input-container">
            <h1 className="header">Agregar nuevo evento</h1>
            <input 
                className="form__field" 
                placeholder="Tipo" 
                value={type}
                onChange={e => changeType(e.target.value)}
            />
            <input 
                className="form__field" 
                type="date" 
                value={date}
                onChange={e => changeDate(e.target.value)}
            />
		    <form className="form">
                <input 
                    className="form__field" 
                    placeholder="Comentarios" 
                    value={comments} 
                    onChange={e => changeComments(e.target.value)}
                />
            </form>
            <button className="btn btn--primary btn--inside" type="submit" onClick={() => onCreate(type, date, comments, selectedBaby, changeComments, changeDate, changeType)}>
                {'Crear'}
            </button>
        </div>
    );
};

// Funcion connect para el dummy component
export default connect(
    state => ({
        // En las props se pasa el filter, con lo que el componente sabe qué bebé esta seleccionado
        selectedBaby: selectors.getSelectedBaby(state), 
    }),
    dispatch => ({
        //Método onCreate que recibe todos los datos del evento y utiliza el dispatch para crear uno nuevo y agregarlo al estado
        onCreate(type, date, comments, selectedBaby, changeComments, changeDate, changeType){
            if(type && date && comments && selectedBaby) {
                changeComments('');
                changeType('');
                changeDate('');
                dispatch(actions.addEvent(type, date, moment().format('LTS'), comments, selectedBaby))
            }
            else {
                if(selectedBaby){
                    alert("Todos los campos son necesarios")
                }
                else {
                    alert("No hay ningún bebé seleccionado")
                }
            }
        }
    })
)(AddEventForm);
