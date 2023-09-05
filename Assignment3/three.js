//Assignment 9-10 (USER INPUT AND CONDITIONAL STATEMENT)

//Q1
/*var userCity = prompt("Enter City");
if(userCity === "karachi"){
    alert(' "Welcome to city of lights !!!!"');
}*/

//Q2
/*var gender = prompt(" Enter Your gender");
if(gender==="male"){
    alert("Good Morning Sir!");
}else{
    alert("Good Morning Ma'am !")
}*/

//Q3
/*var signalColor = prompt("Please enter the color of the road traffic signal such as red , yellow, green");
if(signalColor==="red"){
    alert("Must Stop!");
}else if(signalColor==="yellow"){
alert("Ready to Move!");
}else{alert("Move now!");}*/

//Q4
/*var remainingFuel = prompt("Enter Your remaining fuel in litres");
if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car!");
}*/

//Q5
//a
/*var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}

//b
var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true");
}else{
    alert("given condition for variable b is not true");
}

//c
var c = 12;
if(c++ === 13){
    alert("condition 1 is true");
}else{
    alert("condition 1 is not true");
}
if(c === 13){
    alert("condition 2 is true");
}
if(++c < 14){
    alert("condition 3 is true");
}else{
    alert("condition 3 is not true");
}

if(c === 14){
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var total_cost = materialCost + laborCost;
if(total_cost === laborCost + materialCost){
    alert("The cost equals");
}

//e
if(true){
    alert("True")
}
if(false){
    alert("False");
}else{
    alert("condition is not true");
}

//f
if("car" < "cat"){
    alert("car is smaller than cat");
}*/

//Q6

/*var total_marks = prompt(" Enter total marks ");
var obtained_marks = prompt(" Enter your obtained marks");
var percentage = (obtained_marks / total_marks) * 100;

document.write("<h1>Marks Sheet</h1>" + "</br>" + "Total marks : " + total_marks + "</br>" +
   "Obtained marks : " + obtained_marks + "</br>" + 
  "Percentage : " + percentage + "%" + "</br>");

if(percentage>= 80){
    document.write("Grade : A-One" + "</br>" + "Remarks : Excellent" + "</br>" );}else if(percentage>=70){
    document.write("Grade : A" + "</br>" + "Remarks : Good" + "</br>" );}else if(percentage>=60){
    document.write("Grade : B" + "</br>" + "Remarks : You need to improve" + "</br>" );}else{
    document.write("Grade : Fail" + "</br>" + "Remarks : Sorry!" );}*/
    
//Q7

/*var num = 4;
var guessNum = +prompt("guess the secret number (ranging 1 to 10)");

if(guessNum === num){
    alert("Bingo!Correct answer");
}else if(guessNum === ++num){
    alert("Close enough to the correct answer");
}else{
    alert("Wrong!");
}*/

//Q8

/*var num = +prompt("Enter number");
if(num % 3 === 0){
    alert("number is divisible by 3");
      }else{
          alert("number is not divisible by 3");  }*/
          
//Q9

/*var num = +prompt("Enter number");
if(num % 2 === 0){
    alert(num + " is an even number");
      }else{
          alert(num + " is an odd number");  }*/
          
//Q10

/*var temp = prompt('"Enter Temperature"');

if(temp > 40){
    alert("It is too hot out side");
}else if(temp > 30){
    alert("The weather today is normal");
}else if(temp > 20){
    alert("Today's Weather is cool");
}else{
    alert("OMG!Today's Weather is so cool");
}*/

//Q11
/*var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var operator = prompt("Enter Operator e.g(+ - * / %)");

if(operator === "+"){
    alert(num1 + " " + operator + " " + num2 + " = " + (num1+num2));
}else if(operator === "-"){
    alert(num1 + " " + operator + " " + num2 + " = " + (num1-num2));
}else if(operator === "*"){
    alert(num1 + " " + operator + " " + num2 + " = " + (num1*num2));
}else if(operator === "/"){
    alert(num1 + " " + operator + " " + num2 + " = " + (num1/num2));
}else if(operator === "%"){
    alert(num1 + " " + operator + " " + num2 + " = " + (num1 % num2));
}else{
    alert("please Enter a valid Operator");
}*/




//Assignment 12-13 
//(IF...ELSE & ELSE IF STATEMENT,
 // TESTING SETS OF CONDITIONS )


//Q1

/*var character = prompt("Enter character");
var code = character.charCodeAt(0);

var letter = String.fromCharCode(character);

if((character >= "A") && (character <= "Z")){
    alert("You have entered an Uppercase letter which is "+ character + " and its ASCII code is " + code + ".");
}else if((character >= "a") && (character <= "z")){
      alert("You have entered an Lowercase letter which is " + character + " and its ASCII code is " + code + ".");
}else if((character >=65) && (character <= 90)){
    alert( character + " is the ASCII code of uppercase letter " + letter );
}else if((character >= 97) && (character <= 122)){
    alert( character + " is the ASCII code of Lowercase letter " + letter);
}*/

//Q2

/*var int1 = +prompt("Enter Integer 1");
var int2 = +prompt("Enter Integer 2");

if(int1 > int2){
    alert(int1 + " is greater integer");
}else if(int2 > int1){
    alert(int2 + " is greater integer");
}else{
    alert(int1 + " is equal to " + int2);
}*/

//Q3

/*var num = +prompt("Enter Number");

if(num > 0){
    alert("The Number is Positive");
}else if(num === 0){
    alert("The Number is zero");
}else{
    alert("The Number is Negative");
}*/

//Q4

/*var char = prompt("Enter a character:").charAt(0);

if (char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U'){ 
alert(char + " is a vowel Letter"); 
}else if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) { 
alert(char + " is a consonant"); 
} else { 
alert("Invalid input please enter an alphabet"); }
*/

//Q5

/*var correct_pass = "ruhii12345";
var user_pass = prompt(" Enter Password");

if(user_pass === ""){
    alert("Please Enter Your Password");
}else if(user_pass === correct_pass){
    alert('"Correct!The Password you entered matches the original Password"');
}else{
    alert("Incorrect Password!");}*/
    
 //Q6
 
/* var greeting;
 var hour = 13;
 if(hour < 18){
     greeting = " Good day";
 }else{
     greeting = "Good evening";
 }
document.write(greeting);*/

//Q7

/*var time = +prompt("Enter time in 24hr format");

if((time >= 0000) && (time < 1200)){
    alert(" Good Morning");
}else if((time >= 1200) && (time < 1700)){
    alert(" Good Afternoon");
}else if((time >= 1700) && (time < 2100)){
    alert(" Good Evening");
}else{
    alert("Good Night");
}*/




//Assignment 14-16 (Arrays)

//Q1
//var students = [];

//Q2

//var myObj = {};


//Q3

//var letters = ['a', 'b', 'c', 'd'];
//document.write(letters);

//Q4

//var numbers =[1, 2, 3, 4, 5];
//document.write(numbers);

//Q5

//var booleans = [true, false, true, false];
//document.write(booleans);

//Q6

//var mix_array = ["fahad", 2, true, ["pagal", 2, true], "Ruhama"];
//document.write(mix_array);

//Q7

/*var edu = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM5", "6) MS", "7) M.Phil", "8) PhD"].join("</br>");
document.write(edu);*/

//Q8

/*var students =["Irma", "Ruhama", "Fahad"];
var scores =[320, 230, 480];
var percentages =["64℅", "46%", "96%"];
document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage : " + percentages[0] + "</br>"  +
"Score of " + students[1] + " is " + scores[1] + ". Percentage: " + percentages[1] + "</br>" +
"Score of " + students[2] + " is " + scores[2] + ". Percentage: " + percentages[2]);*/

//Q9

//var colors =["red", "blue", "green", "orange"];
//document.write(colors);

/*var user_color = prompt("Enter the color you want to add to the beginning of the array.", "black");

colors.unshift(user_color);
document.write(colors);*/

/*var user_color = prompt("Enter the color you want to add to the end of the array.", "black");

colors.push(user_color);
document.write(colors);*/

/*var user_color = prompt("Enter the color you want to add to the beginning of the array.", "black");
var user_color2 = prompt("Enter the color you want to add to the beginning of the array.", "pink");

colors.unshift(user_color, user_color2);
document.write(colors);*/

/*colors.shift();
document.write(colors);*/

/*colors.pop();
document.write(colors);*/

/*var index = +prompt("Enter the position where you want to add this color.", 3); 
var user_color =prompt("Enter the color you want to add.", "black");

colors.splice(index, 0,user_color)
document.write(colors);*/

/*var start_index = +prompt("Enter the position from which you want to start removing the color.", 1);
 var remove = +prompt("How many colors do you want to remove?", 0);

colors.splice(start_index , remove);
document.write(colors);*/

//Q10

/*var scores = [320, 230, 480, 120];
document.write("Scores Of Studends : "+ scores + "</br>");
scores.sort();
document.write("Ordered Scores of Students : " + scores);*/

//Q11

/*var cities =["Karachi", "Lahore", " Islamabad", "Quetta", " Peshawar"];

var selected_cities = cities.slice(2,4);
document.write("Cities List : </br>" + cities + "</br> </br>" +
"Selected Cities List : </br>" + selected_cities);*/

//Q12

/*var arr =["This", "is", " my", "cat"];
var str = arr.join(" ");
document.write("Array : </br>" + arr + "</br> </br> String : </br>" + str);*/

//Q13

/*var devices =[ "keyboard", "mouse", " printer", "monitor"];

var list = devices.join("</br> Out: </br>");
document.write("Devices: </br>" + devices + "</br> </br> Out </br>" + list);*/

//Q14

/*var devices =[ "keyboard", "mouse", " printer", "monitor"];

document.write("Devices: </br>" + devices );

devices.reverse()

var list = devices.join("</br> Out: </br>");
document.write("</br> </br> Out: </br>" + list );*/

//Q15

/*var phones = ["Apple", "Samsung", " Motorola", "Nokia", "Sony", " Haier"];

document.write("<select>" + "<option>" + phones[0] + "</option>" + "<option>" + phones[1] + "</option>" + "<option>" + phones[2] + "</option>" + "<option>" + phones[3] + "</option>" + "<option>" + phones[4] + "</option>" + "<option>" + phones[5] + "</option>" + "</select>");*/


// Assignment 17-20 
// Arrays And Loop

//Q1

//var arr =[[],[],[]];

//Q2
  
  /* var arr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

for(var i =0; i<arr.length; i++){
  if(i < arr.length){
    document.write(arr[i].join(" ") + "</br>")
  }
}*/


//Q3

/*for(var i = 1; i<=10; i++){
  document.write(i + "</br>");
}*/

//Q4
/*var num = +prompt("Enter a number to display the multiplication table.", 5);
var length = +prompt("Enter the length for the multiplication table.", 10);

  document.write('<h1> Multiplication table of "' + num + '" </br> Length' + length + "</h1> </br>");

for(var i = 1; i <= length; i++){
  document.write(num + " * " + i + " = " + (num*i) + "</br>");
}*/

//Q5

/*var fruits =["apple", "banana", "mango", " orange", "strawberry"];

fruits2 = fruits.join("</br>");

document.write(fruits2 + "</br> </br>");
for(var i = 0; i < fruits. length; i++){
  document.write("Element at index " + i + " is " + fruits[i] + "</br>");
}*/

//Q6

/*var arr = [];

for(var i = 1; i<=15; i++){
  arr.push(" " + i);
}
document.write("<b> Counting: </b> </br> </br>" + arr + "</br> </br>");

//6b

var arr2 = [];
for(var i = 10; i>=1; i--){
  arr2.push(" " + i);
}
document.write("<b> Reverse Counting: </b> </br> </br>" + arr2 + "</br> </br>");


//6c 6d

var arr3 = [];
var arr4 = [];
var arr5 = [];

for(var i = 0; i<=20; i++){
  if(i % 2 === 0){
    arr3.push(" " + i);
    arr5.push(" " + i + "k");
  }else{
    arr4.push(" " + i);
  }
}
document.write("<b> Even: </b> </br> </br>" + arr3 +"</br> </br> <b> Odd: </b> </br> </br>" + arr4  +"</br> </br> <b> Series: </b> </br> </br>" + arr5 );*/


//Q7

/*var sweets = ["cake", "apple pie", "cookie", "chips", " patties"];

var user_need = prompt("Welcome to ABC bakery. What do you want to order Sir/ma'am ?");

var flag = false;

for(var i=0; i<sweets.length; i++){
  if(user_need === sweets[i]){
    flag = true;
    document.write(user_need + " is <b> available </b> at index " + i + " in our bakery.");
  }
}
if(flag === false){
          document.write("We are Sorry. " + user_need + " is <b> not available </b>  in our bakery.");

}*/

//Q8

/*var arr = [24, 53, 78, 91, 12];
document.write("<b> Array items : " + arr + "</br></br>" );

var arr2 = arr.sort();

document.write(
"The largest number is : " + arr2
[arr2.length-1]);*/

//Q9

/*var arr = [24, 53, 78, 91, 12];
document.write("<b> Array items : " + arr + "</br></br>" );

var arr2 = arr.sort();

document.write("The smallest number is : " + arr2[0]);*/

//Q10

/*var arr = [];
for(var i=0; i<=100; i=i+5){
 if(i>0){
     arr.push(i);
 }
}
document.write(arr);*/









