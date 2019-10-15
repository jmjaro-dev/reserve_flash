//Registration and authentication

//This file will contain the routes for Registration and Authentication of the user

const express = require('express');
const router = express.Router();

//For password hash
const bcrypt = require('bcryptjs');

//User model
const Users = require('../models/users.model');

//Routers

//Route Action - POST
//Description  - Register User on the database
router.post('/register', (req, res) => {

    //Body Request
    const {
        fullName,
        contactNo,
        dob,
        email,
        password
        // password2
    } = req.body

    let errors = [];
    //Authentication
    if (!fullName && !contactNo && !dob && !email && !password) {
        res.status(400).json({ msg: 'All fields are empty' });
        errors.push({ msg: 'All fields are empty' });
    }

    //Password and rePassword Verification
    //Gavee: Ill apply this when there is already an UI
    // if(password !== password2){
    //     res.status(400).json({ msg: 'Password is incorrectly verified'});
    //     errors.push({msg:'Password is incorrectly verified'});
    // }

    //Password Length
    if (password.length < 6) {
        res.status(400).json({ msg: 'Password length must be 6 characters long' })
    }
    else {
        //Saving the request in the Users Schema
        const newUser = new Users({
            fullName,
            contactNo,
            dob,
            email,
            password
        });

        //Check if there's a user already registered
        Users.findOne({ email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ msg: "Email already registered" })
                }
            })
            .catch(err => res.status(400).json(`Error: ${err}`));


        //Hashing the password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                //Check if theres an error in hashing
                if (err) throw err;

                //else if there's no error
                newUser.password = hash;

                //Saving the new User
                newUser.save()
                    .then(_ => res.json('User Registered'))
                    .catch(err => res.json(`Error: Not Registered (${err})`))
            })
        })
    }


});

module.exports = router;
