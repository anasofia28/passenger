import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './index.css';
import './tripChat.css'
import { addTrip } from './redux';

function TripChat(props) {

    let params = useParams();

    return (
        <div>
            <img class="info" src={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format&dpr=2 2x`} />
            <div class="info" style={{ backgroundColor: '#FFFFFF', textShadow: "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white",display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-200px' }} >
                <p>{props.trips[params.tripIndex].title}</p>
            </div>
            <ImageListItemBar id="message"
                title="Eu"
                subtitle="Olá, mal posso esperar por ir viajar contigo!"
                sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(220, 220, 220, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                position="below"
            />
            <ImageListItemBar id="message2"
                title="Maria"
                subtitle="Olá!"
                sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(220, 220, 220, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                position="below"
            />
            <ImageListItemBar id="message3"
                title="Maria"
                subtitle="Já estou a caminho!"
                sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(220, 220, 220, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                position="below"
            />
        </div>

    );
}

let tripToAdd;

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTrip: () => dispatch(addTrip(tripToAdd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripChat);