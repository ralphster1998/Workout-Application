export const selectExercise = (exerciseId) => {
    return {
        type: 'SELECTED_EXERCISE',
        selectId: exerciseId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',

    };
};

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value }
    };
};

// this connects to the back end
export const createNewExercise = ({ exerciseName, category, currentReps, goalReps, url }) => {
    return (dispatch) => {
        fetch('http://localhost:3000/exercise', { // for now, you are saving it in your computer server, NOT IN EXPO
            method: 'POST',
            body: JSON.stringify({
                "exerciseName": exerciseName,
                "category": category,
                "currentReps": currentReps,
                "goalReps": goalReps,
                "url": url,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => console.log(response))
        .then(() => {
            dispatch({ type: 'NEW_EXERCISE' })
        })
        .catch(error => console.log(error))
    };
};

// this loads our new exercises
export const loadInitialExercises = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/exercise')
            .then((response) => {
                return response.json();})
            .then((data) => {
                dispatch({ type: 'INITIAL_FETCH', payload: data })
            })
            .catch(error => console.log(error))
    };
};

export const deleteExercise = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/exercise/${id}`, { method: "DELETE" } )
            .then(() => {
                dispatch({ type: 'DELETE_EXERCISE' });
            })
    }
}

export const updateExercise = (exercise) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: exercise,
    }
}

export const saveExercise = ({ exerciseName, category, currentReps, goalReps, url, _id }) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/exercise/${_id}`, { // for now, you are saving it in your computer server, NOT IN EXPO
            method: 'PUT',
            body: JSON.stringify({
                "exerciseName": exerciseName,
                "category": category,
                "currentReps": currentReps,
                "goalReps": goalReps,
                "url": url,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => console.log(response))
        .then(() => {
            dispatch({ type: 'SAVE_EXERCISE' })
        })
        .catch(error => console.log(error))
    };
}