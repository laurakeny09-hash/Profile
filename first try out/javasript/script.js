let x=0;


console.log(x);
let y=4;
let name="jay";
console.log(`My name is ${name

}`);

const pi = 3.14;

const button= document.getElementById("btn");
const number= document.getElementById("number");


function increment(){
    x=x-5;
    number.textContent=`${x}`;
    
}

button.addEventListener("click", increment);

const keny= document.getElementById("hero");

function adding(){
    x=x+10;
    number.textContent=`${x}`;
}

keny.addEventListener("click", adding);
