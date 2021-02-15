
import configureStore from 'redux-mock-store'
import {cartReducer} from '../redux/reducers/cart/cart'
import * as type from '../redux/types/Index'

const initialState = {
    cart: {
        cartItems: [],
        showCart: false
    },
    products: {
        allProducts: [],
        currencies: [],
        activeCurrency: ''
    }
}

describe("Cart", () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState.cart)
    })

    it('should add new item to cart', () => {
        const action = {
            type: type.ADD_TO_CART,
            payload: {
                id: 1,
            }
        }
        expect(cartReducer(initialState.cart, action)).toEqual({
            cartItems: [{
                id: 1,
                quantity: 1
            }],
            showCart: false
        })
    })

    it('should increase quantity if item already exists in cart', () => {
        const action = {
            type: type.ADD_TO_CART,
            payload: {
                id: 1,
            }
        }
        const initialState = {
            cartItems: [{
                id: 1,
                quantity: 1
            }],
            showCart: false
        }
        expect(cartReducer(initialState, action)).toEqual({
            cartItems: [{
                id: 1,
                quantity: 2
            }],
            showCart: false
        })
    })


    it('should remove item from cart', () => {
        const action = {
            type: type.REMOVE_FROM_CART,
            payload: {
                id: 1,
            }
        }
        const initialState = {
            cartItems: [{
                id: 1,
                quantity: 1
            }],
            showCart: false
        }
        expect(cartReducer(initialState, action)).toEqual({
            cartItems: [],
            showCart: false
        })
    })

    it('should reduce an item\'s quantity ', () => {
        const action = {
            type: type.UPDATE_CART,
            payload: {
                id: 1,
                increase: false
            }
        }
        const initialState = {
            cartItems: [{
                id: 1,
                quantity: 2
            }],
            showCart: false
        }
        expect(cartReducer(initialState, action)).toEqual({
            cartItems: [{
                id: 1,
                quantity: 1
            }],
            showCart: false
        })
    })

});