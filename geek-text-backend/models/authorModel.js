import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const authorSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    }, 
    bio: {
        type: String,
        maxlength: 1800,
    }, 
    books:{
        type: [Schema.Types.ObjectId],
        ref: 'Book',
        default: []
    },
});

export const Author = mongoose.model('Author', authorSchema);

