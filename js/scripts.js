//Utlilty Logic


//Business Logic

function output(robogersInteger) {
  const inputArrayReturned = [];
  for (let i = 0; i <= robogersInteger; i++) {
    if (i.toString().includes(3)) {
      inputArrayReturned.push("'Won't you be my neighbor?'");
    } else if (i.toString().includes(2)) {
      inputArrayReturned.push("'Boop!'");
    } else if (i.toString().includes(1)) {
      inputArrayReturned.push("'Beep!'");
    } else {
      inputArrayReturned.push(i);
    }
  }
  return inputArrayReturned;
};

//UI Logic

$(document).ready(function () {
  $("#robogers-form").submit(function (event) {
    event.preventDefault();
    let userInput = $("#userInput").val();
    let outputArrayReturned = output(userInput); 
    let neighborCount = [];
    neighborCount.push(outputArrayReturned.join(", "));
    $("#result").text(neighborCount);
    $("#result").show();
  })
});