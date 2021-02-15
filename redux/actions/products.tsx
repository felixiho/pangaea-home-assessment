import * as types from '../types/Index'

export const addProducts = (params) => {
    return {
        type: types.ADD_PRODUCTS,
        payload: params
    }
};