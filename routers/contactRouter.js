const express = require("express");
const router=express.Router();
const Model=require("../models/contactModel");

router.post('/add',(req,res) =>{
    const formdata=req.body;
     console.log(req.body);//used to get the data in post
   // res.send("request processed in user router");
   
    //create operation of crud
    new Model(formdata).save()   
    .then((result) => {//shortcut used is thenc
        console.log("data sucessfully saved in contact ");
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);  
    });
  });
    

// for login page
router.post( '/authenticate', (req, res) => {

  const formdata = req.body;
//findone is used to find first entry 
  Model.findOne({email : formdata.email, password : formdata.password})
  .then((userdata) => {
    if(userdata){
      console.log('login success');
      res.status(200).json(userdata);
    }else{
      console.log('login failed');
      res.status(300).json({loginStatus : false})
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})



  // to find the entry by id and update with formdat
module.exports=router;