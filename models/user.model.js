const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter your full name"]

     },

     userName: {
        type: String,
        required: [true, "please enter your username"]

     },

     phoneNumber: {
        type: String,
        required: [true, "please enter your phone number"]

     },

     passWord: {
        type: String,
        required: [true, "please enter your password"]

     },

     

},
     {
        timestamps: true
     }
);

const User = mongoose.model("user", UserSchema);

module.exports = User