import React from 'react';
import DatePicker from 'react-datepicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addTrip } from './redux';
import { connect } from 'react-redux'

import "react-datepicker/dist/react-datepicker.css";

class TripForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            img: '',
            title: '',
            date: '',
            local: '',
            description: '',
            startDate: '',
            endDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLocal = this.handleChangeLocal.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }
    handleChange(event) {
        this.setState({title: event.target.value});
    }
    
    handleChangeLocal(event){
        this.setState({local: event.target.value});
    }

    handleChangeDescription(event){
        this.setState({description: event.target.value});
    }


    handleSubmit(event) {
        alert('1: ' + this.state.title);
        this.props.addTrip();
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <h1 id="titles">Criar Viagem</h1>    
                <form onSubmit={this.handleSubmit}>
                    <TextField id="standard-basic" label="Nome Viagem" variant="standard" type="text" value={this.state.title} onChange={this.handleChange} />
                    <DatePicker placeholderText='Data início' selected={this.state.startDate} onChange={(date) => this.setState({startDate: date})} />
                    <DatePicker placeholderText='Data fim' selected={this.state.endDate} onChange={(date2) => this.setState({endDate: date2})} />
                    <TextField id="standard-basic" label="Local" variant="standard" type="text" value={this.state.local} onChange={this.handleChangeLocal} />
                    <TextField id="standard-basic" label="Descrição" variant="standard" type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        );
    }
}


let tripToAdd = {
    id: "3",
    img: "/assets/3184-desktop-location-description.png",
    title: "Londres",
    date: "17 de Janeiro",
    description: "chá com a Rainha"
}

const mapStateToProps = state => {
    return{
        trips: state.trips
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTrip: () => dispatch(addTrip(tripToAdd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm);

