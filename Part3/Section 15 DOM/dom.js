/*
var h1 = document.querySelector("h1");
h1.style.color = "pink";

console.log("hi");

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if(isBlue)
    {
        body.style.background = "white";
    }
    else
    {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
},1000);
*/
/*
var tag = document.getElementById("highlight");
var tags = document.getElementsByClassName("bolded");

tags[0]; //but its not array its an object, can't do forEach.

var tags = document.getElementsByTagName("li");
var tags = document.getElementsByTagName("h1");
var tags = document.getElementsByTagName("body")[0];

var tag = document.querySelector(".bolded"); //only first bolded class
var tag = document.querySelector("#highlight");
var tag = document.querySelector("h1"); //only first h1

var tag = document.querySelector("li a.special"); //valid is css also here

var tag = document.querySelectorAll(".bolded"); //only first bolded class
var tag = document.querySelectorAll("#highlight");
var tag = document.querySelectorAll("h1"); //only first h1
var tag = document.querySelectorAll("li"); //only first h1

console.log(document.getElementsByTagName("p")[0]);
console.log(document.getElementsByClassName("special")[0]);
console.log(document.getElementById("first"));
console.log(document.querySelector("#first"));
console.log(document.querySelector(".special"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("#first"));
console.log(document.querySelectorAll(".special")[0]);
console.log(document.querySelectorAll("p")[0]);

console.log(document.querySelector("h1+p")); //p after h1


var tag = document.querySelector("#first");

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

var plast = document.querySelector("#last");
 plast.classList.add("big");
 plast.classList.remove("big");
 plast.classList.toggle("big"); //is on then off, if off then on (swaps between on and off)

 plast.textContent = "changed text to this";
 

 var p = document.getElementsByTagName("p")[0].textContent = "changing text";;

 //will remove <stong>
 p.innerHTML; //will keep <stong> unless set to something new

 var ul = document.querySelector("ul");

ul.textContent; //will remove <li>
ul.innerHTML; //will keep <li>
*/
var test1 = document.querySelector("h2");

test1.textContent = "<h1>Goodbye!</h1>"

var test2 = document.querySelector("h3");

test2.innerHTML = "<h1>Goodbye!</h1>";

var img1 = document.getElementsByTagName("img")[0];

img1.getAttribute("src");
img1.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X-1200-80.jpg");


var html1 = document.querySelector("a");
html1.setAttribute("href", "https://en.wikipedia.org/wiki/Dog");
html1.textContent = "link to dogs";