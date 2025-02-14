const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : false
    },
    address : {
        type : String,
        required : false
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User