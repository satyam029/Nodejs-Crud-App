const express = require('express');
const router = express.Router();
const User = require('../models/user')


//getting the all admin
router.get('/',async function(req,res){
    try {
        const users =  await User.find();
        res.json(users);
    } catch (error) {
        res.send("Error "+error);
    }
})

//getting the admin by id
router.get('/:id',async function(req,res){
    try {
        const user =  await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.send("Error "+error);
    }
})

//adding new admin
router.post('/',async function(req,res){
    const user = new User({
        name : req.body.name,
        age  : req.body.age,
        moblieNo : req.body.moblieNo,
        gender  : req.body.gender,
        tech : req.body.tech
    });
    try {
        const user1 = await user.save();
        res.send(user1);
    } catch (error) {
        res.send("Error "+error);   
    }
})

//Changing tech of user
router.patch('/:id',async function(req,res){
    try {
        const user =  await User.findById(req.params.id);
        user.tech = req.body.tech;
        const user1 = await user.save();
        res.json(user1);
    } catch (error) {
        res.send("Error "+error);
    }
})


//deleting user by ID
router.delete('/:id',async function(req,res){
    try {
        const user =  await User.findById(req.params.id);
        user.delete();
        res.send("User deleted for id: "+req.params.id);
    } catch (error) {
        res.send("Error "+error);
    }
})


module.exports = router;