import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const genreSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export const Genre = mongoose.model('Genre', genreSchema);

