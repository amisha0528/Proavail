const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
    businessname :{
        type : String,
        required: true
    },
    username :{
        type : String,
    },
    phone :{
        type : String,
        required: true,
        unique: true
    },
    email :{
        type : String
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
    },
    verification:{
        type : String,
       required : true
     },
    services :{
        type : [String],
        required:true
    },

    timing :{
        type: String,
        required: true
    },
    days:{
        type: String,
        required: true
    },
    avatar: {
        type: String  
    }
})

const Signprovider = new mongoose.model("Signprovider", providerSchema);
module.exports = Signprovider;