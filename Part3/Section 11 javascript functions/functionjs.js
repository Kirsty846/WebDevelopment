function sayhi(){
    console.log("test1");
    console.log("test2");
}

//sayhi();

var user;
function sayHello(user,surname){
    console.log("Hello " + user+ " " +surname) ;
}

//sayHello("jenny","adams");

function square(x)
{
    return x*x;
}

//var answer = square(4);
//console.log("test" + answer);

function capitalize(str)
{
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function isEven(num)
{
    if(num%2 == 0)
    {
    return true;
    }
    else
    {
    return false;
    }

    //return num % 2 === 0

}
var testNum = 3;
console.log(testNum + " is " + isEven(testNum))
var testNum = 6;
console.log(testNum + " is " + isEven(testNum))
var testNum = 7;
console.log(testNum + " is " + isEven(testNum))

function factorial(num2)
{
    factVar=1;
    for(i=num2; i >0; i--)
    {
        factVar = factVar*i;    //factVar*= i
    }
    return factVar;
}

var testNum = 5;
console.log(testNum + " is " + factorial(testNum))
var testNum = 2;
console.log(testNum + " is " + factorial(testNum))
var testNum = 10;
console.log(testNum + " is " + factorial(testNum))
var testNum = 0;
console.log(testNum + " is " + factorial(testNum))

function kebabToSnake(stringVar)
{
    //return newString = stringVar.replace('-','_');
    return newString = stringVar.replace(/-/g,"_");
}
var testNum = "hello-world";
console.log(testNum + " is " + kebabToSnake(testNum))
var testNum = "dogs-are-awesome";
console.log(testNum + " is " + kebabToSnake(testNum))
var testNum = "blah";
console.log(testNum + " is " + kebabToSnake(testNum))