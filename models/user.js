var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    googleId: String
});

module.exports = mongoose.model('User', userSchema);