const mongoose=require('mongoose');
const mongouri="mongodb://localhost:27017/LostandFound?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectTomongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log('connection to mongodb successful congratulations !');
    })
}
module.exports=connectTomongo;




//!purpose of db.js => it is connecting mongodb to us using mongoose.