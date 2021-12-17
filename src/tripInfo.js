import React from 'react';

class TripInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img
                    src={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <h1>cidade</h1>

                <p>descrição</p>

                <h3>data</h3>
                <h3>hora inicio</h3>

                <button type="submit">Viajar</button>
            </React.Fragment>

        );
    }
}


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
