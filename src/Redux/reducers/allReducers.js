import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import productReducer from './productReducer'

const allReducers = combineReducers({
  products: mainReducer,
  product: productReducer,
})

export default allReducers
