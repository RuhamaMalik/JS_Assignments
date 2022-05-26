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





