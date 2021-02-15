

const removeFromCart = (state, item) => {
    const { cartItems } = state
    console.log(item)
    return {
        ...state,
        cartItems: cartItems.filter( cartItem => cartItem.id != item.id)
    }
};

export default removeFromCart;