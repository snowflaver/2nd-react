const initialState = {
    items: []
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'TOGGLE_ITEM_DONE':
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload) {
                        return { ...item, isDone: !item.isDone };
                    }
                    return item;
                })
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

export default itemsReducer;