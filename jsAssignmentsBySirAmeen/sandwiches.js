///////// 44 sandwiches 

/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function make_sandwich(...args) {
  arg = [...args];
 for (let i = 0; i< arg.length; i++) {
result =  console.log(`Adding ${arg[i]} to your sandwich.`);
  }
  console.log('\n');
  return result;
}

make_sandwich('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon');
make_sandwich('turkey', 'apple slices', 'honey mustard');
make_sandwich('peanut butter', 'strawberry jam'); 

















