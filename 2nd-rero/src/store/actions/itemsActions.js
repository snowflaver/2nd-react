export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

export const toggleItemDone = (index) => ({
    type: 'TOGGLE_ITEM_DONE',
    payload: index
});

export const deleteItem = (index) => ({
    type: 'DELETE_ITEM',
    payload: index
});