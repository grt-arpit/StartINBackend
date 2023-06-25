const {Schema , model} = require("../connection");
const bcrypt=require('bcrypt');

const schema=new Schema({
    fname:String,
    lname:String,
    email:String,
    contact:String,
    password:String,
    
    
   

})

//here we are hashing the password
schema.pre('save',function(next){
    console.log("hi hashing!");
    if(this.isModified('password')){
this.password=bcrypt.hash(this.password, 12);
    }
    next(); 
});

module.exports=model("admin",schema);