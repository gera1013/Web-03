import React from 'react';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy'

import './styles.css';
import * as selectors from '../../reducers';
import Event from '../Event/index';

// Dummy component para la lista de eventos
// Recibe la lista de eventos para el bebe seleccionado
const EventList = ({ events }) => (
    <ul className="list">
        {/* Se hace un map a la lista de eventos para mostrar en pantalla, 
        si no hay se muestra un mensaje diciendo que no hay eventos en existencia*/}
        {events.length > 0 ? events.map(event =>
            <Event key={event.id} {...event} />
        ) : <div className="default-message">NO HAY EVENTOS</div>}
    </ul> 
);

// Map State To Props: Se le pasa al dummy component la lista de eventos, ordenada de mas reciente a menos reciente
export default connect(
    (state, ownProps) => ({
        events: orderBy(selectors.getAllBabyEvents(state, ownProps.filter), ['date', 'time'], ['desc', 'desc']),
    }),
    undefined,
)(EventList);