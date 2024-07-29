const express = require('express');
const data1 = require('./jsondata/data1.json');
const app = express();


app.get('/',(req,res)=>{
    res.send("server4 home page")
});

app.get('/api',(req, res)=> {
  res.json(data1);
})

app.listen(8004,()=>{
    console.log("server started on port:8004");
})