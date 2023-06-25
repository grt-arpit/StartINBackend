const mongoose = require('mongoose');


const url=`mongodb+srv://AbhinavT:7237862703@cluster0.mf0s0jk.mongodb.net/test`;

// it will return promise
mongoose.connect(url)
.then((result) => {
    console.log("database connected");
}).catch((err) => {
    console.error(err);
});
module.exports=mongoose;