import { Router } from 'express'
import { Book } from '../models/bookModel.js'
const router = Router();
// Handle get request
router.route('/').get((req, res)=>{
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Handle post request
router.route('/add').post((req,res) => {
    const newBook = new Book(req.body)
    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
