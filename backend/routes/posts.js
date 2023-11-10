const User = require('./../models/User.js');
const router = require('express').Router();
const Post = require('./../models/Post.js');

// Create Post
router.post("/", async(req,res)=>{
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    console.log(savedPost);
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Post
router.put("/:id", async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id);
    
    if(req.body.username === post.username){
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id , {
          $set:req.body,
        },{new :true});
        console.log(updatedPost);
        res.status(200).json(updatedPost); 
      } catch (error) {
        res.status(500).json(error);
      }

    }else{
      res.status(401).json("You can Update only your post!");
    }

  } catch (error) {
    res.status(500).json(error);
  }
});


// Delete Post
router.delete("/:id", async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username){
      try {

        const updatedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been Deleted :)");

      } catch (error) {
        res.status(500).json(error);
      }
    }
    else{
      res.status(401).json("You can Delete only your post :(");
    }

  } catch (error) {
    res.status(500).json(error);
  }
});


// Get Post 
router.get("/:id" , async(req,res)=>{
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error); 
    }
});

// Get All Post
router.get("/", async(req,res)=>{
  const username = req.query.user;
  const cateName = req.query.cat;
  try {
    let posts;
    if(username){
      posts =await Post.find({username});
    }else if(cateName){
      posts = await Post.find({categories:{
        $in:[cateName]
      }})
    }else{
      posts = await Post.find();
    }
    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;