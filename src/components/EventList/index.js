import React from 'react';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy'

import './styles.css';
import * as selectors from '../../reducers';
import Event from '../Event/index';

const EventList = ({ events }) => (
    <ul className="list">
        {events ? events.map(event =>
            <Event key={event.id} {...event} />
        ) : <div className="default-message">NO HAY EVENTOS</div>}
    </ul> 
);

export default connect(
    (state, ownProps) => ({
        events: orderBy(selectors.getAllBabyEvents(state, ownProps.filter), ['date', 'time'], ['desc', 'desc']),
    }),
    undefined,
)(EventList);