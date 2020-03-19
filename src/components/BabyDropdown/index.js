import React from 'react';
import { connect } from 'react-redux'

import * as selectors from '../../reducers';
import * as babyActions from '../../actions/baby';

import './styles.css';
import FilterLink from '../FilterLink';


const BabyDropdown = ({ babyList, filter, selectedBaby, onSelectOption }) => (
    <div className="dropdown">
        <button className="dropbtn"><FilterLink filter="select">{filter === 'select' ? 'Seleccionar' : selectedBaby.name + ' ' + selectedBaby.lastName}</FilterLink></button>
        <button className="add__new"><FilterLink filter="">{'Nuevo bebé'}</FilterLink></button>
        <div className="dropdown-content">
            {babyList.map(baby =>
                <li key={baby.id} onClick={() => onSelectOption(baby.id)}><FilterLink filter={`/${baby.id}`}>{baby.name} {baby.lastName}</FilterLink></li>)}
        </div>
  </div> 
)

export default connect(
    (state, ownProps) => ({
        babyList: selectors.getBabies(state),
        filter: ownProps.filter,
        selectedBaby: selectors.getBaby(state, ownProps.filter)
    }),
    dispatch => ({
        onSelectOption(id){
            dispatch(babyActions.selectBaby(id))
        }
    }), 
)(BabyDropdown);