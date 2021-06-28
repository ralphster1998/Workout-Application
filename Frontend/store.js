import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import data from './pages/API/data.json';

// initial state
const startState = {
    cards: [] // so we will pass data here eventually
};

// Actions
export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data
    }
};

export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
}

// create store
const store = (initialState = startState) => {
    return createStore(reducer, initialState);
}
// wrapper that simplifies all redux code
export const initStore = createWrapper(store);

/*
Actions:
- These are functions that are dispatched or called 
by component, and execute reducers to update the store.
- with new data for applicaiton to feed from
*/
