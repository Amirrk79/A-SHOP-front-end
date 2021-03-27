import { combineReducers } from 'redux'
import mainReducer from './mainReducer'

const allReducers = combineReducers({
  products: mainReducer,
})

export default allReducers
