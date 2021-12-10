import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Game from './game';
import NavBar from "./navbar";
import Profile from "./profile";
import TripForm from "./tripForm";
import { Provider } from "react-redux";
import store from './redux/store'

export default function App() {
    return(
        <Provider store={store}>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/game" element={<Game/>} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/form" element={<TripForm/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}