const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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
        default : 'Prefer Not to Say',
    },
    department : {
         type : String,
         required : true
    }       
})


module.exports = mongoose.model('Admin',adminSchema);