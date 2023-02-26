var x=document.querySelector(".cookie");

var blue1=document.querySelector("#b1");
var blue2=document.querySelector("#b2");
var blue3=document.querySelector("#b3");
var blue4=document.querySelector("#b4");
var red1=document.querySelector("#r1");
var red2=document.querySelector("#r2");
var red3=document.querySelector("#r3");
var red4=document.querySelector("#r4");

var redarrc= ["24°","27°","21°","26°"];
var redarrf= ["75°","80°","69°","78°"];
var bluearrc=["18°","19°","16°","21°"];
var bluearrf=["65°","66°","61°","70°"];

function del(){
    x.remove();
}


function changetemp(elem){
if (elem.value=="°C"){
    blue1.innerText=bluearrc[0];
    blue2.innerText=bluearrc[1];
    blue3.innerText=bluearrc[2];
    blue4.innerText=bluearrc[3];
    red1.innerText=redarrc[0];
    red2.innerText=redarrc[1];
    red3.innerText=redarrc[2];
    red4.innerText=redarrc[3];    
}
else if(elem.value=="°F"){
    blue1.innerText=bluearrf[0];
    blue2.innerText=bluearrf[1];
    blue3.innerText=bluearrf[2];
    blue4.innerText=bluearrf[3];
    red1.innerText=redarrf[0];
    red2.innerText=redarrf[1];
    red3.innerText=redarrf[2];
    red4.innerText=redarrf[3];
}
}