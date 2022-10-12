//////// 41

/*  Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

function show_magicians(magicians){
  
 for(let i = 0; i<magicians.length; i++){
n = console.log(magicians[i]);
  }
   return n;
}
let magicians =['aka mooro', 'Michel', 'gems'];

show_magicians(magicians);


/////// 42

/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

function show_magician(magicians) {

  for (let i = 0; i < magicians.length; i++) {
    n = console.log(magicians[i]);
  }
  return n;
}

function greate_magicians(magicians) {

  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + ' The greate';
    n = console.log(magicians[i]);
  }
  
  return n;
}

let magicians = ['aka mooro', 'Michel', 'gems'];

show_magician(magicians);
greate_magicians(magicians);

/////////////// 43

/*  Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

function showMagicians(magicians) {
console.log('\nOriginal Magicians\n\n');;

  for (let i = 0; i < magicians.length; i++) {
    n = console.log(magicians[i]);
  }
  return n;
}

function greateMagicians(magicians) {

console.log('\nGreate Magicians\n\n');;
  for (let i = 0; i < magicians.length; i++) {
    n = console.log( magicians[i] + ' the greate !');
  }
  return n;
}

let magicians = ['aka mooro', 'Michel', 'gems'];

showMagicians(magicians);
greateMagicians(magicians);
showmagicians(magicians);
greateMagicians(magicians);

















