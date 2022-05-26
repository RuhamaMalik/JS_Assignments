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
