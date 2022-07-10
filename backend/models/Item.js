const mongoose = require('mongoose');
const { Schema } = mongoose;

const currentTime=new Date();
const localtime=currentTime.toLocaleString();

const UserSchema = new Schema({
    Item_Name: {
        type: String,
        required: true,
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Description:{
        type:String,
        default:'No description provided'
    },
    Tag: {
        type: String,
        required: true,
        default: 'general'
    },
    Place: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
    Record_date: {
        type: String,
        default: localtime
    },
    Contact_No: {
        type: Number,
        required: true
    },
    Status:{
        type:Boolean,
        required:true
    },
    Category:{
        type:String,
        required:true
    }
})
// our table name inside lostandfound database for storing information about the user is going to be in L&F_Users.
const User = mongoose.model('L&F_ITEMS', UserSchema);
module.exports = User;