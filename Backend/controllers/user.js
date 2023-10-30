const bcrypt = require('bcrypt');
const validateRegistrationData = require("./Validation/Validation.js");
const User = require("../models/user");
const loginUser = async(req,res)=>{
 
};
const registerUser = async(req,res)=>{
   const err = validateRegistrationData(req.body);
   if(err){
      return res.json ({
         success: false,
         message: err.message,
      });
   }
    const userDetails = {
      name: req.body.name,
      email: req.body.email,
      country:req.body.country,
    }
    const plainTextPassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(plainTextPassword,salt);
    userDetails.password = hashPassword;
    const user = new User(userDetails);
     await user.save();
    res.json({
       success:true,
       message:"User created"
    })
}
module.exports ={
    loginUser,
    registerUser
}