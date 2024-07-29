
//creating server using node
const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>hello rahul</h1>");
        res.end();
    }else{
        res.end("Invalid url:404");
    }
});
server.listen(8001,()=>{
    console.log("server started");
})
