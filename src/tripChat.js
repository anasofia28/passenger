import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './index.css';
import './tripChat.css'

function TripChat (props) {

    let params = useParams();
    alert(params.tripIndex);

        return(
            <div>
                <div class="top" style={{justifyContent:"center"}}>
                    <h1 class="name"> {props.trips[params.tripIndex].title} </h1>
                    <img 
                    src={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format`}
                    style={{width: "200%", height: "200px", top:"59px", borderRadius:"5px"}}></img>
                </div>
                <div class="message" style={{justifyContent:"right"}}>
                    <p>Desculpa, não é possível inserir mensagens</p>
                </div>
                <ImageListItemBar id="message"
                    title="Eu"
                    subtitle="Olá, mal posso esperar por ir viajar contigo!"
                    sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(220, 220, 220, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                    position="below"
                />
            </div>    
        
        );
}

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripChat);