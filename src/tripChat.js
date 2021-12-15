import React from 'react';
import './index.css';
import './tripChat.css'
import { Link } from "react-router-dom";

class TripChat extends React.Component {
    render(){
        return(
            <div style={{justifyContent:"center"}}>
                <p>Nome Cidade</p>
                <img 
                src={`${process.env.PUBLIC_URL}/assets/3184-desktop-location-description.png`}></img>
            </div>
        );
    }
}


export default TripChat;
