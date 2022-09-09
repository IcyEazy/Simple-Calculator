var answerLog = document.querySelector(".span");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var theme1 = document.getElementById("span1");
var theme2 = document.getElementById("span2");
var body = document.querySelector(".body");
var btnDelete = document.getElementById("btn-del");
var btnPlus = document.getElementById("btn-plus");
var btnMinus = document.getElementById("btn-minus");
var btnDivision = document.getElementById("btn-divi");
var btnMultiply = document.getElementById("btn-mult");
var btnDot = document.getElementById("btn-dot");
var btnEquals = document.getElementById("btn-equal");
var btnReset = document.getElementById("btn-reset");


btn0.addEventListener("click", zero );

btn1.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "1";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "1").substring(0, 12);
    }
});
btn2.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "2";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "2").substring(0, 12);
    }
});
btn3.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "3";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "3").substring(0, 12);
    }
});
btn4.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "4";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "4").substring(0, 12);
    }
});
btn5.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "5";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "5").substring(0, 12);
    }
});
btn6.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "6";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "6").substring(0, 12);
    }
});
btn7.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "7";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "7").substring(0, 12);
    }
});
btn8.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "8";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "8").substring(0, 12);
    }
});
btn9.addEventListener("click", function(){
    if(answerLog.textContent === "0"){
        answerLog.textContent = "9";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "9").substring(0, 12);
    }
});
btnDot.addEventListener("click", function(){
    answerLog.textContent = (answerLog.textContent + ".").substring(0, 12);
});
btnDelete.addEventListener("click", function(){
    answerLog.textContent = answerLog.textContent.slice(0, -1);
});

btnPlus.addEventListener("click", function(){
    answerLog.textContent = (answerLog.textContent + "+");
});

btnMinus.addEventListener("click", function(){
    answerLog.textContent = (answerLog.textContent + "-");
});

btnMultiply.addEventListener("click", function(){
    answerLog.textContent = (answerLog.textContent + "*");
});

btnDivision.addEventListener("click", function(){
    answerLog.textContent = (answerLog.textContent + "/");
});

btnReset.addEventListener("click", function(){
    answerLog.textContent = "0"
});

btnEquals.addEventListener("click", calculate);

theme1.addEventListener("click", function(){
    body.classList.remove("theme2");
    body.classList.add("theme1");
});

theme2.addEventListener("click", function(){
    body.classList.remove("theme1");
    body.classList.add("theme2");
});

function zero(){
    if(!answerLog.textContent || answerLog.textContent === "0"){
        answerLog.textContent = "0";
    }
    else{
        answerLog.textContent = (answerLog.textContent + "0").substring(0, 12);
    }
}

function calculate() {
    var p = answerLog.textContent;
    var q = eval(p);
    answerLog.textContent = q;
}