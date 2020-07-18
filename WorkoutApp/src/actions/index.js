export const selectExercise = (exerciseId) => {
    return {
        type: 'SELECTED_EXERCISE',
        selectId: exerciseId,
    };
};

export const noneExercise = () => {
    return {
        type: 'NONE_SELECTED',

    };
};

