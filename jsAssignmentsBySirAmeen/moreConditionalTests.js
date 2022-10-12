///////// 24

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//1
/*if('equal' ==='equal'){
  console.log('Equal operator');
}
if('not equal' !== 'notEqual'){
  console.log('Inequality operator');
}

//2
let str = 'LOWERCASE STRING';
if(str.toLowerCase() === 'lowercase string' ){
  console.log('lowercase string');
}

//3
let age = 18;
if(age >= 12 || age <= 20){
  console.log('You can enter');
}

//4 
let stuAge = 18;
let gender = 'female';
if(stuAge >= 12 || stuAge <= 20 && gender == 'female'){
  console.log('You can enter the clAss');
}

//5
let students = ['Ruhama', 'Narmeen', 'Irma'];
if(students.includes('Irma')){
  console.log('student is in a array');
}

if(students.includes('Irma')){
  console.log('student is in a array');
}
if(students.includes('Habiba')){
  console.log('student is in a array');
}else{
    console.log('student is not in a array');

}
