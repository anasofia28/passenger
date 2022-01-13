import { ADD_TRIP } from "./tripTypes"

const initialState = {
    trips: [
        {
            id: "1",
            img: "/assets/thinkstockphotos-4549879531.jpeg",
            title: "Paris",
            date: "14 de Fevereiro",
            date2: "14.02.2022",
            autor: "João",
            time: "17:00",
            description: "3 dias em museus"
        },
        {
            id: "2",
            img: "/assets/3184-desktop-location-description.png",
            title: "Londres",
            date: "17 de Março",
            date2: "17.03.2022",
            autor: "Carla",
            time: "17:00",
            description: "chá com a Rainha"
        },
        {
            id: "3",
            img: "/assets/pontos-turisticos-em-roma.jpg",
            title: "Roma",
            date: "30 de Março",
            date2: "20.03.2022",
            autor: "Francisca",
            time: "17:00",
            description: "Visita ao coliseu"
        }
    ]    
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TRIP: return{
            ...state,
            trips: state.trips.concat(action.add)
        }
        default: return state
    }

}

export default reducer;