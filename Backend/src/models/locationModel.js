import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LocationSchema = new Schema({
    locationName: {
        type: String,
        required: 'Enter the location name'
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
