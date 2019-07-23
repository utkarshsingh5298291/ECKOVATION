const http =require('http');
const server=http.createServer((req,res)=>{
    console.log("hello");

}).listen(3000);
