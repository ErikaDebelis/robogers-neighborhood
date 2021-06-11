//Utlilty Logic




//Business Logic

let userInput = $("#robogersInteger").val(); 

const inputArrayReturned = [];




function Output(robogersInteger) {
  for (let i = robogersInteger; i >= 0; i--){ 
  inputArrayReturned.sort(); 
    if(i.toString().includes(3)){
      inputArrayReturned.replace("3", "Won't you be my neighbor?");
    }else if (i.toString().includes(2)){
      (inputArrayReturned.replace("2", "Boop!"));
    }else if (i.toString.includes(1)){
      newNumberArrayOnes.replace("1", "Beep!");
    }else {
      newNumberArrayOnes.push(i);
    }
  return newNumberArrayOnes;
};






// function transformNumbers(inputArrayReturned) {
//   let numberArrayMinusThrees = transformNumbers.forEach(function(numberArray) {
//   if (inputArrayReturned.includes(3)){
//     newNumberArrayThrees = (inputArrayReturned.replace("3", "Won't you be my neighbor?"));
//   }
//   let numberArrayMinusTwos = transformNumbers.forEach(function(numberArray) {
//   else if (newNumberArrayThrees.includes(2)){
//     newNumberArrayTwos = (newNumberArrayTwos.replace("2", "Boop!"));
//   }
//   let numberArrayMinusOnes = transformNumbers.forEach(function(numberArray) {
//   else if (newNumberArrayTwos.includes(1)){
//     newNumberArrayOnes = (newNumberArrayTwos.replace("1", "Beep!"));
//   }
//   return transformNumbers(newNumberArrayOnes);
// });


//UI Logic
$(document).ready(function() {
  $("form#robogers-form").submit(function(event) {
    event.preventDefault(); 
    $("#result").text(newNumberArrayOnes);
    $("#result").show();
  };
});