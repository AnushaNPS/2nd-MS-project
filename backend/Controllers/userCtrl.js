const user = require("../model/user");
const bcrypt=require('bcryptjs')


const registerUser=async(req,res)=>{
    const {firstName,lastName,email,password,confirmPassword}=req.body;


    // check for password confirmation match
    if(password !==confirmPassword){
        return res.status(400).json({message:"Passwords do not match"})
    }
    try {
        // check if email already user exists
        const emailExists=await user.findOne({email})
        if(emailExists){
            return res.status(400).json({message:"Email is already registered"})
        }

        // hash the password

        //   what is Salt?
        // A salt is a random piece of data added to a assword before it's hashed.It serves as an  additional input to the hashing function.

        // Prevent Identical Hashes:without salt ,if two users have the same password(e.g.,"password123"),their hashed passwords would also be the same.This could allow attackers to guess passwords more easily or use  precomputed hashes(known as rainbow tables)to crack them.
        
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        // the number 10 here is the "salt rounds".
        // A higher number means more rounds of comutation,which makes the process slower and more secure but also more resource-intensive.

        // by default ,10 rounds are often  considered a good balance between security and performace.

        // So, bcrypt.genSalt(10) generates a salt eith 10 rounds,which is strong enough for most use cases.

        // bcrypt.hash(password,salt):
        // This function takes the original password and the generated salt,combines them,and hashes them together.

        // create new user with hashed password

        const newUser=await user.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
            
        });

        res.status(201).json({
            message:'user registered successfully', data:newUser
        });
    } catch (error){
        res.status(500).json({message:"server error"})  
    }
};

// login user

const loginUser=async(req,res)=>{
    const {email,password}=req.body;

    try {
        // check if user exists
        const userExists=await user.findOne({email});

        if(!userExists){
            return res.status(400).json({message:"Invalid email"})
        }

        // ompare entered pasword with store hashed password
        const isMatch=await bcrypt.compare(password,userExists.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"})
        }

        // successfull login
        res.json({message:"Login successsfull",data:userExists})
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}

module.exports={
    registerUser,
    loginUser
}