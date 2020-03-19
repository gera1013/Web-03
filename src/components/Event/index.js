import React from 'react';
import { connect } from 'react-redux'

import './styles.css';
import * as eventActions from '../../actions/event'


// Dummy component para Event
// Recibe todos los atributos del event desglobados por el spread
// Tambien recibe el método onClick 
const Event = ({ onClick, id, date, time, comments, type, babyId }) => (
    <li>
        <div className="container">
            <div className="side"/>
            <div className="divisor"/>
            <div className="event-info-container">
                <div className="event-date">
                    <span>Fecha y hora del evento: </span>
                    {date + ' a las ' + time}
                </div>
                <div className="event-type">
                     <span>Tipo: </span>
                     {type}
                </div>
                <div className="event-comments">
                    <span>Comments: </span>
                    {comments}
                </div>
            </div>
            <button onClick={() => onClick(id, babyId)} className="delete">
                {'X'}
            </button>
        </div>
    </li>
);

// Map Dispatch To Props: Se especifica la accion de eliminar un evento, se pasa el id del evento al que se le hizo click
export default connect(
    undefined,
    dispatch => ({
        onClick(id, babyId){
            dispatch(eventActions.deleteEvent(id, babyId))
        }
    }),
)(Event);