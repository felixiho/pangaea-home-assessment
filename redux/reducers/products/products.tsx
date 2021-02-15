
import * as types from '../../types/Index'
import addProducts from './addProducts'

const initialState = {
    allProducts: []
}
export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PRODUCTS:
            return addProducts(state, action.payload)
        default:
            return state
    }
}