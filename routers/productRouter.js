const express = require("express");
const router = express.Router();
const Model = require("../models/productModel");


router.post('/add',(req,res) =>{
    const formdata=req.body;
     console.log(req.body);
   
    //create operation of crud
    new Model(formdata).save()
    .then((result) => {//shortcut used is thenc
        console.log("product added ");
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
}); 

//this is used for feched all user data
router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log("product data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbystartup/:id", (req, res) => {
  Model.find({startup : req.params.id})
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});



router.put("/update/:id", (req, res) => {
  const formdata = req.body;
  //to find the entry by id and update with formdata
  Model.findByIdAndUpdate(req.params.id, formdata, {new : true})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

// to find the entry by id and update with formdat
module.exports = router;
