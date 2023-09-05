// Assignment 21-25
// STRING METHODS

// Q1

/*var first_name = prompt("Enter Your First name", 'Ruhama');
var last_name = prompt("Enter Your Last name", 'Gull');

var full_name = first_name + " " + last_name;

alert("Hello " + full_name + " !");*/

//Q2

/*var model = prompt("What is your favorite mobile Phone model ?", "Samsung");
var length = model.length;

document.write("My Favourite Phone is : " + model + "</br>" +
"Length : " + length);*/

//Q3

/*var str = "Pakistani";
var index = str.indexOf("n");

document.write("String : " + str + "</br> Index of 'n' is : " + index)*/

//Q4

/*var str = "Hello World";
var index = str.lastIndexOf("l");

document.write("String : " + str + "</br> Last Index of 'l' is : " + index);*/

//Q5

/*var str = "Pakistani";
var char = str.charAt("3");

document.write("String : " + str + "</br> Character at Index 3 is : " + char);*/

//Q6

/*var first_name = prompt("Enter Your First name", 'Ruhama');
var last_name = prompt("Enter Your Last name", 'Gull');

var full_name = first_name.concat(" " + last_name);

alert("Hello " + full_name + " !");*/

//Q7

/*var city = "Hyderabad";
city2 = city.replace("Hyderabad", "Islamabad");
document.write("City : " + city + "</br>" + "After replacement : " + city2);*/

//Q8

/*var message = "Ali and Sami are best friends. They play Cricket and Football together.";

message = message.replace(/and/g , "&");
document.write(message);*/

//Q9

/*var str = "472";
var str2 = parseInt(str);

document.write("Value: " + str + "</br>" + "Type: " + typeof(str) + "</br>" +
"Value: " + str2 + "</br>" + "Type: " + typeof(str2) + "</br>");*/

//Q10

/*var input = prompt("Enter Something", "peanuts");

var uppercase = input.toLocaleUpperCase();

document.write("User input : " + input + "</br> Upper case : " + uppercase);*/

//Q11 

/*var language = prompt("Enter Programming Language", "javascript");

var firstChar = language.charAt(0).toUpperCase();

var otherChar = language.slice(1);

var titleCase = firstChar.concat(otherChar);

document.write("User input : " + language + ". </br> Title case : " + titleCase + ".");*/

//Q12

/*var num = 35.36;
document.write("Number : " + num + "</br>");
num =num.toString()
var dot = num.indexOf(".");
var str1 = num.slice(0,dot);
var str2 = num.slice(dot+1);
var str = str1.concat(str2);

document.write("Result : " + str);*/

//Q13
/*var un = prompt("Enter name");

var message;
var split = [];
var arr = [];
for (var i = 0; i < un.length; i++)
{
  split[i] = un.split("&nbsp;");
  arr[i] = un.charCodeAt(i);
  if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64)
  {
    message = "Correct User Name";
  }
  while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64)
  {
    alert("please enter a valid userName");
    un = prompt("Enter your Input: ");
   split[i] = un.split("&nbsp;");
   arr[i] = un.charCodeAt(i);
  }

}
alert(message);*/





//Q14

/*var A = ["cake", "apple pie", "cookie", " chips", "patties"];

var userInput = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?", "cake").toLocaleLowerCase();

var isFound = false;

for(var i=0; i<A.length; i++){
  if(A[i] === userInput){
    isFound = true;
    document.write("The " + userInput + " is <b> available </b> at index " + i + " in our bakery.");
    break;
  }
}if(isFound === false){
    document.write("We are Sorry. " + userInput + " is <b>not available </b> in our bakery.");
}*/

//Q15

/*var str = prompt("Enter Username");
 
 var str2 = str.charAt(0).match(/[a-z]/gi);
var str3 =  str.charAt(0);
 
 if(str2 != str3){
   alert("password cannot being with a number. \n Please Enter a valid Password.");
 }else if((str2==str3) && str.length<6){
   alert("Password must contain at least 6 characters. \n Please enter a valid password.")
 }else if((str2==str3) && str.length>=6 && str.match(/[0-9]/g )){
   alert("Correct!");
 }else{
  alert( "password must cOntain atleast one digit/numner. \n Please Enter a valid Password");
 }*/
 

 
//Q16

/*var university = "University of Karachi";
var arr = university.split("");

var i = 0;
while (i < arr.length)
{
  
  document.write (arr[i] + "</br>");
  i++;
}*/

//Q17

/*var userInput = prompt("Enter Your cOuntry name", 'Pakistan');
var lastChar = userInput.charAt(userInput.length-1);

document.write('User input : ' + userInput + '</br> Last character of input : ' + lastChar);*/

//Q18

/*var str = "The quick brown fox jumps over the lazy dog.";

var matches = str.match(/the/gi)

document.write("Text : " + str + "</br> There are " + matches.length + 
" Occurrences of word '" + matches[1] + "'."); */



// Assignment 26-30
// Math Methods

//Q1

/*var num = +prompt("Enter Number", 3.45214);

var round_val = Math.round(num);
var floor_val = Math.floor(num);
var ceil_val = Math.ceil(num);

document.write("Number : " + num + "</br> Round off value : " + round_val +
"</br> Floor value : " + floor_val + "</br> Ceil value : " + ceil_val);*/

//Q2

/*var num = +prompt(" Enter negative floating point number.", -2.673);

var sub = num.toString().charAt(0);

if(sub !== "-"){
  num = num * (-1);
}

var round_val = Math.round(num);
var floor_val = Math.floor(num);
var ceil_val = Math.ceil(num);

document.write("Number : " + num + "</br> Round off value : " + round_val +
"</br> Floor value : " + floor_val + "</br> Ceil value : " + ceil_val); */

//Q3

/*var num = +prompt("Enter Number");
var abs = Math.abs(num);

document.write("The absolute value of  " + num + " is " + abs);*/

//Q4

/*var num = + prompt("Enter number", 4);

var diceRoll = Math.floor( Math.random() * 6 ) + 1;
//alert('You rolled a ' + diceRoll);
*/

//Q5

//var head = 1;
//var tail = 2;
/*var toss = Math.random()*2;
var floor =Math.floor(toss);

if (floor === 0) {
  document.write(`1 </br> Random coin value : Tails`);
}else if (floor === 1) {
  document.write(`2 </br> Random coin value : Heads`);
}*/

//Q6
/*var randomNumber = Math.floor(Math.random() * (100-1)+1)
document.write(`Random number between 1 and 100 : ${randomNumber}`);*/


//Q7

/*var weightStr = prompt("Enter your weight in kgs", "50kgs");
var lastIndex = weightStr.indexOf('k');
var kgs = weightStr.match('kgs');
var kilograms = weightStr.match('kilograms');


if((kgs||kilograms) && weightStr.match('.')){
  var weightInt =parseFloat(  weightStr.slice(0,lastIndex));
  document.write(`The weight of user is ${weightInt} kilograms `);

}else if(kgs || kilograms){
  var weightInt = parseFloat(weightStr.slice(0, lastIndex+1));
document.write(`The weight of user is ${weightInt} kilograms `);

}else{
  var weightInt = parseFloat(weightStr);
document.write(`The weight of user is ${weightInt} kilograms `);
}*/

//Q8

// Get a random integer from 1 to 10 inclusive
/*const num = Math.ceil(Math.random() * 10);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num){
  alert('Congratulations! You guessed the right number');
}else{
  alert('Try Again!');
    alert(`The right answer is ${num}`)
}*/




//Assignment31_34
// Date Method

//Q1

/*var currentDate = new Date ();
document.write(currentDate);*/

//Q2

/*var months = ["January","February", "March", "April", " May", "June", " July","August", "September"," October","November", "December" ];
var date = new Date();
var currentMonth = months[date.getMonth()];
alert(`Current month :  ${currentMonth}`);*/

//Q3

/*var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date();
var currentDay = days[date.getDay()].slice(0, 3);
alert(`Today is ${currentDay}`);*/

//Q4

/*var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = new Date();
var currentDay = days[date.getDay()].slice(0, 3);
if(currentDay==="Sat" || currentDay=== "Sun"){
  alert("It's Fun Day!");
}else{
  alert("Working day!");
}
*/

//Q5
/*var date = new Date();
var dayOfMonth = date.getDate();
if(dayOfMonth < 16){
  alert("First fifteen days of the month.");
}else{
  alert("last days of the month.");
}*/

//Q6

/*var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff / (1000 * 60 * 60);
var accurateMin = Math.floor(diffMin);

document.write(`Current Date ${todayDate} </br> 
Elapsed milliseconds since midnight, Jan 1, 1970: ${Todaymilli} <br> 
Elapsed minutes since midnight, Jan 1, 1970: ${accurateMin}`);*/

//Q7

/*var date = new Date();
var hrs = date.getHours();
if(hrs < 12){
  alert("Its AN");
}else{
  alert("It's PM");
}
*/

//Q8

/*var date = new Date("December 31, 2022");
document.write(`Later date : ${date}`);*/

//Q9

/*var todayDate = new Date();
var ramzan1 = new Date("April 3, 2022");
var msToday = todayDate.getTime();
var msRamzan = ramzan1.getTime();

var msDiff = msToday-msRamzan;
var dayDiff = msDiff/(1000*60*60*24);
var dayDiff = Math.floor(dayDiff);

document.write(`${dayDiff} days have passed since 1st Ramadan, 2022`);*/

//Q10

/*var todayDate = new Date("January 1, 2015");
var refDate = new Date("December 5,2015 22:50:16");
var msToday = todayDate.getTime();
var msRef = refDate.getTime();
var msDiff = (msRef-msToday)/60000;
var secDiff = Math.floor(msDiff);

document.write(`On refrence date ${refDate} ${secDiff} seconds had passed since beginning of 2015`);*/

//Q11

/*var currentDate = new Date();
var aheadAnHr = new Date();
aheadAnHr.setHours(aheadAnHr.getHours() -1);
document.write(`Current date : ${currentDate} </br> </br> 1 hour ago, it was  ${aheadAnHr}`);*/

//Q12

/*var currentDate = new Date();
var backYear = new Date();
backYear.setFullYear(backYear.getFullYear() -100);
document.write(`Current date : ${currentDate} </br> </br> 100 years back, it was  ${backYear}`);*/

//Q13

/*var age =+prompt("Enter your age!", 21);
var date = new Date();
var birthYear = date.getFullYear()-age;

document.write(`Your age is ${age} </br></br> Your birth year is ${birthYear}`);*/

//Q14

/*var customerName = "ABC customer";
var currentMonth;
var noOfUnit = 400;
var chargePerUnit = 22;
var netAmount = noOfUnit * chargePerUnit;
var lateCharges = 350;
var grossAmountPayable = netAmount + lateCharges;
var date = new Date();
var months = ["January", "February", "March", "April", " May", "June", " July", "August", "September", " October", "November", "December"];
var month = date.getMonth();
for (var i = 0; i < months.length; i++) {
  if (i == month) {
    currentMonth = months[i];
  }
}

document.write(` <h1> K-Electric Bill </h1> </br>
Customer Name: <b> ${customerName} </b> </br> Month: <b> ${currentMonth} </b> </br>
No of units: <b> ${noOfUnit} </b> </br> Charge per unit : <b> ${chargePerUnit} </b> </br> </br>
Net Amount Payable (within Due Date): <b> ${netAmount} </b> </br>
Late payment surcharge: <b> ${lateCharges} </b> </br>
Gross Amount Payable (after Due Date): <b> ${grossAmountPayable} </b> `)*/



//Assignment35-38 (Function)

//Q1

/*function date() {
return document.write(new Date());
  
}
date();*/

//Q2

/*function fullName(fName, lName) {
return alert(`Hello ${fName} ${lName} ! `);
 
}
fullName("Ruhama", "Malik");*/

//Q3

/* function sum(num1, num2) {
  return alert(num1 + num2);

}
sum(+prompt("enter num1"), +prompt("enter num2"));*/

//Q4

/*function sum(num1, operator, num2) {
  if (operator === "+") {
    var sum = document.write(`${num1} + ${num2} = ` + (num1 + num2));
  } else if (operator === "-") {
    sum = document.write(`${num1} - ${num2} = ` + (num1 - num2));
  } else if (operator === "*") {
    sum = document.write(`${num1} * ${num2} = ` + (num1 * num2));
  } else if (operator === "/") {
    sum = document.write(`${num1} / ${num2} = ` + (num1 / num2));
  } else {
    sum = document.write(`${num1} % ${num2} = ` + (num1 % num2));
  }
  return sum;
}
sum(+prompt("enter num1", 5), prompt("Enter Operator e.g (+ - * / %)"), +prompt("enter num2", 2));*/

//Q5

/*function square(num,expo) {
return alert( Math.pow(num,expo));
}
square(+prompt("enter number",3),+prompt("Enter Exponent/power",2));*/

//Q6
/*var a = 1;

function getFactorial(num) {
  if (num < 0) {
    a = "Error! Factorial for negative number does not exist."
  } else {
    for (var i = 1; i <= num; i++) {
      a = a * i;
    }
  }
  return alert(a);
}
getFactorial(+prompt("enter number"));*/

//Q7

/*var startNum = +prompt("Enter Start number", 1);
var endNum = +prompt("Enter end number", 100);

function counting(start, end) {
  document.write(`<h1> Forward Counting  ${start} to ${end}</h1>`)
  for (var i = start; i <= end; i = i + 10) {
    for (var j = i; j < i + 10; j++) {
      document.write(j + " ");
    }
    document.write("</br>");
  }

}
counting(startNum, endNum);*/

//Q8
/*var userBase = +prompt("Enter base");
var userPerp = +prompt("Enter Perpendicular");

function calculateHypo(base, perp) {

  function calculateSquare(n) {
    return n * n;
  }

  var baseSquare = calculateSquare(base);
  var perpSquare = calculateSquare(perp);
  var hypoSquare = baseSquare + perpSquare;
  var hypotenuse = Math.pow(hypoSquare, (1 / 2));
  return document.write(hypotenuse);
}
calculateHypo(userBase, userPerp);*/

//Q9

/*var height = prompt("Enter a whole number for the height of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");

function area(height, width) {
 var area= height * width;
  return document.write("The area of your rectangle is " + area);
}
area(height,width);*/

//Q10

/*var str = prompt("Enter Palindrome word", "madam");

function palindrome(str) {

  var reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) {
    document.write("String is Palindrome");
  } else {
    document.write("String is not Palindrome");
  }
}
palindrome(str);*/

//Q11

/*var myStr = prompt("Enter Your Sentence", "the quick brown fox");

function firstCapWord(str) {

  var eachWord = str.split(" ");

  for (var i = 0; i < eachWord.length; i++) {
    eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);
  }

  var words = eachWord.join(" ");
  alert(words);
}

firstCapWord(myStr);*/


//Q12

/*var myStr = prompt("Enter your sentence", "Web is Development tutorial").toLowerCase();
function largestWord(str) {
  // body...

var words = str.split(' ');
var lengthh = str.split(" ");

for (var i = 0; i < lengthh.length; i++) {
  lengthh[i] = lengthh[i].length;
}
lengthh.sort(function(a, b){return b - a});
for(var j =0; j<words.length; j++){
  if(words[j].length == lengthh[0]){
    alert(words[j]);
  }
}}

largestWord(myStr);*/

//Q13

/*var myStr = prompt("Enter something.", "jsResources.com");
var letterToCount = prompt("Please enter an alphabet you want to count.", "o");

function countLetter(str, letter) {

  var matches = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      matches.push(str[i]);
    }
  }
  console.log(matches.length);
}
countLetter(myStr, letterToCount);*/

//Q14

/*var radius  = +prompt("Enter Radius of a circle", 4);
function circumference(circleRadius){
  // body...
  var circleCircumference = 2*3.142*circleRadius;
  return document.write(`"The circumference is  ${circleCircumference} "`);
}
circumference(radius)


function areaOfCircle(circleRadius) {
  // body...
  var radiusSquare = circleRadius*circleRadius;
  var circleArea =3.142 * radiusSquare;
  return document.write(`</br> "The area is  ${circleArea} "`);
}
areaOfCircle(radius)*/








