const mongoose=require('mongoose');
const {Schema} = mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
// our table name inside lostandfound database for storing information about the user is going to be in L&F_Users.
const User=mongoose.model('L&F_Users', UserSchema);
module.exports=User;