const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    requied:true,
    unqiue:true
  },
  email:{
    type:String,
    required:true,
    unqiue:true
  },
  password:{
    type:String,
    required:true
  },
  profilePicture:{
    type:String,
    default:"",
  }
  },
  {timestamps:true}
);

module.exports = mongoose.model('User', UserSchema);