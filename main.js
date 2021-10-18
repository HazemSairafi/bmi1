
// let count = 0;

// function counter(){
//     count++;
//     document.querySelector("h1").innerHTML=count;
// }

function whight(){

}
document.addEventListener("DOMContentLoaded",function(){
// document.querySelector("button").onclick = counter;
document.querySelector("form").onsubmit = function(){
let weight = document.querySelector("#num1").value;
let heigh = document.querySelector("#num2").value;
let tall=heigh/100;
let a=weight/(tall*tall);
 let s=a.toFixed(1);
if(a<18.5)
{document.querySelector("h1").innerHTML=(`${s}`);
document.querySelector("h2").innerHTML=(`Below normal weight`);
}
if(a>18.5 && a<25){
    document.querySelector("h1").innerHTML=(`${s}`);
    document.querySelector("h2").innerHTML=(` normalweight`); 
}
if(a>25){
    document.querySelector("h1").innerHTML=(`${s}`);
document.querySelector("h2").innerHTML=(`overweight`);
}



 
//  document.querySelector("#name").value="";


 return false;
}




});