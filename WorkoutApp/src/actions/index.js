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

