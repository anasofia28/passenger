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
        alert("Criou uma nova viagem!");
        this.props.addTrip();
        this.render();
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <h1 id="titles">Criar Viagem</h1>    
                <form onSubmit={this.handleSubmit}>
                    <TextField id="standard-basic" label="Nome Viagem" variant="standard" type="text" value={this.state.title} onChange={this.handleChange}/>
                        <DatePicker placeholderText='Data início' selected={this.state.startDate} onChange={(date) => this.setState({startDate: date})} 
                        sx={{ width: '50%', float: 'top' }} />
                        <DatePicker placeholderText='Data fim' selected={this.state.endDate} onChange={(date2) => this.setState({endDate: date2})} 
                        sx={{ width: '50%', float: 'top'}} />
                        <TextField id="standard-basic" label="Local" variant="standard" type="text" value={this.state.local} onChange={this.handleChangeLocal} 
                        sx={{}} />
                        <TextField id="standard-basic" label="Descrição" variant="standard" type="text" value={this.state.description} onChange={this.handleChangeDescription} 
                        sx={{width: '100%'}} /> 

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <input id="submit_btn" type="submit" value="Criar viagem" />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}


let tripToAdd = {
    id: "4",
    img: "/assets/grand-canal-veneza-e1596744121749.jpg",
    title: "Veneza",
    date: "17 de Janeiro",
    time: "17:00",
    description: "Passeio de gôndola"
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

