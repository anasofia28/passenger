import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { addTrip } from './redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


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
            <div>
                <ListSubheader id="titles">Viagens Agendadas</ListSubheader>
                
                <ListSubheader id="titles" component="div">Viagens sugeridas</ListSubheader>
                <ImageList sx={{ width: '92%', height: 'auto', marginLeft: '4%' }} cols={2} gap={16}>
                    {this.props.trips.map((item, index) => (
                        <Link to={`/tripInfo/${index}`}>
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
                                    sx={{ backgroundColor: '#FFFFFF', paddingTop: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.05)', borderRadius: '0px 0px 10px 10px'}}
                                    position="below"
                                />
                            </ImageListItem>
                        </Link>
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
        addTrip: () => dispatch(addTrip(tripToAdd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);