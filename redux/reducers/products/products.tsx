
import * as types from '../../types/Index'
import addActiveCurrency from './addActiveCurrency'
import addCurrencies from './addCurrencies'
import addProducts from './addProducts'

const initialState = {
    allProducts: [],
    currencies: [],
    activeCurrency: ''
}
export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PRODUCTS:
            return addProducts(state, action.payload)
        case types.ADD_PRODUCTS_CURRENCIES:
            return addCurrencies(state, action.payload)
        case types.ADD_ACTIVE_CURRENCY:
            return addActiveCurrency(state, action.payload)
        default:
            return state
    }
}