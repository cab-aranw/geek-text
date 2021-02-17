const router = require('express').Router();
let Genre = require('../models/genre.model');

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

module.exports = router;