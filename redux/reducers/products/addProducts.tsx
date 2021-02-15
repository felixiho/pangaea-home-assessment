

const addProducts = (state, item) => {
    return {
        ...state,
        allProducts: item
    }

};

export default addProducts;