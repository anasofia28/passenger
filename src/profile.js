import React from 'react';
import TripsList from './tripsList';


class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div style={{justifyContent:"left", borderBottom:"1px solid grey"}}>
                    <div style={{display:"flex", margin:"18px", justifyContent:"space-between", width:"30%"}}>
                        <div>
                            <img 
                            src={`${process.env.PUBLIC_URL}/assets/3184-desktop-location-description.png`}
                            style={{width:"160px", height:"160px", borderRadius:"80px"}}></img>
                        </div>
                        <div style={{marginLeft:"50px"}}>
                            <h4>Miguel</h4>
                            <h5>22 anos</h5>
                            <div >
                                <h6> DESCRIÇÃO SOBRE MIM: gosto de bla bla bla bla</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <TripsList/>
            </React.Fragment>
        );
    }
}

export default Profile;