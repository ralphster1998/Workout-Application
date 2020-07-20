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
                exerciseSelected: action.selectId// this selected exercise will pass onto this reducer (FIXED IN DEBUGGER)
            }
        case 'NONE_SELECTED':
            // remember this changes the state
            return {
                ...state, // current state (copy)
                detailView: false, // then adds changes
                exerciseSelected: null // this selected exercise will pass onto this reducer.
            }

        case 'FORM_UPDATE':
            return {
                ...state, // current state (copy)
                [action.payload.prop]: action.payload.value // when we do updates to form, it will update state to particular form
            }
        
        case 'NEW_EXERCISE':
            return initialState;

        case 'ADD_EXERCISE':
            return {
                ...state,
                ...action.newExercise
            }
        default:
            return state;
    }
}