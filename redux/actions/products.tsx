import * as types from '../types/Index'

export const addProducts = (params) => {
    return {
        type: types.ADD_PRODUCTS,
        payload: params
    }
};
export const addProductsCurrencies = (params) => {
    return {
        type: types.ADD_PRODUCTS_CURRENCIES,
        payload: params
    }
};
export const addActiveCurrency = (params) => {
    return {
        type: types.ADD_ACTIVE_CURRENCY,
        payload: params
    }
};