const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:String},
    address:{type:String}
});
const User=mongoose.model('User',userSchema);
module.exports=User;
