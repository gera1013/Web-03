import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/event';
import * as selectors from '../../reducers';
import moment from 'moment'


const AddEventForm = ({ onCreate, selectedBaby}) => {
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

export default connect(
    state => ({
        selectedBaby: selectors.getSelectedBaby(state),
    }),
    dispatch => ({
        onCreate(type, date, comments, selectedBaby, changeComments, changeDate, changeType){
            if(type && date && comments && selectedBaby) {
                changeComments('');
                changeType('');
                changeDate('');
                dispatch(actions.addEvent(type, date, moment().format('LTS'), comments, selectedBaby))
            }
            else {
                console.log("Incomplete");
            }
        }
    })
)(AddEventForm);
