import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
    <AppBar id="navbar" position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '45px'}}>
        <CssBaseline />
        <Toolbar>
            <StyledLink to="/" ><HomeIcon/></StyledLink>
            <Box sx={{ flexGrow: 1 }} />
            <StyledLink to="/chats" ><ChatIcon/></StyledLink>
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/form">
                <Fab id="add_button" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <NotificationsIcon/>
            <Box sx={{ flexGrow: 1 }} />
            <StyledLink to="/profile">
                <PersonIcon/>
            </StyledLink>
        </Toolbar>
    </AppBar>
    );
}

const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
})
;