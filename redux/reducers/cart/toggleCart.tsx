

const toggleCart = (state, payload) => {
    return {
        ...state,
        showCart: payload.type
    }
};

export default toggleCart;