var displayDiv = document.querySelector("#display");
var arr=[];
var y=0;
var z=0;
var operator=0;

function press(x){
    arr.push(x);
    z=parseFloat(arr.join(""));
    displayDiv.innerText =z;
}

function setOP(x){
    operator=x;
    y=z;
    z=0;
    arr=[];
}

function calculate(){
    if (operator=='*' ){
        y*=z;
    }
    else if(operator=='+' ){
        y+=z;
    }
    else if(operator=='/' ){
        y/=z;
    }
    else if(operator=='-' ){
        y-=z;
    }
    else{
        displayDiv.innerText=z;
        return;
    }
    displayDiv.innerText=y;
    z=y;
}

function clr(){
    y=0;
    z=0;
    operator=0;
    displayDiv.innerText=0;
    arr=[];
}


