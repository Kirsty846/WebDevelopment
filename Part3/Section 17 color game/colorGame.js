//set up object style

/*
var game = {}

game.init = function(){
    setupModeButtons();
    setupSquares();
    reset(); 
}
*/

game.init();

var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay =document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons()
{
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3:  numOfSquares = 6;
            reset();
        });
    }
}
function setupSquares()
{
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener("click", function()
        {
            var clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor)
            {
                message.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            }
            else
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again";
            }
        });
    }
}

function reset()
{
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors"; 
    for(var i =0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color)
{
    for(var i =0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(numOfColors)
{
    var arr = []
    for(var i = 0; i<numOfColors; i++)
    {
        arr[i] = randomColor(); //arr.push(randomColor())
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random()*256); //0 to 255
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
    return colorString;
}

resetButton.addEventListener("click", function()
{
    reset();
});

