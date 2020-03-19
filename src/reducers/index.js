import { combineReducers } from 'redux';

import baby, * as babySelectors from './baby';
import event, * as eventSelectors from './event';


const reducer = combineReducers({
  baby,
  event,
});


export default reducer;

export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = state => babySelectors.getBabies(state.baby);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.baby);

export const getBabyEvent = (state, id) => eventSelectors.getBabyEvent(state.event, id);
export const getAllBabyEvents = (state, babyId) => eventSelectors.getAllBabyEvents(state.event, babyId);