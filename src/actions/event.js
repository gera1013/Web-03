import { v4 } from 'node-uuid';
import * as types from '../types/event';

// AGREGAR EVENTO
// Recibe un tipo, fecha, hora, comentarios y el ID del bebe al que pertenece el evento
// ID unico generado por la libreria uuid
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

// ELIMINAR EVENTO
// Se elimina del estado el evento seleccionado 
export const deleteEvent = (toDelete, babyId) => ({
  type: types.DELETE_EVENT,
  payload: { 
    event: toDelete,
    baby: babyId,
   }
});