import * as Actions from '../actions/actions'

const intialState = []

const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.LOAD_PRODUCTS: {
      let newState = action.payload
      return newState
    }
    default: {
      return state
    }
  }
}

export default mainReducer
