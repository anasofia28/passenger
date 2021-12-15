import { ADD_TRIP } from "./tripTypes"

const initialState = {
    trips: [
        {
            id: "1",
            img: "/assets/thinkstockphotos-4549879531.jpeg",
            title: "Paris",
            date: "14 de Fevereiro",
            description: "3 dias em museus"
        },
        {
            id: "2",
            img: "/assets/3184-desktop-location-description.png",
            title: "Londres",
            date: "17 de Janeiro",
            description: "3 dias em museus"
        },
        {
            id: "3",
            img: "/assets/3184-desktop-location-description.png",
            title: "Londres",
            date: "17 de Janeiro",
            description: "3 dias em museus"
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