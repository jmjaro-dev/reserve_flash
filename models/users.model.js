const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User account Schema
const UsersSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    contactNo: {
        type: Number,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UsersSchema);

//importing of the User schema
module.exports = Users;