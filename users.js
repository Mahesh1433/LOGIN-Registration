const mongoose=require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
   
  
});

     


const User = module.exports=mongoose.model('User',UserSchema);

