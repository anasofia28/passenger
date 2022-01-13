import React from 'react';
import TripsMini from './tripsMini';
import TripsList from './tripsList';


class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 id="title">Passaporte</h1> 
                <img class="bio" src={`${process.env.PUBLIC_URL}/assets/profile.png`}
                    style={{width:"112px", height:"112px", borderRadius:"80px"}}></img>
                <div class="bio">
                    <div>
                        <h3>Rita Santos</h3>
                        <h3 id="nr">19</h3>
                        <h4>anos</h4>
                    </div>
                    <p>Sou estudante de História da Arte e adoro viajar para conhecer novos locais e a sua história. Sou apaixonada por museus culturais...</p>
                </div>
                
                <h2 id="subtitle">Viagens Agendadas</h2>
                <TripsMini/>
                <h2 id="subtitle">As Minhas Viagens Passadas</h2>
                
            </React.Fragment>
        );
    }
}

export default Profile;