
const btn = document.getElementsByClassName("btnx");
const result = document.getElementById("result");
const eqalbtn = document.getElementById("ceqalbtn");
const clearbtn = document.getElementById("clearbtn");
var vale = 0;
Array.from(btn).forEach(b => {
    b.addEventListener("click", function (event) {
        console.log(event.target.value);
         vale = event.target.value;
        result.value += vale; 
    });
});
clearbtn.addEventListener("click", function (event) {
    result.value = "";
});
eqalbtn.addEventListener("click", function (event) {
    //console.log(vale);
    //console.log(eval(result.value));
    if (vale === "-" || vale === "*" || vale === '/' || vale === '+') {
       
    }
    else {  result.value = eval(result.value);}
});
