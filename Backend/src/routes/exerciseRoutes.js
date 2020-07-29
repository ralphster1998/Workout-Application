import { 
    addNewExercise, 
    getExercises, 
    getExerciseWithID, 
    updateExercise,
    deleteExercise
} from '../controllers/exerciseController';
import { loginRequired, login, register } from '../controllers/userControllers'

const routes = (app) => {
    app.route('/exercise')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, loginRequired, getExercises)
    
    // POST endpoint
    .post(loginRequired, addNewExercise);

    app.route('/exercise/:exerciseId')
    // get specific Location
    .get(loginRequired, getExerciseWithID)
    
    // put request
    .put(loginRequired, updateExercise)

    // delete request
    .delete(loginRequired, deleteExercise);

    // login route
    app.route('/login')
        .post(login);
        
    // registration route
    app.route('/auth/register')
        .post(register);
}

export default routes;
