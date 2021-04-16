import { LOAD_PEODUCT } from './actions'

function loadProduct(data) {
  return {
    type: LOAD_PEODUCT,
    payload: data,
  }
}

export default loadProduct
