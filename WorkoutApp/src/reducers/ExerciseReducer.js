import exercise from './exercise.json';

const initialState = {
    exercise,
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}