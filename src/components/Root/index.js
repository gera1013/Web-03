import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import AddBabyForm from '../AddBabyForm'

// Se inicia todos los componentes
// Se implementa el BrowserRouter junto con las Route para el soporte de la navegacion dentro de la aplicacion
// Switch permita renderizar componentes dependiendo de la direccion url en la que la aplicacion esté
const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/:filter' component={App} />
                <Route path='/' component={AddBabyForm} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Root;