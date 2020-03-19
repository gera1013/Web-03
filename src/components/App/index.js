import React from 'react';

import './styles.css';
import EventList from '../EventList';
import BabyDropdown from '../BabyDropdown';
import AddEventForm from '../AddEventForm';

// Se lee la url y se pasa como params a los componentes que necesiten leer de ellos
const App = ({ match: {params} }) => (
  <div className="back">
    <div className="wrapper__">
      <BabyDropdown filter={params.filter || 'select'}/>
      <EventList filter={params.filter || 'select'}/>
    </div>
    <AddEventForm />
  </div>
);

export default App;