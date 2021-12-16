import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

export default function TopBar() {
    return(
    <AppBar id="navbar" position="fixed" color="primary" sx={{ height: '60px', top: 0, bottom: 'auto' }}>
        <CssBaseline />
        <Toolbar>
            <StyledLink to="/" ><h1 id="passenger">Passenger</h1></StyledLink>
        </Toolbar>
        {/* <NotificationsIcon position="fixed" sx={{display: 'flex', left: 'auto', right: 0}}/> */}
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