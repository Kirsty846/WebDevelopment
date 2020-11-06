
/*
$("h1").click(function(){
    alert("h1 clicked")
})

$("button").click(function(){
    $(this).css("background","pink")
    var text = $(this).text();
    console.log("clicked was " + text)
})

$("input[type= 'text']").keypress(function(event){
    if(event.which === 13)
    {
        console.log("you plessed a key!"); 
    }
})


$("h1").on("click", function(){
    //$("h1").css("color","purple"); //all h1a
    $(this).css("color","purple");
})

$("input[type= 'text']").on("keypress", function(event){
    if(event.which === 13)
    {
        console.log("you plessed a key!"); 
    }
})

$("button").on("mouseenter", function(){
    $(this).css("font-weight","bold")
})

$("button").on("mouseleave", function(){
    $(this).css("font-weight","normal")
})
*/

/*
$("button").on("click", function(){
    $("div").fadeOut(1000, function(){
        console.log("fade done");
        $(this).remove();
    })
    console.log("fade busy in background");
})
*/

$("button").on("click", function(){
    $("div").slideUp();
})

