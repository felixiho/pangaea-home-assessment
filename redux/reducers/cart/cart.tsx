
import * as types from '../../types/Index'
import addToCart from './addToCart';
import removeFromCart from './removeFromCart';
import toggleCart from './toggleCart';
import updateCart from './updateCart';

const initialState = {
    cartItems: [],
    showCart: false
}
export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            return addToCart(state, action.payload)
        case types.REMOVE_FROM_CART:
            return removeFromCart(state, action.payload)
        case types.UPDATE_CART:
            return updateCart(state, action.payload)
        case types.SHOW_CART:
            return toggleCart(state, action.payload)
        default:
            return state
    }
}