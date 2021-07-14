import mongoose from 'mongoose';
import { ExerciseSchema } from '../models/exerciseModel';

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export const addNewExercise = (req, res) => {
    let newExercise = new Exercise(req.body);

    newExercise.save((err, exercise) => {
        if (err) {
            res.send(err);
        }
        res.json(exercise);
    });
};

export const getExercises = (req, res) => {
    Exercise.find({}, (err, exercise) => {
        if (err) {
            res.send(err);
        }
        res.json(exercise);
    });
};

export const getExerciseWithID = (req, res) => {
    Exercise.findById(req.params.exerciseId, (err, exercise) => {
        if (err) {
            res.send(err);
        }
        res.json(exercise);
    });
}

export const updateExercise = (req, res) => {
    Exercise.findOneAndUpdate({ _id: req.params.exerciseId}, req.body, { new: true }, (err, exercise) => {
        if (err) {
            res.send(err);
        }
        res.json(exercise);
    })
}

export const deleteExercise = (req, res) => {
    Exercise.remove({ _id: req.params.exerciseId }, (err, exercise) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Deleted exercise'});
    })
}