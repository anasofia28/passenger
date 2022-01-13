import * as React from 'react';
import TripsMini from './tripsMini';
import TripsList from './tripsList';
import ListSubheader from '@mui/material/ListSubheader';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 id="title">Viagens Agendadas</h1>
        <TripsMini/>

        <h1 id="title">Viagens Sugeridas</h1>
        <TripsList/>
      </div>

    );
  }
}

export default Home;