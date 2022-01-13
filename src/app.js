import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Chats from './chats';
import TripChat from './tripChat';
import TopBar from "./top_bar";
import NavBar from "./navbar";
import Profile from "./profile";
import TripForm from "./tripForm";
import TripInfo from "./tripInfo";
import { Provider } from "react-redux";
import store from './redux/store'
import { useMediaQuery } from 'react-responsive'
import TripInfoMine from "./tripInfoMine";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 641 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 640 })
    return isMobile ? children : null
}

export default function App() {
    return(
        <Provider store={store}>
            <Mobile>
                <Router>
                    <TopBar />
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/chats" element={<Chats/>} />
                        <Route path="/tripChat/:tripIndex" element={<TripChat/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/form" element={<TripForm/>}/>
                        <Route path="/tripInfo/:tripIndex" element={<TripInfo/>}/>
                        <Route path="/tripInfoMine/:tripIndex" element={<TripInfoMine/>}/>
                    </Routes>
                </Router>
            </Mobile>

            <Desktop>
                <style>{'body { background-color: #42A5F5; }'}</style>
                <div class="desktop">
                    <h1 class="desktop">Passenger</h1>
                    <p class="desktop">apenas disponível em versão mobile</p>
                </div>   
            </Desktop>
        </Provider>
    );
}