//var user=new Object();

// user.name="Utkarsh";
// user.address="Varanasi";

// document.write(user.name +" "+ user.address);
// document.write(`${user.name} ${user.address}`);

//................above or the down way.................

function user(name,address)
{
    this.name=name;
    this.address=address;
    this.mycall=function (){
        console.log("You called me..");
    }
}

var myuser=new user("admin","varanasi");
myuser.mycall();
document.write(`${myuser.name} ${myuser.address}`);