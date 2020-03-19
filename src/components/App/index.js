import React from 'react';

import './styles.css';
import EventList from '../EventList';
import BabyDropdown from '../BabyDropdown';
import AddEventForm from '../AddEventForm';

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