import bodyParser from 'body-parser';
import { Router } from 'express'
import { Genre } from '../models/genreModel.js'

const router = Router();
// Handle get request
router.route('/').get((req, res)=>{
    Genre.find()
    .then(genres => res.json(genres))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Handle post request
router.route('/add').post((req,res) => {
    
    const name = req.body.name;

    const newGenre = new Genre({
        name
    })

    newGenre.save()
    .then(() => res.json('Genre added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;