# _Programming Language Suggester_

#### _A website _

#### _By Erika Debelis_

## Description

_a demostration site utilizing HTML, CSS, Javascript, and Markdown. Specific focus on functions, branching, and for loops_

## Technologies Used:

* _HTML_
* _CSS_
* _JS_
* _Markdown_
* _GitBash_

## Setup/Installation Instructions:

_https://erikadebelis.github.io/robogers-neighborhood/_

* _Clone this repository to your desktop_
* _Navigate to the top of the directory_
* _Open portfolio/index.html in your web browser_
* _Enter a whole number (not a negative number) in the text box and click submit to see the results below!_

## Tests/Specifications

#### _Describe: output()_ ####

* Test: "It should return an array with a 0 if the number 0 is inputted"
Code: output(0);
Output:["0"]

* Test: "It should return a string array in ascend order ending at inputted number"
Code: output(6);
Output:["0", "1", "2", "3", "4", "5", "6"]


* Test: "It should return a string array with 0 at index 0 and "Won't you be my neighbor?" if the number 3 is listed"
Code: output(6);
Output:["0", "1", "2", "Won't you be my neighbor?", "4", "5", "6"]

* Test: "It should return a string array with 0 at index 0 and "Won't you be my neighbor?", if the number 3 is listed and "Boop!" if the number 2 is listed""
Code: output(6);
Output:["0", "1", "Boop!", "Won't you be my neighbor?", "4", "5", "6"]

* Test: "It should return a string array with 0 at index 0 and "Won't you be my neighbor?" if the number 3 is listed, a "Boop!" if the number 2 is listed, and "Beep!" if 1 is listed."
Code: output(6);
Output:["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6"]

* Test: "It should return a string array with the rule for numbers containing 2 taking priority over the rules for 1."
Code: output(12);
Output:["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!","Beep!", "Boop!"]

* Test: "It should return a string array with the rule for numbers containing 3 taking priorty over the rules for 1 and 2."
Code: output(13);
Output:["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!","Beep!", "Boop!", "Won't you be my neighbor?"]


## Bugs

_no known bugs at this time_

## License

_MIT_

_Copyright (c) 2021 Erika Debelis_

_if any issues are discovered while navigating my site please let me know! It will help me learn and grow!_

## Contact Information

_Erika Debelis erika.debelis@gmail.com_
