import { LOAD_PRODUCTS } from '../actions/actions'

function loadProducts(data) {
  return {
    type: LOAD_PRODUCTS,
    payload: data,
  }
}

export default loadProducts
