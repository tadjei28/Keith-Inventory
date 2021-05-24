const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    companyName :{
        type: String,
        required : true
    },

    username : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    ConfirmPassword: {
        type: String,
        required : true
    },

    date: {
        type : Date,
        default: Date.now
    }


})

const UserModel = mongoose.model('UserModel',UserModelSchema);

module.exports = UserModel;