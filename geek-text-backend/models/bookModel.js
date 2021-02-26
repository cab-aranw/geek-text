import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const bookSchema = new Schema({

    title: {
        type: String, 
        maxlength: 50
    },

    author: {
       type: Schema.Types.ObjectId,
       ref: 'Author',
    },

    genre:{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },

    sold:{
        type: Number, 
        default: 0
    },

    comments:{
        type: [String],
        default: []
    },
    
    price:{
        type: Number, 
        default: 0
    },

    description:{
        type: String
    },

    cover:{
        type: String
    },

    releaseDate:{
        type: Date,
        required: true
    },

    publishingInfo:{
        publisher:{
            type: String
        },
        edition:{
            type: Number,
            minlength: 1
        },
        isbn:{
            type: String,
            unique: true,
            maxlength: 13,
            minlength: 13,
        }
    },

    rating:{
        type: Number,
        max: 5,
        min: 0,
        default: 0
    }

});


bookSchema.index({ 
    title:'text' 
})

export const Book = mongoose.model('Book', bookSchema);
