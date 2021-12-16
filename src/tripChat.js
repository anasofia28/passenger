import React from 'react';
import './index.css';
import './tripChat.css'
import { Link } from "react-router-dom";

class TripChat extends React.Component {
    render(){
        return(
            <div>
                <div class="top" style={{justifyContent:"center"}}>
                    <p class="name">Nome Cidade</p>
                    <img 
                    src={`${process.env.PUBLIC_URL}/assets/3184-desktop-location-description.png`}
                    style={{width:"414px", height:"79px", top:"59px", borderRadius:"5px"}}></img>
                </div>
            </div>
            
        );
    }
}


export default TripChat;
