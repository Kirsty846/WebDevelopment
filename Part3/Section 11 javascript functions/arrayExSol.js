function printReverse(forwardArray)
{
    for(var i = forwardArray.length-1;i>=0;i--)
    {
        console.log(forwardArray[i]);
    }
}

console.log("start");
printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);

function isUniform(uniformArray)
{
    var first =uniformArray[0];
    for(i = 1;i<uniformArray.length;i++)
    {
        if(uniformArray[i] !== first)
        {
            return false;
        }
        
    }
    return true;
}

console.log("start");
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","c","d"]);
isUniform(["a","a","a","a"]);

function sumArray(addArray)
{
    var sum = 0;
    addArray.forEach(function(eachElement)
    {
        sum += eachElement;
    });
    console.log(sum);
}

console.log("start");
sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function max(maxArray)
{
    var maximum = maxArray[0];
    for(var i = 1; i< maxArray.length;i++)
    {
        if(maxArray[i]>maximum)
        {
            maximum = maxArray[i];
        }
    }
    console.log(maximum);
}

console.log("start");
max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

var arr = [1,2,3]

function myForEach(arr, func)
{
    for(var i = 0; i < arr.length; i++)
    {
        func(arr[i]);
    }
}

var colors = ["red", "orange","green"];

myForEach(colors, console.log);

myForEach(colors, function(arrElement){
    console.log(arrElement);
});

Array.prototype.myForEach = function(func){
    for(var i = 0; i<this.length;i++)
    {
        func(this[i]);
    }
}