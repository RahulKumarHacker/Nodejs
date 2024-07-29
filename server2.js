//creating server using express.js
const express = require('express');
const bodyparser=require('body-parser');
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to express.js server2')
})
app.get('/:name', function (req, res) {
  if(req.params.name=='home'){
    res.sendFile(__dirname+"/home.html");

  }else{
    res.send('Wrong Path: '+req.params.name);
  }
})

app.listen(8002,()=>{
    console.log("server started on port:8002");
})