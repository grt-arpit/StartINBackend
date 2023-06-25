const {Schema , model} = require("../connection");
const bcrypt=require('bcrypt');

const schema=new Schema({
    fname:String,
    lname:String,
    email:String,
    contact:String,
    age:String,
    password:String,
    aadhar:String,
    createdAt:Date,
    approved:{type:Boolean,default:false},

   
   

})


//here we are hashing the password
schema.pre('save',function(next){
    console.log("hi hashing!");
    if(this.isModified('password')){
this.password=bcrypt.hash(this.password, 12);
    }
    next(); 
});

module.exports=model("investor",schema); 