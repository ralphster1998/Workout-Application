const initialState = {
    exercise: [],
    detailView: false, // shows actual detail view when pressed
    exerciseSelected: null,
    exerciseName: '',
    category: '',
    currentReps: '',
    goalReps: '',
    url: '',
    _id: '',
    toUpdate: false, // check if it's true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                exercise: action.payload,
        }
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
            return {
                ...state,
                exerciseName: '',
                category: '',
                currentReps: '',
                goalReps: '',
                url: '',
            }

        case 'ADD_EXERCISE':
            return {
                ...state,
                ...action.newExercise
            }
        
        case 'DELETE_EXERCISE':
            return {
                ...state,
                detailView: false,
                exerciseSelected: null
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                toUpdate: true,
                exerciseName: action.payload.exerciseName,
                category: action.payload.category,
                currentReps: action.payload.currentReps,
                goalReps: action.payload.goalReps,
                url: action.payload.url,
                _id: action.payload._id,
        }

        case 'SAVE_EXERCISE':
            return {
                ...state,
                toUpdate: false, // this helps to see the DetailView
                detailView: false,
                exerciseName: '',
                category: '',
                currentReps: '',
                goalReps: '',
                url: '',
                _id: ''
            }

        default:
            return state;
    }
}