import { combineReducers } from 'redux';

import baby, * as babySelectors from './baby';
import event, * as eventSelectors from './event';

// Se combinan los reductores de evento y bebe
const reducer = combineReducers({
  baby,
  event,
});


export default reducer;

// Selectores globales para la informacion del estado
export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = state => babySelectors.getBabies(state.baby);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.baby);

export const getBabyEvent = (state, id) => eventSelectors.getBabyEvent(state.event, id);
export const getAllBabyEvents = (state, babyId) => eventSelectors.getAllBabyEvents(state.event, babyId);