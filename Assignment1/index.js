/*Q1 : Write a JavaScript program that accepts two numbers in two prompts and
displays the larger one in the console.*/

/*let num1 = +prompt('Enter First Number');
let num2 = +prompt('Enter Second Number');

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}*/

/* Q2 : Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.
Sample: 3
Output : The sign is +
Sample: -5
Output : The sign is -

*/

/*let number = prompt('Enter Number');

if(number >= '0'){
  alert('The sign is +');
}else if(number < 0){
  alert('The sign is -')
}else{
  alert('NaN');
}*/

/*Q3 : Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console.*/

/*let numb1 = +prompt('Enter First Number',10);
let numb2 = +prompt('Enter Second Number',4);
let numb3 = +prompt('Enter Third Number',89);
let numb4 = +prompt('Enter Fourth Number',1);
let numb5 = +prompt('Enter Fifth Number',7);

let numbers = [numb1, numb2, numb3, numb4, numb5];

let largerNum = 0;
for(let i=0; i<numbers.length; i++){

  if(numbers[i] > largerNum){
    largerNum = numbers[i] ;
  }
}
console.log(largerNum);*/

/*Q4 : Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
will check if the current number is odd or even, and display a message to the
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
----------
*/

for (let i = 0; i <= 15; i++) {

  if (i % 2 === 0) {
    document.write(i + ' is even' + '<br>');
  } else {
    document.write(i + ' is odd' + '<br>');

  }
}

/*Q5 : Write a JavaScript program which computes the average marks of the
following students Then, this average is used to determine the corresponding
grade.
The grades are computed as follows:
Range Grade
<60 F
<70 D
<80 C
<90 B
<100 A */


/*let sub1 = +prompt('Enter Maths Number', 95);
let sub2 = +prompt('Enter English Number', 62);
let sub3 = +prompt('Enter Science Number', 73);

let totalMarks = 300;
let obtainedMarks = sub1 + sub2 + sub3;

let averageMarks = (obtainedMarks / totalMarks) * 100;

//console.log(averageMarks);

if(averageMarks < 60){
  console.log('Grade F');
}else if (averageMarks < 70) {
  console.log('Grade D');
}else if (averageMarks < 80) {
  console.log('Grade C');
}else if (averageMarks < 90) {
  console.log('Grade B');
}else if (averageMarks <= 100) {
  console.log('Grade A');
}*/

/*Q6 : Write a JavaScript program which iterates the integers from 1 to 100. But for
multiples of three print "Fizz" instead of the number and for the multiples of five
print "Buzz". For numbers which are multiples of both three and five print
"FizzBuzz".*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


/*Q7 : Write a JavaScript program to construct the following pattern, using a nested
for loop.
*
* *
* * *
* * * *
* * * * * 
*/


let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);

