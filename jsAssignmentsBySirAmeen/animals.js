//////////// 35 Animals

/*    Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
 • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

let animals = ['cat', 'dog', 'monkey'];

for(let i = 0; i< animals.length; i++){
  console.log (`A ${animals[i]} would make a great pet.`)
}
console.log (`Any of these animals would make a great pet!`);


///////// 36 T-Shirt

/*   T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/


function make_shirt(size, message){
  console.log(`I'm going to make a ${size} t-shirt.
 it will say "${message}"`);
}

make_shirt('large', 'I love js');

///////// 37 Large Shirt

/*  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/



function make_shirt(size = "large", message = 'I love js'){
  console.log(`I'm going to make a ${size} t-shirt.
 it will say "${message}"`);
}

make_shirt();
make_shirt(size = 'medium');
make_shirt('small', 'I really love JavaScript.');
















