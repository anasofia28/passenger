import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import tripsjson from './trips.json';
import { addTrip } from './redux';
import { connect } from 'react-redux'

class TripsList extends React.Component{
    render(){
        return(
        <ImageList sx={{ width: '92%', height: 'auto', marginLeft: '4%' }} gap={16}>
            <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" sx={{ color: '#2596be', fontSize: '20px'}}>Viagens sugeridas</ListSubheader>
            </ImageListItem>
            {this.props.trips.map((item) => (
            <ImageListItem id="trip_card" key={item.img} sx={{ width: '100%'}}>
                <img
                src={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
                <ImageListItemBar
                title={item.title}
                actionIcon={item.date}
                subtitle={item.description}
                sx={{ backgroundColor: '#FFFFFF', opacity: '100%'}}
                />
            </ImageListItem>
            ))}
        </ImageList>   
        );
    }
}

let tripToAdd = {}

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

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);