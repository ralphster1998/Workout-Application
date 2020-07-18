import exercise from './exercise.json';

const initialState = {
    exercise,
    detailView: false, // shows actual detail view when pressed
    exerciseSelected: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_EXERCISE':
            // remember this changes the state
            return {
                ...state, // current state (copy)
                detailView: true, // then adds changes
                exerciseSelected: action.payload // this selected exercise will pass onto this reducer.
            }
        case 'NONE_SELECTED':
            // remember this changes the state
            return {
                ...state, // current state (copy)
                detailView: false, // then adds changes
                exerciseSelected: null // this selected exercise will pass onto this reducer.
            }
        default:
            return state;
    }
}