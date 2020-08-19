import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String
});

const User = mongoose.model('user', UserSchema);

var IndexedUser = new mongoose.Schema({
    googleId: { 
        type: String, 
        index: true 
    }
})

IndexedUser.index({ googleId: -1 })
const UserWithIndex = mongoose.model('UserWithIndex', IndexedUser)
module.exports = { User, UserWithIndex };
