let color : "red" | "green" |"blue";
color = "green";
//color = "yellow";

let data : null | number;
data = null;
data = 123;

function doSomething(data:null|number)
{
    console.log(data!*3);
    if(data==null)
    {

    }
    else{
        console.log(data*3);
    }
    
}
doSomething(3);