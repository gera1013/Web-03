import { v4 } from 'node-uuid'
import * as types from '../types/baby';


export const addBaby = (name, lastName, age) => ({
  type: types.BABY_ADDED,
  payload: { 
    id: v4(), 
    name,
    lastName,
    age,
  },
});

export const selectBaby = (id) => ({
    type: types.BABY_SELECTED,
    payload: id,
});