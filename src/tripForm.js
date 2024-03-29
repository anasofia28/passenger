import React from 'react';
import DatePicker from 'react-datepicker';
import { addTrip } from './redux';
import { connect } from 'react-redux'
import swal from 'sweetalert';

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
        this.props.addTrip();
        swal("Viagem criada!", `Criou a viagem "${this.state.title}" com sucesso!`, "success");
        this.render();
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <h1 id="title">Criar Viagem</h1>    
                <form onSubmit={this.handleSubmit}>
                    <input class="form_field" type="text" placeholder='Nome da Viagem' value={this.state.title} onChange={this.handleChange}></input>
                    <div id="datepickers">
                        <DatePicker placeholderText='Data início' selected={this.state.startDate} onChange={(date) => this.setState({startDate: date})}/>
                        <DatePicker placeholderText='Data fim' selected={this.state.endDate} onChange={(date2) => this.setState({endDate: date2})}/>
                    </div>  
                    <input class="form_field" type="text" placeholder='Local' value={this.state.local} onChange={this.handleChangeLocal}></input>
                    <input class="form_field" type="text" placeholder='Descrição' value={this.state.description} onChange={this.handleChangeDescription}></input>

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

