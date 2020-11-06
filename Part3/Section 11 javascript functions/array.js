var colors  = ["red", "orange","yellow"];
colors[3] = "green" //add to green

var arrayLength = colors.push("black");     //add "black" to end, returns length
var elementremoved = colors.pop();           //remove "black" from end

var elementremovedshift = colors.shift();              //remove "red" from front 
var arrayLengthshift  = colors.unshift("black");       //add "black" to front

var indexOfOrange = colors.indexOf("orange");   //returns index of "orange"

var newarray = colors.slice(1,3);   // array with only orange and yellow

console.log(arrayLength);
console.log(elementremoved);

console.log(elementremovedshift);
console.log(arrayLengthshift );

console.log(indexOfOrange);
console.log(newarray);

var friend = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(friend[2][0]);