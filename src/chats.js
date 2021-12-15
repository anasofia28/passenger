import React from 'react';
import './index.css';

import { Link } from "react-router-dom";

class Chats extends React.Component {
  
  render() {
    return(
      <React.Fragment>
        <h1>Canal de viagem</h1>
        <div style={{justifyContent:"left", border:"2px solid grey"}}>
            <Link to="/tripChat">
            <div style={{display:"flex", margin:"18px", justifyContent:"space-between", width:"30%"}}>
                <div>
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/3184-desktop-location-description.png`}
                    style={{width:"160px", height:"160px", borderRadius:"5px"}}></img>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h2>Londres</h2>
                    <div >
                        <h6> DISPLAY ULTIMA MENSAGEM ENVIADA PELO USER </h6>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <p></p>
        <div style={{justifyContent:"left", border:"2px solid grey"}}>
            <Link to="/tripChat">
            <div style={{display:"flex", margin:"18px", justifyContent:"space-between", width:"30%"}}>
                <div>
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/thinkstockphotos-4549879531.jpeg`}
                    style={{width:"160px", height:"160px", borderRadius:"5px"}}></img>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h2>Paris</h2>
                    <div >
                        <h6> DISPLAY ULTIMA MENSAGEM ENVIADA PELO USER </h6>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    </React.Fragment>
    
  );
  }
}

export default Chats;
