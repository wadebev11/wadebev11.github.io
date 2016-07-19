var command="", first="", second="", operator="", result=0, split=0;

function addToCommand(value) {
    command += value;
    document.getElementById("display").innerHTML = command;
}
function evaluateComm() {
    var x = command.length;
    for (var i = 0; i < x; i++) {
        if (!(command.charAt(i) == '+' || command.charAt(i) == '-' || command.charAt(i) == '/' || command.charAt(i) == '*' || command.charAt(i) == '%')) {
            first += command.charAt(i);
        } else {
            operator = command.charAt(i);
            split = i + 1;
            break;
        }
    }
    
    for (var i = split; i < x; i++) {
        second += command.charAt(i);
    }
    if (operator == '-') {
        result = parseInt(first) - parseInt(second);
        
    } else if (operator == '+') {
        result = parseInt(first) + parseInt(second);
        
    } else if (operator == '*') {
        result = parseInt(first) * parseInt(second);
        
    } else if (operator == '/') {
        result = parseInt(first) / parseInt(second);
        
    } else if (operator == '%') {
        result = parseInt(first) % parseInt(second);
    }
    
    clearDisp();
    addToCommand(result);
}

function clearDisp() {
    first="";
    second="";
    operator="";
    command="";
    document.getElementById("display").innerHTML = 0;
}

