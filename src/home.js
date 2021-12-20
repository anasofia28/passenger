import * as React from 'react';
import TripsList from './tripsList';
import ListSubheader from '@mui/material/ListSubheader';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ListSubheader id="titles">Viagens Agendadas</ListSubheader>

        <ListSubheader id="titles" component="div">Viagens sugeridas</ListSubheader>
        <TripsList />
      </div>

    );
  }
}

export default Home;