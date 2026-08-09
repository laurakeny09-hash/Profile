const num = document.getElementById("num");
const btn = document.getElementById("btn");

let x = 0;

btn.addEventListener("click", ()=>{
    x = x + 1;
    num.textContent = `${x}`;
});