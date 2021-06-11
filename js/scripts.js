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
      if(i.toString().includes(3)){
        let newNumberArrayThrees = inputArrayReturned.replace("3", "Won't you be my neighbor?");
      }else if (newNumberArrayThrees.includes(2)){
        let newNumberArrayTwos = (newNumberArrayThrees.replace("2", "Boop!"));
      }else if (newNumberArrayTwos.includes(1)){
        let newNumberArrayOnes = (newNumberArrayTwos.replace("1", "Beep!"));
      }else {
        newNumberArrayOnes.push(i);
      }
    return newNumberArrayOnes;
    };




function transformNumbers(inputArrayReturned) {
  let numberArrayMinusThrees = transformNumbers.forEach(function(numberArray) {
  if (inputArrayReturned.includes(3)){
    newNumberArrayThrees = (inputArrayReturned.replace("3", "Won't you be my neighbor?"));
  }
  let numberArrayMinusTwos = transformNumbers.forEach(function(numberArray) {
  else if (newNumberArrayThrees.includes(2)){
    newNumberArrayTwos = (newNumberArrayTwos.replace("2", "Boop!"));
  }
  let numberArrayMinusOnes = transformNumbers.forEach(function(numberArray) {
  else if (newNumberArrayTwos.includes(1)){
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
    $("#result").show();
  };
});