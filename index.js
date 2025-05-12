//This is the place i will write the conversion function 
//For the temperature 


const textBox = document.getElementById("textBox");
const toFr = document.getElementById("toFr");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(toFr.checked){
        temp = textBox.value;
        temp = Number(temp);
        temp = (9 / 5) * temp + 32;
        result.textContent =  temp.toFixed(1) + "°F";

    }
    else if(toCelsius.checked){
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        result.textContent =  temp.toFixed(1) + "°C";
        

    }
    else{
        result.textContent = "Select a unit..";
    }

}