const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Creating Server
const PORT = 9000;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
 });
 app.use(express.json());


 //Connections to db
const url = 'mongodb://localhost/Crud';
mongoose.connect(url ,{useNewUrlParser:true});

const connec = mongoose.connection

connec.on('open',function(){
    console.log("Connected.....");
});

//Shifting control to user router
const userRouter = require('./routers/user');
app.use('/user',userRouter);



//Shifting control to admin router
const adminRouter = require('./routers/admin');
app.use('/admin',adminRouter);

