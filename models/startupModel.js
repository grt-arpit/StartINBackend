const {Schema , model} = require("../connection");
const bcrypt=require('bcrypt');

const schema = new Schema({
    title:String,
    name:String, 
    description:String,
    documents: Array,
    email:String,
    password:String,
    thumbnail:String,
    year:Number,
    phone:Number,
    teamInfo:Object,
    details:Array,
    createdAt:Date,
})

//here we are hashing the password
schema.pre('save',function(next){
    console.log("hi hashing!");
    if(this.isModified('password')){
this.password=bcrypt.hash(this.password, 12);
    }
    next(); 
});
 
module.exports=model("startup",schema);