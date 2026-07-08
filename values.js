let numberInput = prompt("Enter a number");
let num = parseFloat(numberInput);

if(num > 3){
    console.log("Positive Number");
} else if(num === 0){
    console.log("Number is Zero");
} else {
    console.log("Negative Number");
}