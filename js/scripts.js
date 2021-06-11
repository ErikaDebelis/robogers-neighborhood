//Utlilty Logic




//Business Logic

let userInput = $("#robogersInteger").val(); 

const inputArrayReturned = [];

let numberArray = [];



function Output(userInput) {
  numberArray = createNumberArray(userInput);
    for (let i = userInput; i >= 0; i--){ 
    inputArrayReturned.push(i); 
    inputArrayReturned.sort(); 
  }
function transformNumbers(inputArrayReturned) {
  let numberArrayMinusThrees = transformNumbers.forEach(function(numberArray) {
  if (inputArrayReturned.includes("3")){
    newNumberArrayThrees = (inputArrayReturned.replace("3", "Won't you be my neighbor?"));
  }
  let numberArrayMinusTwos = transformNumbers.forEach(function(numberArray) {
  if (newNumberArrayThrees.includes("2")){
    newNumberArrayTwos = (newNumberArrayTwos.replace("2", "Boop!"));
  }
  let numberArrayMinusOnes = transformNumbers.forEach(function(numberArray) {
  if (newNumberArrayTwos.includes("1")){
    newNumberArrayOnes = (newNumberArrayTwos.replace("1", "Beep!"));
  }
  return transformNumbers(newNumberArrayOnes);
});


//UI Logic
$(document).ready(function() {
  $("form#robogers-form").submit(function(event) {
    event.preventDefault(); 
    const robogersResult = numberArrayMinusOnes(inputArrayReturned);
    $("#result").text(robogersResult);
    }
  };
});