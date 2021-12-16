import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Chats from './chats';
import TripChat from './tripChat';
import TopBar from "./top_bar";
import NavBar from "./navbar";
import Profile from "./profile";
import TripForm from "./tripForm";
import { Provider } from "react-redux";
import store from './redux/store'

export default function App() {
    return(
        <Provider store={store}>
            <Router>
                <TopBar />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/chats" element={<Chats/>} />
                    <Route path="/tripChat" element={<TripChat/>} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/form" element={<TripForm/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}