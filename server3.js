//server created by exprss.js
const express = require('express');
const bodyparser=require('body-parser');
const path = require('path');
const mongoose=require('mongoose');
const User=require('./backend/user');


const app = express();

mongoose.connect('mongodb://localhost:27017/database1');


app.use(express.urlencoded({extended:true}));

//this work with folder all files
app.use(express.static(path.join(__dirname,"./public")));

app.get('/home', function (req, res) {
    //this work with only one file
  res.sendFile(__dirname+"/home.html");
})
app.post('/',async(req,res)=>{
    const data=new User(req.body);
    await data.save();
    res.send(req.body);
});


app.listen(8003,()=>{
    console.log("server started on port:8003");
})