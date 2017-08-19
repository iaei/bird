var move = document.getElementById("move");
var line = document.getElementById("line");
var red = document.getElementsByClassName("red");
console.log(red);

function slide (){
    red[0].style.transition= "all 1s ease";
    // console.log(red[0].style.width+"beforechange");
    red[0].style.width = "50%"; 
    // console.log(red[0].style.width+"afterchange");

    
}






document.onclick = function (event) {
    red[0].style.transition= "all 1s ease";
    var x = event.clientX;
    red[0].style.width = x + "px";
    
}


function drag(event) {
    red[0].style.transition = null;
    document.onmousemove = function mousemove(event) {
        event = event || window.event;
        var x = event.clientX;
        if(x > document.documentElement.clientWidth){
            x = document.documentElement.clientWidth;
        }
    
        red[0].style.width = x + "px";
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
}

window.onload = function run (){
    console.log(red[0].style.width);
    slide();
    move.onmousedown = function(){
        drag();
    }
    line.onmousedown = function(){
        drag();
    }
   console.log(red[0].style.width);
}




