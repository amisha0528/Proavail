const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    graphicP :{
        type : String,
       required : true
     }
})

const Servicesprovided = new mongoose.model("Servicesprovided", servicesSchema );
module.exports = Servicesprovided;