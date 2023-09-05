///////// 23

/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let myLanguages = ['js', 'react', 'flutter'];
let noOfLanguages = myLanguages.length;
let myTeacherName = 'Miss Aisha';
let currentYear = 2022;
//1 true
console.log (myLanguages.includes('react') ? `Here react is in my languages so my prediction is correct.\n ` + true: false);


//2 true 
console.log( noOfLanguages === 3 ? `The number of programming languages I know is 3 so my prediction is correct.\n` + true : false );


//3 true
console.log(2+2 === 4 ? `2+2 = 4 , so mY prediction is correct.\n` + true : false);

//4 true
console.log(myTeacherName !== 'Amna' ? `I know my teacher's name is Aisha not Amna.... he he he🤭. So my prediction is correct.\n` + true  : false);

//5 true
console.log(currentYear < 2023 ? 'I know 2022 is less than 2023,so  my prediction is correct.\n' + true : false);

//6 false
console.log(myLanguages.includes('python') ? true : `Here react isn't in my languages so my prediction is incorrect.\n` + false);

//7 false
console.log(noOfLanguages !== 3 ? true : `The number of programming languages I know is 3 so here my prediction is incorrect.\n` + false);

//8 false
console.log(2+2 === 5 ?  true : ` 2+2=4 not 5, so my prediction is incorrect\n` + false);

//9 false
console.log(myTeacherName === 'Amna' ? true : `my teacher's name is Aisha not Amna..... So my prediction is incorrect.\n` + false);

//10 false
console.log(currentYear === 2023 ? true : `2022 is not equal to 2023, so m prediction is incorrect\n` + false);
