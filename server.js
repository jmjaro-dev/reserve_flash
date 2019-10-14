const express = require('express');//backend framework
const mongoose = require('mongoose');//database connection
const config = require('config');//MongoDbURI hiding

//App
const app = express();
const port = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());

//Database configuration, Configures through config file
const db = config.get('mongoURI');

//Checking the connection of database
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(_ => console.log('MongoDb Connected ...'))
    .catch(err => console.log(err));

//PORT caller
app.listen(port, _ => console.log(`Server is running in port: ${port}`));