
const addActiveCurrency = (state, item) => {
    return {
        ...state,
        activeCurrency: item.currency
    }

};

export default addActiveCurrency