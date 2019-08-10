var express=require('express');
var app=express();

app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.set("view options",{layout:false});


const employees=[
    {
        empID:101,
        empName:'king kochler',
        empDesignations:'Software Developer',
        empLocations:'New Delhi',
        empSalary:50000
    },
    {
        empID:102,
        empName:'John Smith',
        empDesignations:'Software Tester',
        empLocations:'Mumbai',
        empSalary:40000
    },
    {
        empID:103,
        empName:'Sarah Bowling',
        empDesignations:'Database Admin',
        empLocations:'Bangalore',
        empSalary:35000
    }

]

app.get('/',function(req,res){
    res.render('index',{
        message:'Hello ,this is Utkarsh.',
        //Array 
        people: ['king kochler','John Smith','Sarah Bowling','Gautam Bhalla'],
       //Array of object
        data:[
            {id:101,name:'king kochler'},
            {id:102,name:'John Smith'},
            {id:103,name:'Sarah Bowling'},
        ]
    });

})

//The ejs pages included
app.get('/home',function(req,res){
    res.render('pages/home');
});

app.get('/about',function(req,res){
    res.render('pages/about');
});

app.get('/employees',function(req,res){
    res.render( 'pages/employees',{
        employees:employees
    });
});

app.listen(5000,function(){
    console.log("Server is listening at port 5000.")

});