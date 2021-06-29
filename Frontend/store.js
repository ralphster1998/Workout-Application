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

// reducers
/*

Remember we have these functions or actions.
They are calling or dispatching from the applicaiton.
And when they are called, we're returning a type or returning
data, or what is called payload.

And in this case, like initial cards, we are calling into these
initial cards type.

*/
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards, // so what we are passing here is the data

            }
        case 'ADD':
            // Here we are returning the current state and 
            // then adding to it the new action item that was passed

            // so when this function is called,
            // we have an item that is passed to it.

            return {
                ... state,
                cards: [ ...state, action.item ] , // first return the state, so something will change in particular component
            }

        default: return state
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

/* 
Tip:
- do 'npm run dev'
*/