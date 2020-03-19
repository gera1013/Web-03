import { combineReducers } from 'redux';

import omit from 'lodash/omit';

import * as types from '../types/event';

// El estado es un objeto
// Las llaves son el ID del evento y el contenido los demas atributos
const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_EVENT: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case types.DELETE_EVENT: {
      return omit(state, action.payload.event);
    }
    default: {
      return state;
    }
  }
};

// El estado es un objeto
// La llave es el ID de cada bebe y el contenido una lista con los IDs de los eventos pertenecientes a ese bebe
const byBabyId = (state = {}, action) => {
  switch(action.type) {
    case types.CREATE_EVENT: {
      if(state[action.payload.babyId] !== undefined){
        return {
          ...state,
          [action.payload.babyId]: [...state[action.payload.babyId], action.payload.id],
        }
      }
      else{
        return{
          ...state,
          [action.payload.babyId]: [action.payload.id],
        }
      }
    }
    case types.DELETE_EVENT: {
      return {
        ...state,
        [action.payload.baby]: state[action.payload.baby].filter(event => event !== action.payload.event)
      }
    }
    default:  {
      return state;
    }
  }
}

// Se combinan los reductores de ambos tipos
const events = combineReducers({
    byId,
    byBabyId,
})

export default events;

// Selectores de informacion de eventos
export const getBabyEvent = (state, id) => state.byId[id];
export const getAllBabyEvents = (state, babyID) => state.byBabyId[babyID] === undefined ? '' : state.byBabyId[babyID].map(
  id => getBabyEvent(state, id));