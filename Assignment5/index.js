
// Assignment38_42
// Functions, Switch statement, While....... Do-while loops

//Q1

/*var num = +prompt("Enter base/number", 2);
var expo = +prompt("Enter exponent/power", 5);
function raisedValue(base, exponent) {
  var a = 1;
  while (exponent != 0) {
    a *= base;
    --exponent;
  }
  return alert(a)
}
raisedValue(num, expo);*/

//Q2

/*function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
  } else {
    console.log(year + ' is not a leap year');
  }
}
var year = prompt('Enter a year:');
checkLeapYear(year);*/


//Q3

/*var a = +prompt('Enter side a of triangle');
var b = +prompt('Enter side b of triangle');
var c = +prompt('Enter side c of triangle');
function semiParameter(a1, b1, c1) {
  return (a1 + b1 + c1) / 2;
}
function areaOfTriangle(a, b, c) {
  // body...
  var s = semiParameter(a, b, c);
  return s * (s - a) * (s - b) * (s - c);
}
var area = Math.pow(areaOfTriangle(a, b, c), (1 / 2));
console.log(`The area of a triangle is ${area}`);*/

//Q4

/*var sub1 = +prompt('Enter subject 1 marks', 75);
var sub2 = +prompt('Enter subject 2 marks', 81);
var sub3 = +prompt('Enter subject 3 marks', 70);
function averageMarks(marks1, marks2, marks3) {
  // body...
  return ((marks1 + marks2 + marks3) / 3)
}
function percentage(marks1, marks2, marks3) {
  // body...
  var total = marks1 + marks2 + marks3;
  return (total / 300) * 100;
}
function mainFunc(marks1, marks2, marks3) {
  // body...
  var average = averageMarks(marks1, marks2, marks3);
  var percentagee = percentage(marks1, marks2, marks3);
  return document.write(`marks of subject 1 is : ${marks1} </br>
  marks of subject 2 is : ${marks2} </br>
  marks of subject 3 is : ${marks3} </br>
  Average marks : ${average} .
  </br> Percentage : ${percentagee} %.`)
}
mainFunc(sub1, sub2, sub3)*/

//Q5

/*var str = "my name is ruhama";
var letter = prompt("Enter letter", "r")
var isFound ="false";
//console.log(str.indexOf("R"));
var index = 0;
while (index < str.length) {
  if (letter == str[index]) {
    isFound = "true";
    console.log(index);
  }
  index++
}
if(isFound === "false"){
  console.log(-1);
}*/

//Q6

/*function removeVowel() {
  // body...
  var str = "remove all vowel from str".toLocaleLowerCase();
  document.write(`String is : ${str}</br> Result is :`)
  var str2;
  var i = 0;
  while (i < str.length) {
    if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
      str2 = str[i];
      document.write(str2)
    }
    i++;
  }
}
removeVowel();*/

//Q7

/*function occurencee() {
  // body...
  var str = "please read this application and give me plaese gratuity";
  document.write(`Sentence : ${str} </br> Ocuurences are :`);
  var i = 0
  while (i < str.length) {
    //code .....
    var common = str[i] + str[i + 1];
    switch (common) {
      case 'ea':
      case 'ae':
      case 'iu':
      case 'ui':
      case 'io':
      case 'oi':
        document.write(common + " ");
    }
    i++
  }
}
occurencee();*/

//Q8

/*var distanceInKm = +prompt('Enter the distance between two cities in km', 10);
document.write(`Distance in km : ${distanceInKm} km </br>`)
function kmToMeter(distance) {
  // body...
  return document.write(`Distance in Meter :` +distance * 1000+ `m </br>`);
}
function kmToFeet(distance) {
  // body...
  return document.write(`Distance in Feet : ` +distance * 3280.84+ ` ft </br>`);
}
function kmToInches(distance) {
  // body...
  return document.write(`Distance in inches : ` +distance * 39370.1+ ` inch </br>`)
}
function kmToCm(distance) {
  // body...
  return document.write(`Distance in centimeter : ` +distance * 100000+ ' cm');
}
kmToMeter(distanceInKm); kmToFeet(distanceInKm); kmToInches(distanceInKm); kmToCm(distanceInKm);*/

//Q9

/*function calculateBonus() {
  // body...
  var noOfEmlopees = +prompt("How many employees are there?", 10);
  var i = 1;
  while (i <= noOfEmlopees) {
    // code 
    var workingHr = +prompt(`Enter the workingHring hour of the employe ${i}.`, 50);
    if (workingHr > 40)
    {
      var bonus = (workingHr - 40) * 12;
      document.write(`emloyee ${i} bonus = ${bonus}Rs. </br>`);
    }
    else
      document.write(`This employ has not done overtime.</br>`);
    i++;
  }
}
calculateBonus();*/

//Q10

/*var amount = prompt("Enter amount",470).slice(0,3);
function currencyDenomination(currency) {
  // body...
  document.write(`You will have ${currency[0]} hundered notes `);
    if(currency[1]==5){
      document.write(`1 fifty note ${currency[2]} coins `)
    }else if(currency[1]>0 && currency[1]<5){
      document.write(`${currency[1]} ten notes and ${currency[2]} coins.`);
    } else if(currency[1]==0){
      document.write(`and ${currency[2]} coins `)
    }else{
      var ten = currency[1]-5;
    document.write(`1 fifty note ${ten} ten notes and ${currency[2]} coins.`);
}}
currencyDenomination(amount);*/


//Assignment43-48 (Events)

//Q3

function removeRow(id) {
  var row = id.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(row);
}

//Q5
var x = 0;
var span = document.getElementById('counter');
var increment = document.getElementById('increment'); // find the element with the ID 'increment'
var decrement = document.getElementById('decrement'); // find the element with the ID 'decrement'

increment.addEventListener('click', function () {
  span.textContent = ++x;
});

decrement.addEventListener('click', function () {
  span.textContent = --x;
});


//Assignment 49_52

//Q1

function fieldValues() {
  // body...
  var un = document.getElementById('username').value;
  var eem = document.getElementById('email').value;
  var pswd = document.getElementById('password').value;
  var data = document.getElementById('data');

  if (eem === '') {
    alert('Email is Required')
  } else {
    data.innerHTML = `Username = ${un} </br> Email = ${eem} </br> Password = ${pswd}`;

  }

  // clear input field values
}



//Q2

var para1 = document.getElementById('para');
var morePara = 'erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta'

function more() {
  // body...
  para1.innerHTML = morePara;
}





//visible form
function hideForm() {
  var form = document.getElementById('form1');
  form.style.display = 'none';
}

function vissibleForm() {
  var form = document.getElementById('form1');
  form.style.display = 'inline-block';

  // clear form inputs
var nameInput= document.getElementById('name');
var lnameInput = document.getElementById('lname');
var genderInput = document.getElementById('gender');
var ageInput = document.getElementById('age');

nameInput.value = "";
lnameInput.value = "";
genderInput.value = "";
ageInput.value = "";
}

//add Row 
function addRow() {
  var table = document.getElementById('results');
  var row = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');

  var button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'delete');
  button.setAttribute('onclick', 'delRow(this)');


  td1.innerHTML = document.getElementById('name').value;
  td2.innerHTML = document.getElementById('lname').value;
  td3.innerHTML = document.getElementById('gender').value;
  td4.innerHTML = document.getElementById('age').value;
  td5.appendChild(button);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  table.children[0].appendChild(row);

  hideForm();
}

//delete row

function delRow(row) {
  var tablee = document.getElementById('results');
  tablee.deleteRow(row.parentNode.parentNode.rowIndex)
}








