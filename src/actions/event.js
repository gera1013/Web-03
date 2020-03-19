import { v4 } from 'node-uuid';
import * as types from '../types/event';


export const addEvent = (type, date, time, comments, babyId) => ({
    type: types.CREATE_EVENT,
    payload: { 
        id: v4(),
        type,
        date,
        time, 
        comments,
        babyId,
    },
});

export const deleteEvent = (toDelete, babyId) => ({
  type: types.DELETE_EVENT,
  payload: { 
    event: toDelete,
    baby: babyId,
   }
});