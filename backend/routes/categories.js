const router = require('express').Router();
const Categories = require('./../models/Category.js');

// Create Category
router.post("/", async(req,res)=>{
  const newCate = new Categories(req.body);
  try {
    const savedCate = await newCate.save();
    res.status(200).json(savedCate);
  } catch (error) {
    res.status(500).json(error);

  }
});

// Get All Categories
router.get("/",async(req,res)=>{
  try {
    const cates = await Categories.find(); 
    res.status(200).json(cates);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;