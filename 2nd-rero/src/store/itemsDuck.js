const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM_DONE = 'TOGGLE_ITEM_DONE';
const TOGGLE_ITEM_UNDONE = 'TOGGLE_ITEM_UNDONE';
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
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, isDone: !item.isDone } : item
          ),
        };
      case TOGGLE_ITEM_UNDONE:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, isDone: false } : item
          ),
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
    default:
      return state;
  }
}

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const toggleItemDone = (id) => ({
  type: TOGGLE_ITEM_DONE,
  payload: id,
});

export const toggleItemUndone = (id) => ({
  type: TOGGLE_ITEM_UNDONE,
  payload: id,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

