import { LOAD_PEODUCT } from '../actions/actions'

const intialState = {}

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_PEODUCT: {
      let newState = action.payload
      return newState
    }
    default: {
      return state
    }
  }
}

export default productReducer
