/*
var dog = {
    name: "Rusty",
    breed: "Mutt",
    age: 3
}
console.log(dog["age"]);
console.log(dog.age);
console.log(dog.name);

dog.age += 1;
console.log(dog["age"]);

dog.name = "doggy";
console.log(dog.name);
*/

var dogsArray = ["rusty", "lucky", "Bubbba"];

var dogObject = {
    name: "bubba",
    breed: "lab"
}

dogsArray[1];
dogsArray.push("wyatt"); //add to array
dogsArray[1] = "lucy"; //change array value

dogObject.name;
dogObject.age = 6; //add to object
dogObject.breed = "black lab";  //change object value

var postArray = [
    {
        title: "cats are average",
        author: "Colt",
        comments: ["awesome post", "boo"]
    },
    {
        title: "cats are great",
        author: "cat Lover",
        comments: ["<3", "yay"]
    }
]

console.log(postArray[1].comments[1]);

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crab"},
        {name: "Goyle"},
    ],
    color: "baby blue",
    isEvil: true
};

console.log(someObject.friends[0].name);

var moviedB = 
[
    {
        name: "In bruges",
        rating: 5,
        seen: true
    },
    {
        name: "Frozen",
        rating: 4.5,
        seen: false
    },
    {
        name: "Mad max",
        rating: 5,
        seen: true
    },
    {
        name: "le mis",
        rating: 2,
        seen: false
    }
]

for(var i = 0; i < moviedB.length; i++)
{
    if(moviedB[i].seen === true)
    {
        console.log("You have watched " + moviedB[i].name + "-"+ moviedB[i].rating + " stars");
    }
    else
    {
        console.log("You have not seen " + moviedB[i].name + "-"+ moviedB[i].rating + " stars");
    }
}

moviedB.forEach(function(movie){
    
    console.log(buildString(movie));
})

function buildString(movie)
{
    var result = "you have ";
    if(movie.seen)
    {
        result+= "watched ";
    }
    else
    {
        result+="not seen ";
    }
    result += "\"" + movie.name + "\" - ";
    result += movie.rating + "starts";
    return result;
}

var obj = {
    name: "chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y)
    {
        return x+y;
    }
}

console.log(obj.add(10,5));

var dog = {};
dog.speak = function(){
    return "woof";
}
var cat = {};
cat.speak = function(){
    return "meow";
}

console.log(dog.speak());
console.log(cat.speak());

var comments = {};

comments.data = ["good", "bad", "average"];

comments.print = function(){
    this.data.forEach(function(el) //this refers to comment
    {
        console.log(el);
    });
}

comments.print();