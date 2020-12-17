var num1 = 0;
var num2 = 0;
var opNum = '';
var makeDec = 0;

function addNum(btnPress) {
    if(makeDec == 0) {
        num1 = num1 * 10 + btnPress;
    } else {
        num1 = num1 + (btnPress / makeDec);
        makeDec = makeDec * 10;
    }
    document.getElementById('screen').innerHTML = num1;
    console.log(num1);
}
function mkDec() {
    if(makeDec == 0) {
        makeDec = 10;
    } else {
        makeDec = makeDec * 10;
    }
}
function operateNum(operator) {
    opNum = operator;
    num2 = num1;
    num1 = 0;
    makeDec = 0;
}
function calcNum() {
    var outNum = 0;
    if(opNum == '+') {
        outNum = num2 + num1;
    }
    if(opNum == '-') {
        outNum = num2 - num1;
    }
    if(opNum == '*') {
        outNum = num2 * num1;
    }
    if(opNum == '/') {
        outNum = num2 / num1;
    }
    document.getElementById('screen').innerHTML = outNum;
    num1 = outNum;
    num2 = 0;
    makeDec = 0;
}

