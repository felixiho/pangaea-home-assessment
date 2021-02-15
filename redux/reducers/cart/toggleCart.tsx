

const toggleCart = (state, payload) => {
    const { showCart } = state
    return {
        ...state,
        showCart: payload.type
    }
};

export default toggleCart;