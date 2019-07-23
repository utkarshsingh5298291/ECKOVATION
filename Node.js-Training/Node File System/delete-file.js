var fs=require('fs');

fs.unlink('delete.txt',function(err){
    if(err){
        throw err;
    }
    console.log("The file is succesfully deleted.")
});