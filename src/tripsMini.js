import * as React from 'react';
import { addTrip } from './redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './index.css';
import trips from "./myTrips.json";


class TripsMini extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginLeft: '4%' }}>
                {trips.map((item, index) => (
                    <Link to={`/tripInfoMine/${index}`}>
                        <div id="mini_card">
                            <img
                                src={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.date2}</p>
                                <p>{item.autor}</p>
                            </div>                        
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

let tripToAdd = {}

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

export default connect(mapStateToProps, mapDispatchToProps)(TripsMini);