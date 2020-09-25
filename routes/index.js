var express = require('express');
var router = express.Router();
const marin = require("../models/schema");

/* GET home page. */
router.get('/', function(req, res, next) {
  let marinAs= [];
  res.render('index', { title: "Les Argonautes" ,marinAs});
});

router.post("/add", async (req,res,next)=>{
let name = req.body.name
const newMarin = new marin({
    name:name 
  })

await newMarin.save()
  

let marinAs = await marin.find()
res.render("index",{ title: "Les Argonautes" ,marinAs:marinAs})
})

module.exports = router;
