import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Game from './game';
import NavBar from "./navbar";
import Profile from "./profile";

export default function App() {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/game" element={<Game/>} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}