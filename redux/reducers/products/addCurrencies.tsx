
const addCurrencies = (state, item) => {
    return {
        ...state,
        currencies: item.currency
    }

};

export default addCurrencies;