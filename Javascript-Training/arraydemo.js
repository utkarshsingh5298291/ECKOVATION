var names=['user','manager','tester'];
var names1=new Array('user','manager','tester');
names[1]="aka";

text="<ul>"
names.forEach(myfun);

 function myfun(value)
 {
    text+="<li>"+value ;
 }
 document.write(text);

console.log(names.sort());
console.log(names1[names1.length -1]);

names.push('supervisor');
console.log(names.join(names1));
document.write(names);

names.splice(2,1,'user1','user2');
console.log(names);

var a=names.concat(names1);
