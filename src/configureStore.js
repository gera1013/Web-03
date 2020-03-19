import { createStore } from 'redux';
// import { loadState, saveState} from './localStorage'
import { deleteState } from './localStorage';
// import last from 'lodash/last';
// import throttle from 'lodash/throttle';

import reducer from './reducers';

// import * as selectors from './reducers';
// import * as babyActions from './actions/baby';
// import * as eventActions from './actions/event';


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

    // store.dispatch(babyActions.addBaby('Pepe', 'Trueno', 3))
    // store.dispatch(babyActions.addBaby('Randy', 'Johnson', 2))
    // store.dispatch(babyActions.addBaby('Damm', 'Shawty', 2))
    // store.dispatch(babyActions.selectBaby(last(selectors.getBabies(store.getState()))))
    // store.dispatch(eventActions.addEvent(1, 'Poop', 'DATE', 'Comentarios', selectors.getSelectedBaby(store.getState()).id))
    // store.dispatch(eventActions.addEvent(2, 'Poop', 'DATE', 'Comentarios', selectors.getSelectedBaby(store.getState()).id))
    // store.dispatch(eventActions.addEvent(3, 'Poop', 'DATE', 'Comentarios', selectors.getSelectedBaby(store.getState()).id))
    // store.dispatch(eventActions.deleteEvent(1, selectors.getSelectedBaby(store.getState()).id))

    // console.log(selectors.getBabies(store.getState()))
    // console.log(selectors.getSelectedBaby(store.getState()))
    // console.log(selectors.getAllBabyEvents(store.getState(), selectors.getSelectedBaby(store.getState()).id))

    return store;
}

export default configureStore;