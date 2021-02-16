const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// NOT COMPLETE
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // TODO: Password must meet our current security standards
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        trim: true
    },


});

const User = mongoose.model('User', userSchema);

module.exports = User;

