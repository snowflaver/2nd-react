import { createStore } from 'redux';
import itemsReducer from './itemsDuck';

const store = createStore(itemsReducer);

export default store;