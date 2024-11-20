const express=require('express')
const { registerUser, loginUser } = require('../Controllers/userCtrl')


const signupRouter=express.Router() //2

// Route for user registration
signupRouter.post('/',registerUser)
signupRouter.post('/login',loginUser)

module.exports=signupRouter;

