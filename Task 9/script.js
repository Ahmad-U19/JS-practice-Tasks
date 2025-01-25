var fIunput=+prompt("Enter A Number: ");
var sInput=+prompt("Enter Another Number: ");

var symb=prompt("Enter the Mathametical Operator: ");

var res=0;
switch (symb) {
    case "+":
        res=fIunput+sInput;
        break;
    case "-":
        res=fIunput-sInput;
        break;
    case "*":
        res=fIunput*sInput;
        break;
    case "/":
        res=fIunput/sInput;
        break;
                        
    default:
        console.log("Enter a valid Symbol");
        break;
}

alert("Result: " + res);