const User = require('./../models/User.js');
const router = require('express').Router();
const bcrypt = require('bcrypt');


// Register
router.post("/register", async(req,res)=>{
  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser =new User({
      username:req.body.username,
      email:req.body.email,
      password: hashedPass,
    });
    console.log(newUser);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
})

// Login
router.post("/login", async(req,res)=>{
  try {
    const user =await User.findOne({username: req.body.username});
    !user && res.status(400).json("Wrong Credentials !")
  
    const vaildated = await bcrypt.compare(req.body.password, user.password);
    !vaildated && res.status(400).json("Wrong Credentials !")
  
    // Every thing is vaild then return response

    // Hidding password from user
    const { password , ...others } = user._doc;

    console.log(others);
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
})


module.exports = router;