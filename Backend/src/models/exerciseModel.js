import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: 'Enter the exercise name'
    },
    currentReps: {
        type: Number
    },
    goalReps: {
        type: Number
    },
    url: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
