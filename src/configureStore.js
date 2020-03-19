import { createStore } from 'redux';
// import { loadState, saveState} from './localStorage'
import { deleteState } from './localStorage';
// import throttle from 'lodash/throttle';

import reducer from './reducers';

// Se configura la store
// Se hace en un archivo aparte para solo llamar a store en otros componentes
// Cualquier accion relacionada como subscribe, se maneja dentro de este metodo 
const configureStore = () => {
    // const persistedState = loadState()

    const store = createStore(
    reducer,
    // persistedState,
    );

    // store.subscribe(throttle(() => {
    // saveState(store.getState())
    // }, 1000));

    deleteState(store.getState());

    store.subscribe(() => console.log(store.getState()));

    return store;
}

export default configureStore;