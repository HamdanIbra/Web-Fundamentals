var displayDiv = document.querySelector("#display");
var z="";
var y="";
function display(x){
    displayDiv.innerText=x;
}

function press(x) {
    x=String(x);
    z+=x;
    display(z);
}

function setOP(x){
    y+=z;
    y+=x;
    z="";
}

function calculate(){
    y+=z
    y=eval(y);
    display(y);
    y=String(y);
    z="";
}

function clr(){
    z="";
    y="";
    display(0);
}


