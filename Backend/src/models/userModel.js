import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
