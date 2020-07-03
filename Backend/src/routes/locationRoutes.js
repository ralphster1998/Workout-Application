import { 
    addNewLocation, 
    getLocations, 
    getLocationWithID, 
    updateLocation,
    deleteLocation 
} from '../controllers/locationController';

const routes = (app) => {
    app.route('/location')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getLocations)
    
    // POST endpoint
    .post(addNewLocation);

    app.route('/location/:locationId')
    // get specific Location
    .get(getLocationWithID)
    
    // put request
    .put(updateLocation)

    // delete request
    .delete(deleteLocation);
}

export default routes;
