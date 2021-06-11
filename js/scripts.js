//Utlilty Logic




//Business Logic

let robogersOutput = []; //needed- must build dresser before putting away clothes

let inputForm = $("#robogersInteger").val(); //parseInt not needed currently- chose to turn all integers to strings in order to condense logic needed once dealing with beep boops. 

const inputArrayReturned = [];


function robogersSequence(number) {
  for (let i = number; i >= 0; i--){ //for loop will start with inputted number and loop till it hit 0
    inputArrayReturned.push(i);
  }
}
let inputToString = inputArrayReturned.toString(); //changes for loop sequence from numbers to a string
let inputToSeparateStrings = inputToString.split(",")

//input = 6
// inputArrayReturned = [6, 5, 4, 3, 2, 1, 0] 
//forEach 
inputToSeparateStrings.forEach(function(element) {
  if (inputForm.includes("3")){
  let ruleThree = inputForm.replace("3", "Won't you be my neighbor?");
  robogersOutput.push(ruleThree); //need to use push not concat so rules stack
    if (inputForm.includes("2")){
      let ruleTwo = inputForm.replace("2", "Boop!");
      robogersOutput.push(ruleTwo); // nested in rule three so numbers like 23 will have already been changed to 'will you be my neighbor'
      if (inputForm.includes("1")){
        let ruleOne = inputForm.replace("1", "Beep!");
        robogersOutput.push(ruleOne); //nested in rule two so numbers like 12 will have already been changed to 'boop!'
      }
    }
  }else{
    return inputArrayReturned;
  }
});





//UI Logic
$(document).ready(function() {
  ("#robogers-form").submit(function() {
    event.preventDefault(); //nested?
    const inputSubmitted = $("input#robogersInteger").val();
    const robogersResult = robogersSequence(inputSubmitted);
    $("#result").text(robogersResult);
  });
});