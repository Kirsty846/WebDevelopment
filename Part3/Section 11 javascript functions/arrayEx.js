function printReverse(forwardArray)
{
    for(i = forwardArray.length-1;i>=0;i--)
    {
        console.log(forwardArray[i]);
    }
}

console.log("start");
printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);

function isUniform(uniformArray)
{
    var isUniform = "true";
    for(i = 0;i<uniformArray.length-1;i++)
    {
        if(uniformArray[i] !== uniformArray[i+1])
        {
            isUniform = "false";
        }
        
    }
    console.log(isUniform);
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
        sum = sum + eachElement;
    });
    console.log(sum);
}

console.log("start");
sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function max(maxArray)
{
    var maximum = -1000;
    maxArray.forEach(function(eachElement)
    {
        if(eachElement>maximum)
        {
            maximum = eachElement;
        }
    });
    console.log(maximum);
}

console.log("start");
max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

