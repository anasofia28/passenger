import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './index.css';
import './tripChat.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import trips from "./myTrips.json";

class Chats extends React.Component {

    constructor(props){
        super(props)
    }
  
  render() {
    return(
        <div>
            <h1 id="title" component="div">Canal de Viagem</h1>
            <ImageList sx={{ width: '92%', height: 'auto', marginLeft: '4%' }} gap={16}>
                {trips.map((item, index) => (            
                    <ImageListItem id="chat_card" key={item.img} cols={2} sx={{ width: '100%' }}>
                        <Link to={`/tripChat/${index}`} >
                            <img
                                src={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar id="trip_name"
                                title={item.title}
                                subtitle="Ultima mensagem enviada"
                                sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                                position="below"
                            />
                        </Link>
                    </ImageListItem>
                ))}
            </ImageList>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
