var num = document.getElementById('num');

var symbol = document.getElementById('symbol');

var equal = document.getElementById('equal');
var ans = document.getElementById('Ans');
var result = document.getElementById('result');

var clear = document.getElementById('clear');
var reset = document.getElementById('reset');
var delete1 = document.getElementById('delete');

let operand1 = null, operand2 = null, operator = null;

num.addEventListener("onclick",function(e){
    if(operand1 == null)
    {
        operand1 = e.target;
        updateresult(e.target);
    }
    else if(operand1 != null && operator == null)
    {
        operand1 = 10*operand1 + num;
        updateresult(e.target);
    }
    else if(operand1 != null && operator != null)
    {
        operand2 = e.target;
        updateresult(e.target);
    }
});

function updateresult(e.target){
    //var p = document.createElement('p');
    //var node = document.createTextNode(x);
    result.innerHTML(e.target);
}