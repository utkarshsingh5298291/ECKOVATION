function setCookie(cname,cvalue,exdays)
{
    var d=new Date();
    d.setTime(d.getTime() +(exdays *24 *60 *60 *1000));
    var expires="expires=" + d.toUTCString();
    document.cookie=cname+ "=" + cvalue +";" +expires + ";path=/";
}

//function to get cookie

function getCookie(cname)
{
    var name=cname+ "=";
    var dc=decodeURIComponent(document.cookie);

    var ca=dc.split(';');

    for(var i=0;i<ca.length;i++)
    {
        var c=ca[i];
        while(c.charAt(0)==' ')
        {
            c=c.substring(1);
        }
        if(c.indexOf(name)==0)
        {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function checkCookie(){
    var uname=getCookie("uname");
    if(uname !=""){
        alert("wlcome back " +uname);
                  }
        else{
            uname=prompt("Enter your name", "");

            if(uname!="" &&uname!=null)
            {
                setCookie("uname",uname,30);
            


            }
    }
}