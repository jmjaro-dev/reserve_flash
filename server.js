const express = require('express');//backend framework
const mongoose = require('mongoose');//database connection
const config = require('./config/keys');//MongoDbURI
const passport = require('passport'); // Passport
require('./config/passport'); // Passport Strategies from 'passport.js'

//App
const app = express();
const port = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());

//Database configuration, Configures through config file
const db = config.mongoURI;

//Checking the connection of database
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(_ => console.log('MongoDb Connected ...'))
    .catch(err => console.log(err));

//Routes
app.use('/users', require('./routes/users'));

// Facebook Strategy routes
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
  });

// Google Strategy routes
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  app.get('/auth/google/callback',
    passport.authenticate('google'), (req, res) => {
      res.redirect('/profile');
    });

//PORT caller
app.listen(port, _ => console.log(`Server is running in port: ${port}`));