import { v4 } from 'node-uuid'
import * as types from '../types/baby';

// AGREGAR BEBE
// Recibe un nombre, apellido y edad
// ID unico generado por la libreria uuid
export const addBaby = (name, lastName, age) => ({
  type: types.BABY_ADDED,
  payload: { 
    id: v4(), 
    name,
    lastName,
    age,
  },
});

// SELECCIONAR BEBE
//Se actualiza el estado para el bebe que se selecciona 
export const selectBaby = (id) => ({
    type: types.BABY_SELECTED,
    payload: id,
});