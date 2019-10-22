const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name:String,
    password:String,
    email:String,
    
   
});

mongoose.model("user",UserSchema)