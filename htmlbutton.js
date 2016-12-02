// JavaScript File

var num1input = document.getElementById("num1input");
var operatorinput = document.getElementById("operatorinput");
var num2input = document.getElementById("num2input");
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function(){

    
    var selected = (operatorinput.value);
    
if(selected==="+"){
    
        var answer = parseInt(num1input.value) + parseInt(num2input.value);
        document.getElementById("answer").innerHTML = answer;
}
else if(selected==="-"){
    var answer = parseInt(num1input.value) - parseInt(num2input.value);
    document.getElementById("answer").innerHTML = answer;
}
else if(selected==="*"){
    var answer = parseInt(num1input.value) * parseInt(num2input.value);
    document.getElementById("answer").innerHTML = answer;
}
else if(selected==="/"){
    var answer = parseInt(num1input.value) / parseInt(num2input.value);
    document.getElementById("answer").innerHTML = answer;
}
else if(selected==="x^y"){
    var answer = Math.pow(parseInt(num1input.value), parseInt(num2input.value));
    document.getElementById("answer").innerHTML = answer;
}
else if(selected==="root"){
    var answer = Math.pow(parseInt(num1input.value), parseInt(num2input.value));
    document.getElementById("answer").innerHTML = answer;
}

});
