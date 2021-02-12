const router = require('express').Router();
let User = require('../models/user.model');

// Handle get request
router.route('/').get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Handle post request
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        name,
        password,
        email,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
