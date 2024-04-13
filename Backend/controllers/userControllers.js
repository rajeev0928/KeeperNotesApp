const User = require('../models/userModel');
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }
  

//login
const loginUser = async (req,res)=>{
    const {email, password} = req.body
     
    try {
      const user = await User.login(email, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
   
}

//signup
const signupUser = async (req,res)=>{
    const {email, password} = req.body
   console.log(email,password);
  try {
    const user = await User.signup(email, password)

    //create a token

    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
    console.log(error);
  }
 
}

module.exports = {
   loginUser,
   signupUser
   }