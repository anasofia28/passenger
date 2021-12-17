import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

function TripInfo (props) {
    let params = useParams();
        return (
            <React.Fragment>
                <img class="info" src={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${props.trips[params.tripIndex].img}?w=248&fit=crop&auto=format&dpr=2 2x`}/>
                
                <div class="info" style={{ backgroundColor: '#FF00FF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-96px' }} >
                    <p>{props.trips[params.tripIndex].title}</p>
                </div>
                
                <p class="info">{props.trips[params.tripIndex].description}</p>
                
                <p class="info">hora inicio</p>
                <p class="info">{props.trips[params.tripIndex].date}</p>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button id="submit_btn" type="submit" style={{ marginBottom: '' }}>Viajar</button>
                </div>
            </React.Fragment>

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

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo);