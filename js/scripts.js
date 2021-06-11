//Utlilty Logic




//Business Logic
const robogersCompleteOutput = ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Won't you be my neighbor?", "14", "15", "16", "17", "18", "19", "20", "Boop", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "Won't you be my neighbor?"]

let robogersOutput = []; //needed- must build dresser before putting away clothes

let inputForm = $("#robogersInteger").val(); //parseInt not needed currently- chose to turn all integers to strings in order to condense logic needed once dealing with beep boops. 


//theres gotta be a more effcient way- range?
function robogersSequence(robogersCompleteOutput) {
  for (let i = 0; i < robogersCompleteOutput.length; i++){
    if (inputForm === robogersCompleteOutput[0]) {
      robogersOutput = robogersCompleteOutput.slice(0)
      return (robogersOutput);
    } else if (inputForm === "1") {
      robogersOutput = robogersCompleteOutput.slice(1)
      return (robogersOutput);
    }else if (inputForm === "2") {
      robogersOutput = robogersCompleteOutput.slice(2)
      return (robogersOutput);
    }else if (inputForm === "3") {
      robogersOutput = robogersCompleteOutput.slice(3)
      return (robogersOutput);
    }else if (inputForm === "4-12" || inputForm === "14-20" || "22 - 31") { // unsure of formatting
      robogersOutput = robogersCompleteOutput.slice(parsInt(inputForm);
      return (robogersOutput);
    } else if (inputForm === "13") {
      robogersOutput = robogersCompleteOutput.slice(13)
      return (robogersOutput);
    } else if (inputForm === "21") {
      robogersOutput = robogersCompleteOutput.slice(21)
      return (robogersOutput);
    } else if (inputForm === "32") {
      return (robogersOutput);
    } else{
      return (#error);
    }
  }
}





//UI Logic
$(document).ready(function() {