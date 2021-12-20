import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTrip } from './redux';

function TripInfo(props) {
    function handleSubmit(){
        alert("Parabéns! Candidatou-se a esta viagem!")
    }
    let params = useParams();
    return (
        <React.Fragment>
            <img class="info" src={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format&dpr=2 2x`} />

            <div class="info" style={{ backgroundColor: '#FFFFFF', textShadow: "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white",display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-200px' }} >
                <p>{props.trips[params.tripIndex].title}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <p class="info">{props.trips[params.tripIndex].description}</p>

            <p class="info">hora inicio: {props.trips[params.tripIndex].time}</p>
            <p class="info">{props.trips[params.tripIndex].date}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button id="submit_btn" onClick={handleSubmit} style={{ marginBottom: '' }}>Viajar</button>
                </div>
        </React.Fragment>

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

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);