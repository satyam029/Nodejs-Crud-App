const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true,
    },
    moblieNo :  {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        default : 'Prefer Not to Say',
    },
    tech : {
         type : String,
         required : true
    }       
})


module.exports = mongoose.model('User',userSchema);