const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')


//getting the all user
router.get('/',async function(req,res){
    try {
        const admins =  await Admin.find();
        res.json(admins);
    } catch (error) {
        res.send("Error "+error);
    }
})

//getting the user by id
router.get('/:id',async function(req,res){
    try {
        const admin =  await Admin.findById(req.params.id) ;
        res.json(admin);
    } catch (error) {
        res.send("Error "+error);
    }
})

//adding new user
router.post('/',async function(req,res){
    const admin = new Admin({
        name : req.body.name,
        age  : req.body.age,
        moblieNo : req.body.moblieNo,
        gender  : req.body.gender,
        department : req.body.department
    });
    try {
        const admin1 = await admin.save();
        res.send(admin1);
    } catch (error) {
        res.send("Error "+error);   
    }
})

//Changing department of admin
router.patch('/:id',async function(req,res){
    try {
        const admin =  await Admin.findById(req.params.id);
        admin.department = req.body.department;
        const admin1 = await admin.save();
        res.json(admin1);
    } catch (error) {
        res.send("Error "+error);
    }
})

//deleting admin by ID
router.delete('/:id',async function(req,res){
    try {
        const admin =  await Admin.findById(req.params.id);
        admin.delete();
        res.send("Admin deleted for id: "+req.params.id);
    } catch (error) {
        res.send("Error "+error);
    }
})


module.exports = router;