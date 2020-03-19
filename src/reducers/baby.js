import { combineReducers } from 'redux';

import * as types from '../types/baby';

// Reductor de bebe por orden
// Agrega el id del bebe a una lista segun el orden en que son creados
const order = (state = [], action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return [...state, action.payload.id];
    }
    default: {
      return state;
    }
  }
};

// Se guardan los bebes en un objeto
// El ID se usa como llave y todos los atributos son el contenido
const byId = (state = {}, action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Estado unico que tiene el ID del bebe seleccionado
const selected = (state = null, action) => {
  switch(action.type) {
    case types.BABY_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

// Se combinan los tres reductores de los bebes
const baby = combineReducers({
  byId,
  order,
  selected,
});


export default baby;

// Selectores para sacar informacion del bebe del estado
export const getBaby = (state, id) => state.byId[id];
export const getBabies = state => state.order.map(
  id => getBaby(state, id),
).filter(baby => baby != null);
export const getSelectedBaby = state => state.selected;