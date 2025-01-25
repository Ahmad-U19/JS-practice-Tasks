var cel=+prompt("Enter Temprature In Celcius !!");
var faren=0;

function convertFarenheit(Celcius){
    return (Celcius * (9/5) + 32);
}

faren=convertFarenheit(cel);
alert("Temprature in Farenheit Would be !!" + faren);