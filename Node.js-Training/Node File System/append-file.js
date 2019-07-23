var fs=require('fs');

fs.appendFile('test.txt','Lets learn file system operation!.',function(err,data){
    if(err){
        throw err;
    }
    console.log("Write operation completed");
})