const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// NOT COMPLETE
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique : true //wac
    },
    // TODO: Password must meet our current security standards
    password: {
        type: String,
        required: true,
        minlength: 8,
        unique : true //wac
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true //wac
    },

    homeAddress : {  //wac
        type : String,
        required : true,
        trim: true,
    },

    nickname : {    //wac
        type : String,
        required : true,
        trim: true,
        unique : true,
    },

    shippingAddress :{  //wac
        type : String,
        required : true,
        trim: true,
    },

  
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;

