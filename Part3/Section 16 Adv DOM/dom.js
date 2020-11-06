/*
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function(){
    paragraph.textContent = "Someone Clicked the Button!";
});

//also changeText() will run immediately

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Someone Clicked the Button!";
}

var h1 = document.querySelector("h1");

h1.addEventListener("click",function(){
    alert("its been clicked");
})

h1.addEventListener("click",function(){
    h1.style.background = "orange";
})

document.querySelector("ul").addEventListener("click", function(){
    console.log("ul was clicked");
})

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
}
*/
/*
var button = document.querySelector("button");
var backgroundVar = document.querySelector("body");
var paragraph = document.querySelector("p");
var isPurple = true;

button.addEventListener("click", function(){
    paragraph.textContent = "Someone Clicked the Button!";
});
*/
/*
button.addEventListener("click", function(){
    if(isPurple)
    {
        //button.style.color = purple;
        backgroundVar.style.backgroundColor = "purple";
        isPurple=false;
    }
    else
    {
        //button.style.color = white;
        backgroundVar.style.backgroundColor = "white";
        isPurple=true;       
    }
   
});
*/
/*
button.addEventListener("click", function(){
    if(isPurple)
    {
        //button.style.color = purple;
        document.body.style.background = "purple";
    }
    else
    {
        //button.style.color = white;
        document.body.style.background = "white";     
    }
    isPurple = !isPurple;
    
});

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");       
});

*/

var lis = document.querySelectorAll("li");

for(var i = 0; lis.length; i++)
{
    lis[i].addEventListener("mouseover", function(){
        //this.style.color="green";
        this.classList.add("selected");
    });
    
    lis[i].addEventListener("mouseout", function(){
        //this.style.color="black";
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}

var toCount = document.querySelectorAll("a").find(e => e.href.includes('/Web/Events/'));
var toCount2 = document.querySelectorAll("tr");
console.log(toCount2.length);


var counter =0;
for(var i = 0; i<toCount.length;i++)
{
    if(toCount[i].href.contains("/Web/Events/"))
    {
        counter++;
    }
}
console.log(counter);