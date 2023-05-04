const mongoose = require("mongoose");

const seekerSchema = new mongoose.Schema({
    fname :{
        type : String,
        required: true
    },
    lname :{
        type : String,
    },
    username :{
        type : String,
        required: true 
    },
    phone :{
        type : String,
        required: true,
        unique: true
    },
    email :{
        type : String,
        unique: true
    },
    gender :{
        type : String,
        required: true
    },
    address :{
        type : String,
        required: true
    },
    city :{
        type : String,
        required: true
    },
    pincode :{
        type : Number,
        required: true,
        
    },
    password :{
        type : String,
        required: true
    },
    confirmpassword :{
        type : String,
        required: true
    }
})

const Signseeker = new mongoose.model("Signseeker", seekerSchema);
module.exports = Signseeker;