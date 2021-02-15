

const removeFromCart = (state, item) => {
    const { cartItems } = state
    return {
        ...state,
        cartItems: cartItems.filter( cartItem => cartItem.id != item.id)
    }
};

export default removeFromCart;