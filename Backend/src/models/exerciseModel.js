import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExerciseSchema = new Schema({
    exercise_name: {
        type: String,
        required: 'Enter the exercise name'
    },
    goal_reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    curr_reps: {
        type: Number
    },
    url_link: {
        type: String
    },
    notes: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
