function doMath ()
{
    var x=40;
    console.log(x)
}

var y =50;
function doMath ()
{
    console.log(y)
}

function sing(){
    console.log("twinkle twinkle..");
    console.log("how i wonder...");
}
 
sing();

//setInterval(sing,1000)
//clearInterval(2);

setInterval(function{
    console.log("twinkle twinkle..");
    console.log("how i wonder...");
},1000)