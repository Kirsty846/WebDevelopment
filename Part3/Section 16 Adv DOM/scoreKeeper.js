var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var playToNum = document.querySelector("#playToNum");
var playToNumDisplay = document.querySelector("#playToNumDisplay");
//var playToNumDisplay = document.querySelector("p span");

var p1Score=0;
var p2Score=0;
var gameOver= false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver)
    {
        p1Score++;
        if(p1Score === winningScore)
        {
            gameOver= true;
            p1Display.classList.add("greenText");
        }
        p1Display.textContent=p1Score;
    }

});

p2Button.addEventListener("click", function(){   
    if(!gameOver)
    {
        p2Score++;
        if(p2Score === winningScore)
        {
            gameOver= true;
            p2Display.classList.add("greenText");
        }
    p2Display.textContent=p2Score;
    }
});

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    gameOver= false;
    winningScore = 5;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("greenText");
    p2Display.classList.remove("greenText");
});

function reset() {  
        p1Score = 0;
        p2Score = 0;
        gameOver= false;
        winningScore = 5;
        p1Display.textContent=p1Score;
        p2Display.textContent=p2Score;
        p1Display.classList.remove("greenText");
        p2Display.classList.remove("greenText");
}
playToNum.addEventListener("change", function()
{
 playToNumDisplay.textContent = this.value;
 winningScore = Number(this.value);
 reset();
});