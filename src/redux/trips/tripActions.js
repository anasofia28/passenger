import { ADD_TRIP } from './tripTypes'

export const addTrip = (tripToAdd) => {
    return{
        type: ADD_TRIP,
        add: tripToAdd
    }
}