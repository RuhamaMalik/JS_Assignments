/////////////// 17 Shrinking Guest List

// : You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guests = ['gull', 'Fahad', 'irma'];
console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

console.log(`Sorry, ${guests[1]}  can't make it to dinner.`)


//Fahad can't make it! Let's invite shah instead.

guests[1] = 'Shah';

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

//We got a bigger table, so let's add some more people to the list.

console.log ('We got a bigger table !');

guests.unshift('Ruhama');
guests.splice(3,0,'Fahad');
guests.push('Narmeen');

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);
console.log(`${guests[3]} please come to dinner`);
console.log(`${guests[4]} please come to dinner`);
console.log(`${guests[5]} please come to dinner`);

// Oh no, the table won't arrive on time!

console.log('Sorry, we can only invite two people to dinner.')

let name = guests.pop();

console.log("Sorry, " + name + " there's no space on the table. I can't invite you to dinner");

name = guests.pop();
console.log("Sorry, " + name + " there's no space on the table.I can't invite you to dinner");

name = guests.pop();
console.log("Sorry, " + name + " there's no space  on the table.I can't invite you to dinner");

name = guests.pop();
console.log("Sorry, " + name + " there's no space on the table.I can't invite you to dinner");

//There should be two people left. Let's invite them.

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);

//Empty out the list.

guests.pop(); guests.pop();

console.log(guests);
