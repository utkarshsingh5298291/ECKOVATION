//third party module-npm,yarn->cmd line tool ,open source
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url =='/')
    {
        res.writeHead(200,{"Context-Type":"text/html"});
        res.write("<h1>This is a home page.</h1>");
        res.write("This is a home page.");
        res.end();
    }
   else if(req.url =='/user')
    {
        res.write("This is a user page.");
        res.end();
    }
   else if(req.url =='/admin')
    {
        res.write("This is an admin page.");
        res.end();
    }
    else if(req.url=='/data')
    {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify({"message":"Hello World!"}));
        res.end();
    }
    else{
        res.write("Invalid request.");
        res.end();
    }
});

server.listen(3000);
console.log('Node.js web server at the port 3000 is running.');