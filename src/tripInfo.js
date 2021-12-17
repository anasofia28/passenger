import React from 'react';

class TripInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <h1>cidade</h1>

                <p>descrição</p>

                <h3>data</h3>
                <h3>hora inicio</h3>

                <button id="submit_btn" type="submit">Viajar</button>
            </React.Fragment>

        );
    }
}

export default (TripInfo);
