import React from 'react';
import { connect } from 'react-redux'

import * as selectors from '../../reducers';
import * as babyActions from '../../actions/baby';

import './styles.css';
import FilterLink from '../FilterLink';

// Dummy component para el dropdown
// Recibe como parametros la lista de bebes existentes, el filtro de la url, el bebe seleccionado y la funcion de onSelect 
const BabyDropdown = ({ babyList, filter, selectedBaby, onSelectOption }) => (
    <div className="dropdown">
        <button className="dropbtn"><FilterLink filter="select">{filter === 'select' ? 'Seleccionar' : selectedBaby.name + ' ' + selectedBaby.lastName}</FilterLink></button>
        <button className="add__new"><FilterLink filter="">{'Nuevo bebé'}</FilterLink></button>
        <div className="dropdown-content">
            {/* Funcion map para hacer cada elemento del dropdown con cada bebe existente */}
            {babyList.map(baby =>
                <li key={baby.id} onClick={() => onSelectOption(baby.id)}><FilterLink filter={`/${baby.id}`}>{baby.name} {baby.lastName}</FilterLink></li>)}
        </div>
  </div> 
)

// Funcion connect
// Map State To Props: Se le informa al dummy component los bebes existentes, el filtro del url y el bebe seleccionado dependiendo del filtro
// Map Dispatch To Props: Se cambia el bebe seleccionado en el estado
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