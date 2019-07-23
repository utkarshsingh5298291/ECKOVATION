//pre pakaged modules in node.js
var os=require('os');

console.log("Host: " + os.hostname());
console.log("Free memory:" + os.freemem());
console.log("Total memory in bytes:" +  os.totalmem());