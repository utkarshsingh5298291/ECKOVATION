var fs=require('fs');

fs.writeFile('test.txt','Hello World',function(err,data){
    if(err){
        throw err;
    }
    console.log("Write operation completed");
})