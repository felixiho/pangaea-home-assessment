

const addToCart = (state, item) => {
    const { cartItems } = state
    //check if item already in cart
    const inCart = cartItems.findIndex(cartItem => cartItem.id === item.id)
    if (inCart === -1) {
        return {
            ...state,
            cartItems: [
                ...state.cartItems,
                { ...item, quantity: 1 }
            ]
        }
    }
    const newCart = [...state.cartItems]
    newCart[inCart].quantity += 1
    return {
        ...state,
        cartItems: newCart
    }

};

export default addToCart;