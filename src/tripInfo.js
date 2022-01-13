import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTrip } from './redux';
import swal from 'sweetalert';

function TripInfo(props) {
    function handleSubmit() {
        swal("Candidatado!", `Candidatou-se a ser passageiro em "${props.trips[params.tripIndex].title}" com sucesso!`, "success");
    }

    let params = useParams();
    let button;
    if(props.trips[params.tripIndex].mine == "1"){
        button = <button id="submit_btn" hidden="true" onClick={handleSubmit} style={{ marginBottom: '' }}>Viajar</button>
    }
    else{
        button = <button id="submit_btn" onClick={handleSubmit} style={{ marginBottom: '' }}>Viajar</button>
    }
    return (
        <React.Fragment>
            <img class="info" src={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format&dpr=2 2x`} />

            <div class="info" style={{ backgroundColor: '#FFFFFF', textShadow: "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white", justifyContent: 'center', alignItems: 'center' }} >
                <p>{props.trips[params.tripIndex].title}</p>
            </div>

            <p class="info">{props.trips[params.tripIndex].description}</p>

            <div style={{ display: 'inline-flex', marginLeft: '30%' }}>
                <p class="info">{props.trips[params.tripIndex].date}</p>
                <p class="info">Início: {props.trips[params.tripIndex].time}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {button}
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