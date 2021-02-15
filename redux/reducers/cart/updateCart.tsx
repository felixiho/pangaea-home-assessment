

const updateCart = (state, item) => {
    const { cartItems } = state
    const { id, increase } = item
    const inCart = cartItems.findIndex(cartItem => cartItem.id === id)
    const newCart = [...state.cartItems]
    if (increase) {
        newCart[inCart].quantity += 1
    }else{
        newCart[inCart].quantity -=  newCart[inCart].quantity === 1 ? 0 : 1
    }
    return {
        ...state,
        cartItems: newCart
    }

};

export default updateCart;