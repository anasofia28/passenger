import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { addTrip } from './redux';
import { connect } from 'react-redux'

class TripsList extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index){
       alert(index)
    }

    render() {
        return (
            <ImageList sx={{ width: '92%', height: 'auto', marginLeft: '4%' }} gap={16}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader id="titles" component="div">Viagens sugeridas</ListSubheader>
                </ImageListItem>
                {this.props.trips.map((item, index) => (
                    <button onClick={this.handleClick(index)}>
                        <ImageListItem id="trip_card" key={item.img} sx={{ width: '100%' }}>
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
                                sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)', borderRadius: '0px 0px 10px 10px' }}
                                position="below"
                            />
                        </ImageListItem>
                    </button>
                ))}
            </ImageList>
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

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);