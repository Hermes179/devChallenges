function incrementValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
    value++;
    document.getElementById("number").value = value;
    }
}
function decrementValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
    value--;
    document.getElementById("number").value = value;
    }
}

function incrementValue2() {
    var value2 = parseInt(document.getElementById("number2").value, 10);
    value2 = isNaN(value2) ? 0 : value2;
    if (value2 < 10) {
    value2++;
    document.getElementById("number2").value = value2;
    }
}

function decrementValue2() {
    var value2 = parseInt(document.getElementById("number2").value, 10);
    value2 = isNaN(value2) ? 0 : value2;
    if (value2 > 1) {
    value2--;
    document.getElementById("number2").value = value2;
    }
}