import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import tripsjson from './trips.json';

class TripsList extends React.Component{
    render(){
        return(
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" sx={{ color: '#2596be', fontSize: '20px'}}>Viagens sugeridas</ListSubheader>
            </ImageListItem>
            {tripsjson.map((item) => (
            <ImageListItem key={item.img}>
                <img
                src={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${process.env.PUBLIC_URL}${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
                <ImageListItemBar
                sx={{opacity: "100%"}}
                title={item.title}
                subtitle={item.date}
                actionIcon={
                    <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    >
                    <InfoIcon />
                    </IconButton>
                }
                />
            </ImageListItem>
            ))}
        </ImageList>   
        );
    }
}

export default TripsList;