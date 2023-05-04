const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fname :{
        type : String,
        required: true
    },
    lname :{
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    },
    question :{
        type : String,
       required : true
     }
})

const contactwo = new mongoose.model("contactwo", contactSchema );
module.exports = contactwo;