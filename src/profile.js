import React from 'react';
import TripsList from './tripsList';


class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 id="title">Passaporte</h1> 
                <img src={`${process.env.PUBLIC_URL}/assets/3184-desktop-location-description.png`}
                    style={{width:"106px", height:"106px", borderRadius:"80px"}}></img>
                <h4>Miguel</h4>
                <h5>22 anos</h5>
                <h6> DESCRIÇÃO SOBRE MIM: gosto de viajar</h6>

                <h2 id="subtitle">Viagens Agendadas</h2>
                <h2 id="subtitle">As Minhas Viagens Passadas</h2>
                <TripsList/>
            </React.Fragment>
        );
    }
}

export default Profile;