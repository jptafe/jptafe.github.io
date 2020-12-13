function btnPress(keyVal) {
    var numberToShow = outscreen.value;
    numberToShow = (numberToShow * 10) + keyVal;
    outscreen.value = numberToShow;
}

function doCalc() {
    var newVal;
    if(calctype.value == '+') {
        newVal = Number(secondval.value) + Number(outscreen.value);
    }
    if(calctype.value == '-') {
        newVal = secondval.value - outscreen.value;
    }
    if(calctype.value == '*') {
        newVal = secondval.value * outscreen.value;
    }
    if(calctype.value == '/') {
        newVal = secondval.value / outscreen.value;
    }
    secondval = 0;
    calctype.value = 0;
    outscreen.value = newVal;
}

function calcType(keyVal) {
    calctype.value = keyVal;
    secondval.value = outscreen.value;
    outscreen.value = '';
}
