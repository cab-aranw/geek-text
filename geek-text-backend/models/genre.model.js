const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const genreSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    }
});

const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
