import mongoose from 'mongoose';
import { LocationSchema } from '../models/locationModel';

const Location = mongoose.model('Location', LocationSchema);

export const addNewLocation = (req, res) => {
    let newLocation = new Location(req.body);

    newLocation.save((err, location) => {
        if (err) {
            res.send(err);
        }
        res.json(location);
    });
};

export const getLocations = (req, res) => {
    Location.find({}, (err, location) => {
        if (err) {
            res.send(err);
        }
        res.json(location);
    });
};

export const getLocationWithID = (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
        if (err) {
            res.send(err);
        }
        res.json(location);
    });
}

export const updateLocation = (req, res) => {
    Location.findOneAndUpdate({ _id: req.params.locationId}, req.body, { new: true }, (err, location) => {
        if (err) {
            res.send(err);
        }
        res.json(location);
    })
}

export const deleteLocation = (req, res) => {
    Location.remove({ _id: req.params.locationId }, (err, location) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Deleted location'});
    })
}