import { createStore } from 'redux'
import reducer from './trips/tripReducer'

const store = createStore(reducer)

export default store;