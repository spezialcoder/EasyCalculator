var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var n7 = document.getElementById("7");
var n8 = document.getElementById("8");
var n9 = document.getElementById("9");
var eq = document.getElementById("eq");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var output = document.getElementById("output");

now = "";

function interpretInp(num) {
    if(now.length <= 15) {
        now += num;
        output.innerHTML = now;
    }
    
}

function evaluate() {
    try {
        out = eval(now);
        output.innerHTML = out;
        now = out.toString();
    } catch(err) {
        alert("Invailed");
    }
    
}

n1.onclick = function() {interpretInp("1")};
n2.onclick = function() {interpretInp("2")};
n3.onclick = function() {interpretInp("3")};
n4.onclick = function() {interpretInp("4")};
n5.onclick = function() {interpretInp("5")};
n6.onclick = function() {interpretInp("6")};
n7.onclick = function() {interpretInp("7")};
n8.onclick = function() {interpretInp("8")};
n9.onclick = function() {interpretInp("9")};
plus.onclick = function() {interpretInp("+")};
minus.onclick = function() {interpretInp("-")};
eq.onclick = evaluate;