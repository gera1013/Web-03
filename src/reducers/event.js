import { combineReducers } from 'redux';

import omit from 'lodash/omit';

import * as types from '../types/event';


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

const events = combineReducers({
    byId,
    byBabyId,
})

export default events;


export const getBabyEvent = (state, id) => state.byId[id];
export const getAllBabyEvents = (state, babyID) => state.byBabyId[babyID] === undefined ? '' : state.byBabyId[babyID].map(
  id => getBabyEvent(state, id));