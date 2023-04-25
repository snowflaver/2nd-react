const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM_DONE = 'TOGGLE_ITEM_DONE';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
    items: [],
  };
  
  export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEM:
        return { ...state, items: [...state.items, action.payload] };
      case TOGGLE_ITEM_DONE:
        return {
          ...state,
          items: state.items.map((item, index) =>
            index === action.payload ? { ...item, isDone: !item.isDone } : item
          ),
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  }

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });
  
  export const toggleItemDone = (index) => ({
    type: TOGGLE_ITEM_DONE,
    payload: index,
  });
  
  export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    payload: index,
  });

