
var x=document.querySelector(".jdt");
var z=document.querySelector("#user2");
var p=document.querySelector(".cir p")
var y=document.querySelector("#user1");
var num=2;
var num2=480;
var m=document.querySelector(".bcr");
function changeprofile(){
    x.innerText = "Elon Musk";
    
}

function removeuser(){
    y.remove() ;
    num--;
    p.innerText=num;
    
}

function removeuser2(){
    z.remove() ;
    num--;
    p.innerText=num;
}
function increment(){
    num2++;
    m.innerText=num2;
}

