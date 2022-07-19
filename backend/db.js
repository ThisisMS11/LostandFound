const mongoose = require('mongoose');
const mongouri = "mongodb+srv://Mohitlostandfound:5NbZjpJz6zCjWG9P@cluster0.n1fwaei.mongodb.net/LostandFound?retryWrites=true&w=majority";


//! to connect with mongoDB compass
// mongodb://localhost:27017/LostandFound?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

const connectTomongo = () => {
    mongoose.connect(mongouri, () => {
        console.log('connection to mongodb successful congratulations 2!');
    })
}
module.exports = connectTomongo;




//!purpose of db.js => it is connecting mongodb to us using mongoose.