var data=document.getElementById("btn");

data.addEventListener("mouseover",fun1);
data.addEventListener("click",fun2);
data.addEventListener("mouseout",fun3);

function fun1()
    {
        document.getElementById("dem").innerHTML +="mouse over<br>";
    }

    
    function fun2()
    {
        document.getElementById('dem').innerHTML +="clicked <br>";
    }
    
    function fun3()
    {
        document.getElementById("dem").innerHTML +="mouse out <br>";
    }