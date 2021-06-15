//Utlilty Logic

let userInput = $("#robogersInteger").val(); 

//Business Logic

function Output(robogersInteger) {
  for (let i = 0; i <= robogersInteger; i++) { 
    const inputArrayReturned = [];
    if(i.toString().includes(3)){
      inputArrayReturned.push("Won't you be my neighbor?");
    }else if (i.toString().includes(2)){
      (inputArrayReturned.push("2", "Boop!"));
    }else if (i.toString.includes(1)){
      inputArrayReturned.push("1", "Beep!");
    }else {
      inputArrayReturned.push(i);
    }
  return inputArrayReturned;
};

//UI Logic
$(document).ready(function() {
  $("form#robogers-form").submit(function(event) {
    event.preventDefault(); 
    $("#result").text(inputArrayReturned);
    $("#result").show();
  }
};