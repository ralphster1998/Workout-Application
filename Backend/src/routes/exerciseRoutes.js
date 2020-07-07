import { 
    addNewExercise, 
    getExercises, 
    getExerciseWithID, 
    updateExercise,
    deleteExercise
} from '../controllers/exerciseController';

const routes = (app) => {
    app.route('/exercise')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getExercises)
    
    // POST endpoint
    .post(addNewExercise);

    app.route('/exercise/:exerciseId')
    // get specific Location
    .get(getExerciseWithID)
    
    // put request
    .put(updateExercise)

    // delete request
    .delete(deleteExercise);
}

export default routes;
