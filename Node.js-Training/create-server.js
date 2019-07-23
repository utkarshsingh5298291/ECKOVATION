var http=require('http');

var server=http.createServer(function(req,res){
    //handle incoming requests
    res.write("hello worldk ");
    res.end();
});

server.listen(5000);
console.log("Node web server is running at port 5000.");