import * as types from '../types/Index'

export const addToCart = (params) => {
    return {
        type: types.ADD_TO_CART,
        payload: params
    }
};
export const updateCart = (params) => {
    return {
        type: types.UPDATE_CART,
        payload: params
    }
};
export const removeFromCart = (params) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: params
    }
};

export const showCart = (params) => {
    return {
        type: types.SHOW_CART,
        payload: params
    }
};